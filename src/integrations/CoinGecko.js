import { ethers } from 'ethers';
import { validateIsAddress } from '@pie-dao/utils';
import BigNumber from 'bignumber.js';
import Base from '../Base';

const prefix = '@elastic-dao/sdk - CoinGecko';

export default class CoinGecko extends Base {
  constructor(sdk) {
    super(sdk);

    this._contractAddresses = [];
    this._currencies = ['eth', 'eur', 'usd'];
    this._ids = ['ethereum'];
    this._pricePath = 'simple/price';
    this._tokenPricePath = 'simple/token_price';
    this._uri = 'https://api.coingecko.com/api/v3';

    this.checkPrices();
    setInterval(() => {
      this.checkPrices();
    }, 5000);
  }

  get contractAddresses() {
    return this._contractAddresses;
  }

  get currencies() {
    return this._currencies;
  }

  get ids() {
    return this._ids;
  }

  get prices() {
    return this._prices;
  }

  get priceUrl() {
    return (
      `${this.uri}/${this._pricePath}?ids=${this.ids.join(',')}` +
      '&include_market_cap=true&include_24hr_vol=true' +
      '&include_24hr_change=true&include_last_updated_at=true' +
      `&vs_currencies=${this.currencies.join(',')}`
    );
  }

  get uri() {
    return this._uri;
  }

  addContractAddress(address) {
    validateIsAddress(address, { prefix });
    const contractAddress = address.toLowerCase();
    if (
      this._contractAddresses.includes(contractAddress) ||
      contractAddress === ethers.constants.AddressZero
    ) {
      return;
    }
    this._contractAddresses.push(contractAddress);
    this.checkPrices();
  }

  checkPrices() {
    const promises = [this.fetch(this.priceUrl)];

    if (this.contractAddresses.length > 0) {
      promises.push(this.fetch(this.tokenUrl()));
    }

    return Promise.all(promises)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json())),
      )
      .then((responses) => {
        let newPrices = {};
        for (let i = 0; i < responses.length; i += 1) {
          newPrices = { ...newPrices, ...responses[i] };
        }
        this._prices = newPrices;
        this.touch();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  get24HourChange(address, currency = 'usd') {
    validateIsAddress(address, { prefix });
    const key = `${currency}_24h_change`;
    return this.getNestedBigNumber(address, key);
  }

  get24HourVolume(address, currency = 'usd') {
    validateIsAddress(address, { prefix });
    const key = `${currency}_24h_vol`;
    return this.getNestedBigNumber(address, key);
  }

  getMarketCap(address, currency = 'usd') {
    validateIsAddress(address, { prefix });
    const key = `${currency}_market_cap`;
    return this.getNestedBigNumber(address, key);
  }

  getNestedBigNumber(address, key) {
    validateIsAddress(address, { prefix });

    if (this.prices && this.prices[address] && this.prices[address][key]) {
      const bn = BigNumber(this.prices[address][key]);
      if (bn.isNaN()) {
        return BigNumber(0);
      }
      return bn;
    }

    return BigNumber(0);
  }

  getPrice(address, currency = 'usd') {
    validateIsAddress(address, { prefix });
    const key = currency;
    return this.getNestedBigNumber(key);
  }

  tokenUrl() {
    return (
      `${this.uri}/${this._tokenPricePath}/${this.ids[0]}?` +
      `contract_addresses=${this.contractAddresses.join(',')}` +
      '&include_market_cap=true&include_24hr_vol=true' +
      '&include_24hr_change=true&include_last_updated_at=true' +
      `&vs_currencies=${this.currencies.join(',')}`
    );
  }
}

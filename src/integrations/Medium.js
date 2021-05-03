import Base from '../Base';

export default class Medium extends Base {
  constructor(sdk, ens) {
    super(sdk);

    this._ens = ens;
  }

  get ens() {
    return this._ens;
  }

  get parser() {
    return this._parser;
  }

  async getENSRecord() {
    return this.sdk.provider.getResolver(this.ens);
  }

  async feed() {
    console.log('calling feed', this.sdk, this.sdk.provider);
    //    return this.cachedValue('_feed', async () => {
    console.log('getting ens');
    const ensRecord = await this.getENSRecord();
    console.log('ensRecord', ensRecord);
    const medium = await ensRecord.getText('vnd.medium');
    console.log('medium', medium);
    const feedURL = medium.replace('medium.com', 'medium.com/feed');
    console.log('feedURL', feedURL);
    const response = await fetch(feedURL);
    const text = await response.text();
    console.log('text', text);
    //    });
    return this._feed;
  }
}

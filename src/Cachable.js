import Base from './Base';
import Cache from './Cache';

export default class Cachable extends Base {
  constructor(sdk, { persist = true } = {}) {
    console.log('21.3.1');
    super(sdk);
    console.log('21.3.2');
    this._cachableStorage = new Cache(sdk, this.constructor.name, { persist });
    console.log('21.3.3');
  }

  get cache() {
    return this._cachableStorage;
  }
}

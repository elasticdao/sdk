export default class Subscribable {
  constructor() {
    this._subscribers = [];
  }

  subscribe(callback) {
    callback(this);

    const subscriber = (obj) => {
      callback(obj);
    };

    this._subscribers.push(subscriber);

    return () => {
      this._subscribers = this._subscribers.filter((sub) => sub !== subscriber);
    };
  }

  touch() {
    this._subscribers.forEach((subscriber) => subscriber(this));
  }
}

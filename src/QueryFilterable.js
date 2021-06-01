import Base from './Base';
import EventLogCollection from './EventLogCollection';

const eventLogCache = {};

export default class QueryFilterable extends Base {
  async queryFilter(eventName, startingBlock, endingBlock) {
    const key = `${this.constructor.name}|${this.id}|${eventName}`;
    const collection = eventLogCache[key];

    if (!collection) {
      eventLogCache[key] = new EventLogCollection(this.sdk, this, eventName);
      await eventLogCache[key].whenInitialized;
      return this.queryFilter(eventName, startingBlock, endingBlock);
    }

    const promises = [];

    if (startingBlock && collection.startingBlock > startingBlock) {
      promises.push(
        this.contract.queryFilter(
          eventName,
          startingBlock,
          collection.startingBlock,
        ),
      );
    }

    if (endingBlock && collection.endingBlock < endingBlock) {
      promises.push(
        this.contract.queryFilter(
          eventName,
          eventLogCache[key].endingBlock + 1,
          endingBlock,
        ),
      );
    }

    const additionalEvents = await Promise.all(promises);

    for (let i = 0; i < additionalEvents.length; i += 1) {
      for (let j = 0; j < additionalEvents[i].length; j += 1) {
        collection.addEvent(additionalEvents[i][j]);
      }
    }

    return collection.range(startingBlock, endingBlock);
  }
}

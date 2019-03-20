import AppDispatcher from '../AppDispatcher';
import * as ActionTypes from '../ActionTypes';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'changed';

const counterValues = {
  First: 0,
  Second: 10,
  Third: 30
};

const CounterStore = Object.assign({}, EventEmitter.prototype, {
  getCounterValues: function() {
    return counterValues;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

CounterStore.dispatchToken = AppDispatcher.register(action => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      counterValues[action.counterCaption]++;
      break;
    case ActionTypes.DECREMENT:
      counterValues[action.counterCaption]--;
      break;
  }
  CounterStore.emitChange();
});

export default CounterStore;

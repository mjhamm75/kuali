import _ from 'lodash';
import constants from './../constants/app.constants.js';
import dispatcher from './../dispatchers/app.dispatcher.js'
import events from 'events';

var EventEmitter = events.EventEmitter;
var CHANGE_EVENT = "change";

var starship = {};

var _setStarship = function(ship) {
	starship = ship;
}

var AppStore = _.extend(EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	dispatcherIndex: dispatcher.register(payload => {
		var action = payload.action;
		switch(action.actionType) {
			case constants.SET_STARSHIP:
				_setStarship(action.starship);
				break;
		}

		AppStore.emitChange();

		return true;
	})
});

module.exports = AppStore;
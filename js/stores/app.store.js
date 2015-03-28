import _ from 'lodash';
import constants from './../constants/app.constants.js';
import dispatcher from './../dispatchers/app.dispatcher.js'
import events from 'events';

var EventEmitter = events.EventEmitter;
var CHANGE_EVENT = "change";

var starship = {};
var starships = require('./../../mock/starships.js');

var _setStarship = function(ship) {
	starship = ship;
}

var _resetStarship = function() {
	starship = {};
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

	getStarships: function() {
		return starships;
	},

	getStarship: function() {
		return starship;
	},

	dispatcherIndex: dispatcher.register(payload => {
		var action = payload.action;
		switch(action.actionType) {
			case constants.SET_STARSHIP:
				_setStarship(action.starship);
				break;
			case constants.RESET_STARSHIP:
				_resetStarship();
				break;
		}

		AppStore.emitChange();

		return true;
	})
});

module.exports = AppStore;
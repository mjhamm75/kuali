import _ from 'lodash';
import constants from './../constants/app.constants.js';
import dispatcher from './../dispatchers/app.dispatcher.js'
import events from 'events';

var EventEmitter = events.EventEmitter;
var CHANGE_EVENT = "change";

var starship = {};
var starships = {};
var pilot = {};
var unfilteredList = {};

var _filterShips = function(term) {
	var list = _.clone(unfilteredList);
	starships = list.filter(ship => {
		return ship.name.indexOf(term) != -1;
	})
	
}

var _setPilot = function(pil) {
	pilot = pil;
}

var _setStarship = function(ship) {
	starship = ship;
}

var _setStarships = function(ships) {
	unfilteredList = _.clone(ships);
	starships = ships;
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

	getPilot: function() {
		return pilot;
	},

	getStarships: function() {
		if(!_.isEmpty(starships)) {
			return starships.sort((a, b) => {
					if(a.cost_in_credits === "unknown") {
						return true;
					} else if(b.cost_in_credits === "unknown") {
						return true;
					} else {
						return parseInt(a.cost_in_credits) > parseInt(b.cost_in_credits);						
					}
				});
		} else {
			return [];
		}
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
			case constants.SET_STARSHIPS:
				_setStarships(action.starships);
				break
			case constants.RESET_STARSHIP:
				_resetStarship();
				break;
			case constants.SET_PILOT:
				_setPilot(action.pilot);
				break;
			case constants.FILTER_SHIPS: 
				_filterShips(action.filter);
				break;
		}

		AppStore.emitChange();

		return true;
	})
});

module.exports = AppStore;
import request from 'superagent';
import dispatcher from './../dispatchers/app.dispatcher.js';
import constants from './../constants/app.constants.js';
import async from 'async';

export default {
	filterStarships: function(filterTerm) {
		dispatcher.handleViewAction({
			actionType: constants.FILTER_SHIPS,
			filter: filterTerm
		});
	},

	resetStarship: function() {
		dispatcher.handleViewAction({
			actionType: constants.RESET_STARSHIP
		});
	},

	setStarship: function(url) {
		this.resetStarship();
		request.get(url).end((err, res) => {
			dispatcher.handleViewAction({
				actionType: constants.SET_STARSHIP,
				starship: res.body
			});
		})
	},

	getStarshipsFromRest: function(pageNum, callback) {
		request.get("http://swapi.co/api/starships/?page=" + pageNum).end((err, res) => {
			callback(err, res.body);
		});
	},

	getStarships: function() {
		async.parallel({
			one: callback => {
				this.getStarshipsFromRest(1, callback)
			},
			two: callback => {
				this.getStarshipsFromRest(2, callback)
			},
			three: callback => {
				this.getStarshipsFromRest(3, callback)
			},
			four: callback => {
				this.getStarshipsFromRest(4, callback)
			}
		}, function(err, results) {
			var ships = [];
			ships = ships.concat(results.one.results, results.two.results, results.three.results, results.four.results)	

			dispatcher.handleViewAction({
				actionType: constants.SET_STARSHIPS,
				starships: ships
			});
		}) 
	},

	setPilot: function(url) {
		request.get(url).end((err, res) => {
			dispatcher.handleViewAction({
				actionType: constants.SET_PILOT,
				pilot: res.body
			});
		})
	},

	toggleSort: function() {
		dispatcher.handleViewAction({
			actionType: constants.TOGGLE_SORT
		});
	}
}
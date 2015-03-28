import request from 'superagent';
import dispatcher from './../dispatchers/app.dispatcher.js';
import constants from './../constants/app.constants.js';
import async from 'async';

export default {
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

	getStarships: function() {
		async.parallel({
			one: function(callback) {
				request.get("http://swapi.co/api/starships/?page=1").end((err, res) => {
					callback(err, res.body);
				});
			},
			two: function(callback) {
				request.get("http://swapi.co/api/starships/?page=2").end((err, res) => {
					callback(err, res.body);
				});	
			},
			three: function(callback) {
				request.get("http://swapi.co/api/starships/?page=3").end((err, res) => {
					callback(err, res.body);
				});
			},
			four: function(callback) {
				request.get("http://swapi.co/api/starships/?page=4").end((err, res) => {
					callback(err, res.body);
				});
			}
		}, function(err, results) {
			var res = [];
			res = res.concat(results.one.results, results.two.results, results.three.results, results.four.results);
			var response = {
				results: res,
				count: res.length
			}

			dispatcher.handleViewAction({
				actionType: constants.SET_STARSHIPS,
				starships: response
			});
		}) 
	}
}
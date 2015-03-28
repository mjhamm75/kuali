import request from 'superagent';
import dispatcher from './../dispatchers/app.dispatcher.js';
import constants from './../constants/app.constants.js';

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
		request.get("http://swapi.co/api/starships/").end((err, res) => {
			dispatcher.handleViewAction({
				actionType: constants.SET_STARSHIPS,
				starships: res.body
			});
		})
	}
}
import request from 'superagent';
import dispatcher from './../dispatchers/app.dispatcher.js';
import constants from './../constants/app.constants.js';

export default {
	setStarship: function(url) {
		request.get(url).end((err, res) => {
			dispatcher.handleViewAction({
				actionType: constants.SET_STARSHIP,
				starship: res.body
			});
		})
	}
}
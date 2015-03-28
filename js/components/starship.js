import React from 'react';
import store from './../stores/app.store.js';

function getStarship() {
	return store.getStarship();
}
export default React.createClass({
	getInitialState: function() {
		return {
			starship: getStarship()
		}
	},

	render: function() {
		var starship = this.state.starship;
		return (
			<div>
				{starship}
			</div>
		)
	}
});
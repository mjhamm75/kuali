import React from 'react';
import store from './../stores/app.store.js';

function getStarship() {
	return store.getStarship();
}
export default React.createClass({
	componentWillMount: function() {
		store.addChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({
			starship: getStarship()
		});
	},

	getInitialState: function() {
		return {
			starship: getStarship()
		}
	},

	render: function() {
		var starship = this.state.starship;
		if(starship) {
			return (
				<div>
					{starship}
				</div>
			)
		} else {
			return (
				<div className="spinner-margin">
					<div className="spinner">
						Loading...
					</div>
				</div>
			)
		}
	}
});
import React from 'react';
import store from './../stores/app.store.js';
import _ from 'lodash';

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
		if(_.isEmpty(starship)) {
			return (
				<div className="spinner-margin">
					<div className="spinner">
						Loading...
					</div>
				</div>
			)
		} else {
			return (
				<dl className="dl-horizontal">
					<dt>Name</dt>
					<dd>{starship.name}</dd>
					<dt>Model</dt>
					<dd>{starship.model}</dd>
					<dt>Class</dt>
					<dd>{starship.starship_class}</dd>
					<dt>Cost</dt>
					<dd>{starship.cost_in_credits}</dd>
				</dl>
			)
		}
	}
});
import React from 'react';
import store from './../stores/app.store.js';
import _ from 'lodash';

function getPilot() {
	return store.getPilot();
}
export default React.createClass({
	componentWillMount: function() {
		store.addChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({
			pilot: getPilot()
		});
	},

	getInitialState: function() {
		return {
			pilot: getPilot()
		}
	},
	render: function() {
		var pilot = this.state.pilot;
		if(_.isEmpty(pilot)) {
			return (
				<div className="spinner-margin">
					<div className="spinner">
						Loading...
					</div>
				</div>
			)
		} else {
			return (
				<div>
					<dl>
						<dt>Name</dt>
						<dd>{pilot.name}</dd>
						<dt>Height</dt>
						<dd>{pilot.height}</dd>
						<dt>Name</dt>
						<dd>{pilot.name}</dd>
						<dt>Eye Color</dt>
						<dd>{pilot.eye_color}</dd>
					</dl>
				</div>
			)			
		}
	}
});
import React from 'react';
import Router from 'react-router';
import actions from './../actions/app.actions.js';

var RouteHandler = Router.RouteHandler;

export default React.createClass({
	render: function() {
		actions.getStarships();
		return (
			<div>
				<RouteHandler />
			</div>
		)
	}
});
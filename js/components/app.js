import React from 'react';
import Router from 'react-router';
import Starships from './starships.js';
import store from './../stores/app.store.js';

var RouteHandler = Router.RouteHandler;

export default React.createClass({
	render: function() {
		return (
			<div>
				<RouteHandler />
			</div>
		)
	}
});
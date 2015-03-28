import React from 'react';
import Starships from './components/starships.js';
import mock from './../mock/starships.js';
import store from './stores/app.store.js';

function getStarships() {
	return store.getStarships().results;
}

var App = React.createClass({
	getInitialState: function() {
		return {
			starships: getStarships()
		}
	},
	render: function() {
		var starships = this.state.starships ? this.state.starships : [];
		return (
			<Starships starships={starships}/>
		)
	}
});

React.render(<App />, document.getElementById('app'));
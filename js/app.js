import React from 'react';
import Starships from './components/starships.js';
import mock from './../mock/starships.js';

require('./stores/app.store.js');

var App = React.createClass({
	render: function() {
		var starships = mock.results;
		return (
			<Starships starships={starships}/>
		)
	}
});

React.render(<App />, document.getElementById('app'));
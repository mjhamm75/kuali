import React from 'react';
import Pilots from './pilots.js';
import actions from './../actions/app.actions.js';
import store from './../stores/app.store.js';

function getStarships() {
	return store.getStarships().results;
}

export default React.createClass({
	getInitialState: function() {
		return {
			starships: getStarships()
		}
	},
	handleClick: function(url) {
		actions.setStarship(url);
		location.hash = "#/starship";
	},
	render: function() {
		var starships = this.state.starships;
		var starshipsDOM = starships.map((ship, i) => {
			return (
				<li key={i}>
					<dl onClick={this.handleClick.bind(this, ship.url)}>
						<dt>Name</dt>
						<dd>{ship.name}</dd>
						<dt>Cost</dt>
						<dd>{ship.cost_in_credits}</dd>
						<dt>Pilots</dt>
						<dd>
							<Pilots pilots={ship.pilots}/>
						</dd>
					</dl>
				</li>
			)
		});
		return (
			<ol>
				{starshipsDOM}
			</ol>
		)
	}
});
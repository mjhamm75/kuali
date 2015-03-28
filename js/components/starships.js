import React from 'react';
import Pilots from './pilots.js';
import actions from './../actions/app.actions.js';
import store from './../stores/app.store.js';
import numeral from 'numeral';

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
					<div className="cost">{numeral(ship.cost_in_credits).format('$0,0.00')}</div>
					<dl onClick={this.handleClick.bind(this, ship.url)}>
						<dt>Name</dt>
						<dd>{ship.name}</dd>
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
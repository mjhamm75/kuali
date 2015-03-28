import React from 'react';
import Pilots from './pilots.js';

export default React.createClass({
	getInitialState: function() {
		return {
			starships: this.props.starships
		}
	},
	render: function() {
		var starships = this.state.starships;
		var starshipsDOM = starships.map((ship, i) => {
			return (
				<li key={i}>
					<dl>
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
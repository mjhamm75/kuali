import React from 'react';

import actions from './../actions/app.actions.js';
import Pilots from './pilots.js';
import store from './../stores/app.store.js';
import utils from './../utils/app.utils.js';
import _ from 'lodash';

function getStarships() {
	return store.getStarships();
}

export default React.createClass({
	componentWillMount: function() {
		store.addChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({
			starships: getStarships()
		});
	},

	onChange: function(element) {
		actions.filterStarships(element.target.value);
	},

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
		if(_.isEmpty(starships)) {
			return (
				<div className="spinner-margin">
					<div className="spinner">
						Loading...
					</div>
				</div>
			)
		} else {
			var starshipsDOM = starships.map((ship, i) => {
				return (						
					<li key={i}>
						<div className="cost">{utils.formatCurrency(ship.cost_in_credits)}</div>
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
				<div>
					<form className="form-inline spacer">
						<div className="ship-count">{starships.length} Ship(s)</div>
						<div className="form-group ship-count-offset">
							<label className="right-spacer">Ship name</label>
							<input onChange={this.onChange.bind(this)} type="text" className="form-control" placeholder="Ship name" />
						</div>
					</form>
					<ol id="starships">
						{starshipsDOM}
					</ol>
				</div>
			)
		}
	}
});
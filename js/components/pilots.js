import React from 'react';
import actions from './../actions/app.actions.js';

export default React.createClass({
	getInitialState: function() {
		return {
			pilots: this.props.pilots
		}
	},
	handleClick: function(url, e) {
		e.stopPropagation();
		actions.setPilot(url);
		location.hash = "#/pilot";		
	},
	render: function() {
		var pilots = this.state.pilots;
		var pilotsDOM = pilots.map((pilot, i) => {
			return (
				<li key={i} onClick={this.handleClick.bind(this, pilot)}>{pilot}</li>
			)
		})
		return (
			<ul id="pilots" className="list-unstyled move-right">
				{pilotsDOM.length ? pilotsDOM : "No Known Pilots"}
			</ul>
		)
	}
});
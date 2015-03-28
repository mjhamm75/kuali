import React from 'react';

export default React.createClass({
	getInitialState: function() {
		return {
			pilots: this.props.pilots
		}
	},
	render: function() {
		var pilots = this.state.pilots;
		var pilotsDOM = pilots.map((pilot, i) => {
			return (
				<li key={i}>{pilot}</li>
			)
		})
		return (
			<ul className="list-unstyled move-right">
				{pilotsDOM.length ? pilotsDOM : "No Known Pilots"}
			</ul>
		)
	}
});
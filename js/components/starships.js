import React from 'react';

export default React.createClass({
	getInitialState: function() {
		return {
			starships: this.props.starships
		}
	},
	render: function() {
		var starships = this.props.starships.map((ship, i) => {
			return <li key={i}>{ship}</li>
		});
		return (
			<ul>
				{starships}
			</ul>
		)
	}
});
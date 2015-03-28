import React from 'react';

export default React.createClass({
	getInitialState: function() {
		return {
			starships: this.props.starships
		}
	},
	render: function() {
		var starships = this.state.starships;
		var starshipsDOM = starships.map((ship, i) => {
			return <li key={i}>{ship}</li>
		});
		return (
			<ol>
				{starshipsDOM}
			</ol>
		)
	}
});
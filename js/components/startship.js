import React from 'react';

export default React.createClass({
	getInitialState: function() {
		return {
			starship: this.props.starship
		}
	},

	render: function() {
		var starship = this.state.starship;
		return (
			<div>
				{starshipw}
			</div>
		)
	}
});
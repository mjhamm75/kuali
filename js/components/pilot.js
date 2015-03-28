import React from 'react';

function getPilot() {
	return store.getPilot();
}
export default React.createClass({
	getInitialState: function() {
		return {
			pilot: getPilot()
		}
	},
	render: function() {
		return (
			<div>Pilot</div>
		)
	}
});
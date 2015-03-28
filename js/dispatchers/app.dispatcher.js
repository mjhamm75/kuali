import Dispatcher from './dispatcher.js';
import _ from 'lodash';

export default _.extend(Dispatcher.prototype, {
	handleViewAction(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action
		});
	}
});
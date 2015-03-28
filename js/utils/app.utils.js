import numeral from 'numeral';

export default {
	formatCurrency: function(amount) {
		if(amount === "unknown") {
			return "Unknown"
		} else {
			return numeral(amount).format('$0,0.00')
		}
	},
}
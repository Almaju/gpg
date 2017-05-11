App = {
	error: function(err){
		if(err){
			Materialize.toast(typeof err == 'object' && err.reason? err.reason : err, 4000);
		}
	},
	success: function(msg){
		Materialize.toast(msg, 4000);
	},

	toast: function(msg){
		Materialize.toast(msg, 4000);
	},

	ucfirst: function(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	},

}
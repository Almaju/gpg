Meteor.users.helpers({
	categories: function(){
		return this.private? this.private.categories || [] : [];
	},
	requests: function(){
		return this.private? this.private.requests || [] : [];
	},
	invites: function(){
		return this.private? this.private.invites || [] : [];
	},
	refusals: function(){
		return this.private? this.private.refusals || [] : [];
	},

	hasCategory: function(cat_id){
		return _.contains(this.categories(), cat_id);
	}
});
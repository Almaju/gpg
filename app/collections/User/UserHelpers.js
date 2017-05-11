Meteor.users.helpers({
	skills: function(){
		return this.private? this.private.skills || [] : [];
	},
	interests: function(){
		return this.private? this.private.interests || [] : [];
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

	hasSkill: function(cat_id){
		return _.contains(this.skills(), cat_id);
	},
	hasInterest: function(cat_id){
		return _.contains(this.interests(), cat_id);
	}
});
Template.settings.onCreated(function(){
	this.subscribe('Categories');
});
Template.settingsNav.onRendered(function(){
	this.$('ul.tabs').tabs({
		// swipeable: true
	});
})
Template.settings.helpers({
	categories: function(){
		return Category.find();
	},
	hasSkill: function(){
		return Meteor.user().hasSkill(this._id);
	},
	hasInterest: function(){
		return Meteor.user().hasInterest(this._id);
	},
});
Template.settings.events({
	'click #skills .card': function(e, tpl){
		Meteor.call('pickSkill', this._id);
	},
	'click #interests .card': function(e, tpl){
		Meteor.call('pickInterest', this._id);
	}
})
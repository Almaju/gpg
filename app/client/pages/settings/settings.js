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
	hasCategory: function(){
		return Meteor.user().hasCategory(this._id);
	}
});
Template.settings.events({
	'click .category .card': function(e, tpl){
		Meteor.call('pickCategory', this._id);
	}
})
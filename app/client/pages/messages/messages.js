Template.messages.onCreated(function(){
	this.subscribe('Conversations');
})

Template.messages.helpers({
	doc: function(){
		let _id = Session.get('conversation');
		return _id? Conversation.findOne(_id) : false;
	},
	conversations: function(){
		return Conversation.find();
	},
})

Template.messages.events({
	'click .conversation': function(e, tpl){
		Session.set("conversation", this._id);
	}
})

Template.conversation.onRendered(function(){
	this.$('form')[0].scrollIntoView();
})
Template.conversation.onDestroyed(function(){
	Meteor.call('read', this.data._id);
})
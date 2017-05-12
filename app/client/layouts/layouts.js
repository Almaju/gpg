Template.layout.onCreated(function(){
	this.subscribe('Global');
})

Template.layout.events({
	'click [data-call]': function(e, tpl){
		$(e.currentTarget).addClass('disabled');

		Meteor.call($(e.currentTarget).data('call'), function(err, r){
			App.error(err);
			$(e.currentTarget).removeClass('disabled');
		});
	}
})

Template.navbar.events({
	'click .back': function(){
		if(Session.get('conversation'))
			Session.set('conversation', false);
		else
			FlowRouter.go('home');
	}
})

Template.navbar.helpers({
	conversations_count: function(){
		return Conversation.find().count();
	}
})
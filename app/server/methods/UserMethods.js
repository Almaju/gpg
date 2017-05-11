Meteor.methods({
	pickSkill: function(catId){
		check(catId, String);

		let user = Meteor.users.findOne(this.userId);
		if(!user) throw new Meteor.Error('unallowed', 'You need to login to add skills.');

		if(user.hasSkill(catId))
			Meteor.users.update(this.userId, {$pull: {'private.skills': catId}});
		else
			Meteor.users.update(this.userId, {$addToSet: {'private.skills': catId}});
	},
	pickInterest: function(catId){
		check(catId, String);

		let user = Meteor.users.findOne(this.userId);
		if(!user) throw new Meteor.Error('unallowed', 'You need to login to add interests.');

		if(user.hasInterest(catId))
			Meteor.users.update(this.userId, {$pull: {'private.interests': catId}});
		else
			Meteor.users.update(this.userId, {$addToSet: {'private.interests': catId}});
	},
	request: function(userId){
		check(userId, String);

		Meteor.users.update(this.userId, {$addToSet: {'private.requests': userId}})

		return Meteor.users.findOne({_id: userId, 'private.requests': this.userId});
	},
	refuse: function(userId){
		check(userId, String);

		Meteor.users.update(this.userId, {$addToSet: {'private.refusals': userId}})
	},
	read: function(conversation_id){
		check(conversation_id, String);

		Message.update({conversation_id: conversation_id, authorId: {$ne: this.userId}}, {$set: {read: true}}, {multi: true});
	},
	clean: function(){
		Meteor.users.update({}, {$set: {"private": {}}}, {multi: true});
		Conversation.remove({});
	}
})
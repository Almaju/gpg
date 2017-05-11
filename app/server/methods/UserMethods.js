Meteor.methods({
	pickCategory: function(catId){
		check(catId, String);

		let user = Meteor.users.findOne(this.userId);
		if(!user) throw new Meteor.Error('unallowed', 'You need to login to add interests.');

		if(user.hasCategory(catId))
			Meteor.users.update(this.userId, {$pull: {'private.categories': catId}});
		else
			Meteor.users.update(this.userId, {$addToSet: {'private.categories': catId}});
	},
	request: function(userId){
		check(userId, String);

		Meteor.users.update(this.userId, {$addToSet: {'private.requests': userId}})
	},
	refuse: function(userId){
		check(userId, String);

		Meteor.users.update(this.userId, {$addToSet: {'private.refusals': userId}})
	},
	read: function(conversation_id){
		check(conversation_id, String);

		Message.update({conversation_id: conversation_id, authorId: {$ne: this.userId}}, {$set: {read: true}}, {multi: true});
	}
})
Meteor.publish('Global', function(){
	return [Category.find(), Meteor.users.find({_id: this.userId}), Conversation.find({users: this.userId})];
})

Meteor.publish('Matches', function(){
	let user = Meteor.users.findOne(this.userId);

	return Meteor.users.find({
		_id: {$nin: _.union(user.requests(), user.refusals()) || []},
		$or: [
			{'private.skills': {$in: user.interests()}},
			{'private.interests': {$in: user.skills()}},
		]
	});
})

Meteor.publishComposite('Conversations', function(){
	return {
		find: function(){
			return Conversation.find({
				users: this.userId
			})
		},
		children: [{
			find: function(c){
				return Meteor.users.find({_id: {$in: c.users}});
			}
		}, {
			find: function(c){
				return Message.find({conversation_id: c._id});
			}
		}]
	};
})

// Meteor.publishComposite('Conversation', function(conversation_id){
// 	return {
// 		find: function(){
// 			return Conversation.find({
// 				users: this.userId
// 			})
// 		},
// 		children: [{
// 			find: function(c){
// 				return Meteor.users.find({_id: {$in: c.users}});
// 			}
// 		}]
// 	};
// })
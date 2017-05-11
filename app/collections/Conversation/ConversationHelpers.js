Conversation.helpers({
	mate: function(){
		return Meteor.users.findOne({_id: {$in: this.users, $ne: Meteor.userId()}})
	},
	last: function(){
		return Message.findOne({conversation_id: this._id}, {sort: {createdAt: -1}}) || {isRead: true, message: "You found a new mate!"};
	},
	messages: function(){
		return Message.find({conversation_id: this._id});
	}
});

Message.helpers({
	author: function(){
		return Meteor.users.findOne({_id: this.authorId});
	},
	isRead: function(){
		return this.read || this.authorId == Meteor.userId();
	}
});
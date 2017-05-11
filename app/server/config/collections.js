Category.allow({
	insert: function(userId, doc) {
		return false;
	},
	update: function(userId, doc, fieldNames) {
		return false;
	},
});

Conversation.allow({
	insert: function(userId, doc) {
		return false;
	},
	update: function(userId, doc, fieldNames) {
		return _.contains(doc.users, userId);
	},
});

Message.allow({
	insert: function(userId, doc) {
		return Conversation.findOne({_id: doc.conversation_id, users: userId})? true : false;
	},
	update: function(userId, doc, fieldNames) {
		return false;
	},
});
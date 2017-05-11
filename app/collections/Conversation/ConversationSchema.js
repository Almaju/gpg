Schema.Message = new SimpleSchema({
	conversation_id: {
		type: String,
		autoform: {
			type: 'hidden'
		}
	},
	message: {
		type: String,
	},
	read: {
		type: Boolean,
		autoValue: function(){
			if(this.isInsert) return false
		},
		autoform: {
			type: 'hidden'
		}
	},
	authorId: AutoValue.author,
	createdAt: AutoValue.now
});

Schema.Conversation = new SimpleSchema({
	users: {
		type: [String],
		optional: true,
	},
	read: {
		type: [String],
		optional: true,
	},
	createdAt: AutoValue.now,
	updatedAt: AutoValue.update
});

Conversation.attachSchema(Schema.Conversation);
Message.attachSchema(Schema.Message);
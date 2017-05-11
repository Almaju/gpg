Message.after.insert(function(userId, doc){
	Conversation.update(doc.conversation_id, {$set: {updatedAt: new Date()}})
})
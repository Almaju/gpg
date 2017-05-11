Meteor.users.after.update(function (userId, doc, fieldNames, modifier, options) {
	console.log(modifier);

	if(modifier && modifier.$addToSet && modifier.$addToSet['private.requests']){
		let request = modifier.$addToSet['private.requests'];
		if(_.contains(Meteor.users.findOne(request).requests(), userId))
			Conversation.insert({
				users: [userId, request],
			});
	}
});
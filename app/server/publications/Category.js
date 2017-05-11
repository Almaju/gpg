Meteor.publish('Categories', function(){
	return Category.find();
});
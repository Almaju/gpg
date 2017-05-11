import Swing from 'swing';

Template.home.onCreated(function(){
	this.subscribe('Matches');
})

Template.cards.onRendered(function(){
	console.log(Swing);
	const stack = Swing.Stack({
		allowedDirections: [Swing.Direction.LEFT, Swing.Direction.RIGHT]
	});
	const cards = {};
	
	this.$('.cards .card').each((i, targetElement) => {
		// Add card element to the Stack. 
		cards[$(targetElement).attr('id')] = stack.createCard(targetElement);
	});
	 
	// Add event listener for when a card is thrown out of the stack. 
	stack.on('throwout', (event) => {
		Meteor.call(event.throwDirection == Swing.Direction.LEFT? 'request' : 'refuse', $(event.target).attr('id'));
	});

	this.$('.cards .card .btn-floating').click(function(){
		let card = cards[$(this).closest('.card').attr('id')];
		
		if($(this).attr('id') == 'cafe')
			card.throwOut(0, 50, Swing.Direction.LEFT);
		else
			card.throwOut(0, 50, Swing.Direction.RIGHT);
	});
})

Template.cards.helpers({
	matches: function(){
		return Meteor.users.find({_id: {$ne: Meteor.userId()}});
	}
})
Template.card.helpers({
	categories: function(){
		return Category.find({_id: {$in: _.intersection(this.private.categories, Meteor.user().private.categories)}});
	}
})
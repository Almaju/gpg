// import Swing from 'swing';

Template.home.onCreated(function(){
	this.subscribe('Matches');
})
Template.home.helpers({
	userSetup: function(){
		let u = Meteor.user();
		return u.profile.firstname && !_.isEmpty(u.private.interests) && !_.isEmpty(u.private.skills);
	}
})

Template.cards.onRendered(function(){
	let tinder = function(){
		console.log('jTinder init');
		this.$('#tinderslide').jTinder({
			// dislike callback
			onDislike: function (item) {
				Meteor.call('refuse', $(item).attr('id'));
			},
			// like callback
			onLike: function (item) {
				Meteor.call('request', $(item).attr('id'), function(e, r){
					if(r){ alert("It's a match!") }
				});
			},
			animationRevertSpeed: 200,
			animationSpeed: 400,
			threshold: 1,
			likeSelector: '.like',
			dislikeSelector: '.dislike'
		});
	};

	Meteor.users.find().observeChanges(tinder);
	tinder();
})
Template.cards.events({
	'click .like, click .dislike': function(e, tpl){
		tpl.$('#tinderslide').jTinder($(e.currentTarget).attr('id'));
	}
})

Template.cards.helpers({
	matches: function(){
		return Meteor.users.find({_id: {$ne: Meteor.userId()}});
	}
})
Template.card.helpers({
	hasSkill: function(){
		return Meteor.user().hasSkill(this._id);
	},
	hasInterest: function(){
		return Meteor.user().hasInterest(this._id);
	},
	getSkills: function(){
		return Category.find({_id: {$in: this.skills()}});
	},
	getInterests: function(){
		return Category.find({_id: {$in: this.interests()}});
	}
})
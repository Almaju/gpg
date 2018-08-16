// Meteor.startup(function(){
// 	ServiceConfiguration.configurations.update({"service": "facebook" }, {
// 		$set: {
// 			"appId": "186082101899198",
// 			"secret": ""
// 		}
// 	},{
// 		upsert: true
// 	});

// 		ServiceConfiguration.configurations.update({"service": "google" }, {
// 		$set: {
// 			"clientId": "1077104954992-5rflo0f3ecurvncecgvis8gkb5ld4koe.apps.googleusercontent.com",
// 			"secret": ""
// 		}
// 	},{
// 		upsert: true
// 	});
// });

let categories = [
	{
		name: 'Sport',
		icon: 'basketball-jersey'
	},
	{
		name: 'Music',
		icon: 'headphones'
	},
	{
		name: 'Technologies',
		icon: 'server'
	},
	{
		name: 'Art',
		icon: 'theater'
	},
	{
		name: 'Sciences',
		icon: 'chemistry'
	},
	{
		name: 'Business',
		icon: 'pie-chart'
	},
	{
		name: 'Languages',
		icon: 'earth-globe'
	},
	{
		name: 'Videogames',
		icon: 'gamepad'
	},
	{
		name: 'Movies',
		icon: 'film'
	},
	{
		name: 'Domestic',
		icon: 'fried-egg'
	},
]

categories.forEach(function(c){
	Category.upsert({
		name: c.name
	}, {
		$set: c
	});
});
Category.remove({name: {$nin: _.pluck(categories, 'name')}});

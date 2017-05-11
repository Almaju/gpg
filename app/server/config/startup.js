// Meteor.startup(function(){
// 	ServiceConfiguration.configurations.update({"service": "facebook" }, {
// 		$set: {
// 			"appId": "186082101899198",
// 			"secret": "3932eb3001643b0d3725041d6cdd6ae5"
// 		}
// 	},{
// 		upsert: true
// 	});

// 		ServiceConfiguration.configurations.update({"service": "google" }, {
// 		$set: {
// 			"clientId": "1077104954992-5rflo0f3ecurvncecgvis8gkb5ld4koe.apps.googleusercontent.com",
// 			"secret": "_XbfgJja254kJS4O9Bl6YpiR"
// 		}
// 	},{
// 		upsert: true
// 	});
// });

let categories = [
	{
		name: 'Sport',
		icon: 'basketball-jersey'
		// children: [
		// 	'Football', 'Basketball', 'Tennis'
		// ]
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
		icon: 'calculator'
	},
	{
		name: 'Business',
		icon: 'pie-chart'
	},
	{
		name: 'Languages',
		icon: 'earth-globe'
	},
]

categories.forEach(function(c){
	Category.upsert({
		name: c.name
	}, {
		$set: c
	});
});
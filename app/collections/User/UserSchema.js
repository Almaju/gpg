// import SimpleSchema from 'simpl-schema';

Schema.UserProfile = new SimpleSchema({
	firstname: {
		type: String,
	},
	lastname: {
		type: String,
	},
	bio: {
		type: String,
	},
	// phone: {
	// 	type: String,
	// 	regEx: /0[1-9][0-9]{8}/,
	// 	optional: true,
	// 	autoform: {
	// 		label: "Numéro de téléphone",
	// 		icon: "phone"
	// 	}
	// },
});

Schema.UserPrivate = new SimpleSchema({
	skills: {
		type: [String],
		optional: true
	},
	interests: {
		type: [String],
		optional: true
	},
	requests: {
		type: [String],
		optional: true
	},
	refusals: {
		type: [String],
		optional: true
	},
});

Schema.User = new SimpleSchema({
	emails: {
		type: Array,
		optional: true
	},
	"emails.$": {
		type: Object
	},
	"emails.$.address": {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
		type: Boolean
	},

	'registered_emails.$': {
		type: Object,
		blackbox: true
	},
	createdAt: {
		type: Date
	},
	profile: {
		type: Schema.UserProfile,
		optional: true
	},
	private: {
		type: Schema.UserPrivate,
		optional: true
	},

	// Make sure this services field is in your schema if you're using any of the accounts packages
	services: {
		type: Object,
		optional: true,
		blackbox: true
	},
	roles: {
		type: [String],
		optional: true
	},
	
	// In order to avoid an 'Exception in setInterval callback' from Meteor
	heartbeat: {
		type: Date,
		optional: true
	},
});

Meteor.users.attachSchema(Schema.User);
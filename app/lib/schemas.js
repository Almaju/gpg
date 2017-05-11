Schema = {};

Schema.Place = new SimpleSchema({
	fullAddress: {
		type: String
	},
	lat: {
		type: Number,
		decimal: true
	},
	lng: {
		type: Number,
		decimal: true
	},
	geometry: {
		type: Object,
		blackbox: true
	},
	placeId: {
		type: String
	},
	street: {
		type: String,
		max: 100,
		optional: true,
	},
	city: {
		type: String,
		max: 50
	},
	country: {
		type: String
	}
});

AutoValue = {
	now: {
		type: Date,
		autoValue: function (){
			if(this.isInsert)
				return new Date();
			else if(this.isUpsert)
				return {$setOnInsert: new Date()};
			else
				this.unset();
		},
		autoform: {
			type: 'hidden'
		},
		optional: true,
	},
	update: {
		type: Date,
		autoValue: function (){
			return new Date();
		},
		autoform: {
			type: 'hidden'
		},
		optional: true,
	},
	author: {
		type: String,
		autoValue: function() {
			if(this.isInsert)
				return this.userId;
			else
				this.unset();
		},
		autoform: {
			type: 'hidden'
		},
		optional: true,
	},
};
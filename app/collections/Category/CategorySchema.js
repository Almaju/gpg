Schema.Category = new SimpleSchema({
	name: {
		type: String,
	},
	icon: {
		type: String,
	}
});

Category.attachSchema(Schema.Category);
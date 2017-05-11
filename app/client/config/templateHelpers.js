Template.registerHelper("Schema", Schema);

Template.registerHelper('is', function(boolean, ifTrue, ifFalse){
	return boolean? ifTrue : ifFalse;
});

Template.registerHelper('ago', function(date){
	return moment(date).fromNow();
});
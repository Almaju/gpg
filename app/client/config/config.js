// Images
// Image = new FS.Collection("images", {
// 	stores: [new FS.Store.S3("images")]
// });

// Lang
// T9n.setLanguage('fr');

// AutoForm
AutoForm.setDefaultTemplate('materialize');

AutoForm.addInputType('schedule', {
	template: 'scheduleForm'
})
AutoForm.addInputType('fileupload', {
	template: 'fileuploadForm'
})

AutoForm.addHooks(null, {
	onSuccess: function(){
		App.toast('Success!');
	},
	beginSubmit: function() {
		$('form button').addClass('disabled');
	},
	endSubmit: function() {
		$('form button').removeClass('disabled');
	},
	onError: function(type, err){
		App.error(err);
	}
});
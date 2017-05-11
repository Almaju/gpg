FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

// --- HOME --- //
FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('layout', {
			content: 'home',
		});
	}
});
FlowRouter.route('/settings', {
	name: 'settings',
	action() {
		BlazeLayout.render('layout', {
			content: 'settings',
		});
	}
});
FlowRouter.route('/messages', {
	name: 'messages',
	action() {
		BlazeLayout.render('layout', {
			content: 'messages',
		});
	}
});
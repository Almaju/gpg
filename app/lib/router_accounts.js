AccountsTemplates.configure({
	defaultLayout: 'guest',
	defaultLayoutRegions: {},
	defaultContentRegion: 'content',

	 // Behavior
	sendVerificationEmail: true,
	enablePasswordChange: true,

	// Appearance
	showAddRemoveServices: true,
	showForgotPasswordLink: true,
	showLabels: false,
	showPlaceholders: true,
	// showResendVerificationEmailLink: true,

	// Privacy Policy and Terms of Use
	termsUrl: App.about + 'conditions-generales-d-utilisation',

	// Redirects
	homeRoutePath: '/home',
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
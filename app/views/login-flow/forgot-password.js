import LoginView from "../login";

var ForgotPasswordView = LoginView.extend({
	templateName: 'login_flow/forgot_password',
	pageTitle: 'Reset password',
	afterFormLink: function() {
		return {
			linkTo: 'login',
			linkText: 'Back to sign in'
		};
	}.property(),
});

export default ForgotPasswordView;
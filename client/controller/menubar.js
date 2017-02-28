// This handles all of the account information, and anything that
// needs to be rendered by the body

Template.body.helpers({
	userId() {
		return Meteor.user() == null;
	}
});
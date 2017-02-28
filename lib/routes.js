// The rendering locations

FlowRouter.route('/signup', {
    name: 'signup',
    action: function() {
        BlazeLayout.render('signup');
    }
});

FlowRouter.route('/doctor', {
    name: 'doctor',
    action: function() {
        BlazeLayout.render('doctor');
    }
});

FlowRouter.route('/patient', {
    name: 'patient',
    action: function() {
        BlazeLayout.render('patient');
    }
});

FlowRouter.route('/signout', {
    name: 'signout',
    action: function() {
        Meteor.logout();
        FlowRouter.go('/');
    }
});

FlowRouter.route('/*', {
    name: 'home',
    action: function() {
        BlazeLayout.render('home');
    }
});
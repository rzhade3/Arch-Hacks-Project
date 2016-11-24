FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render('home');
    }
});

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
})

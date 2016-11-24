import { Template } from 'meteor/templating';

require('../templates/patient.html');

import { Checklists } from '../../imports/checklists.js';

Template.patient.events({
    "submit .addChecklist": function(event, template) {
        event.preventDefault();

        Checklists.insert({
            name: event.target.name.value,
            symptoms: event.target.symptoms.value,
            diagnosis: event.target.diagnosis.value
        });

        event.target.name.value ='';
        event.target.symptoms.value='';
        event.target.diagnosis.value='';
    }
});
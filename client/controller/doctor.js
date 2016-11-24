import { Template } from 'meteor/templating';

require('../templates/doctor.html');

import { Checklists } from '../../imports/checklists.js';

Template.body.helpers({
  checklists() {
    return Checklists.find();
  },
});
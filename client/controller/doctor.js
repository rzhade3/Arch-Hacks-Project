import { Template } from 'meteor/templating';

require('../templates/doctor.html');

import { Checklists } from '../../imports/checklists.js';

Template.doctor.helpers({
  checklists() {
    return Checklists.find();
  },
});
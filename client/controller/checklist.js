import { Template } from 'meteor/templating';

import { Checklists } from '../../imports/checklists.js';

require('../templates/checklist.html');

Template.checklist.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Checklists.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Checklists.remove(this._id);
  },
})
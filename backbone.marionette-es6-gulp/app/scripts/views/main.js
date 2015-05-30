'use strict';

import Marionette from 'marionette';

import template from 'templates/main.hbs';

export default Marionette.LayoutView.extend({
  template,

  templateHelpers() {
    return {
      buildTime: '{{build-time}}'
    };
  }
});

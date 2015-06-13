'use strict';

import Marionette from 'marionette';

import template from 'templates/main.hbs';
import styles from 'styles/screens/_main.css';

export default Marionette.LayoutView.extend({
  template,

  el: '#content',

  className: styles.main,

  templateHelpers() {
    return {
      buildTime: '{{build-time}}',
      styles: styles
    };
  }
});

'use strict';

import Backbone from 'backbone';

import MainView from 'views/main';

export default Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index() {
    var view = new MainView();
    view.render();
  }
});

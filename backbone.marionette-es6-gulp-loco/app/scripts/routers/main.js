'use strict';

import Backbone from 'backbone';
import $ from 'jquery';

import MainView from 'views/main';

export default Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index() {
    var view = new MainView();
    $('#content').html(view.render().el);
  }
});

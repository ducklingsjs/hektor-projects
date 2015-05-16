var Backbone = require('backbone');
var $ = require('jquery');

var MainView = require('views/main');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function() {
    var view = new MainView();
    $('#content').html(view.render().el);
  }
});

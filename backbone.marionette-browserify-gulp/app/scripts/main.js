var Backbone = require('backbone');

var Router = require('routers/main');
var data = require('services/data');

require('services/handlebars-helpers');

data.router = new Router();
Backbone.history.start({
  pushState: true
});

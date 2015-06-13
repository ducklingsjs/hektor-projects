import 'utils/nw-init';

import Backbone from 'backbone';

import 'services/handlebars-helpers';

import Router from 'routers/main';
import data from 'services/data';

if (!window.requireNode) {
  window.requireNode = require;
}

data.router = new Router();
Backbone.history.start({
  pushState: false
});

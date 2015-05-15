import 'babel/polyfill';

import Backbone from 'backbone';

import Router from 'routers/main';
import data from 'services/data';

import 'services/handlebars-helpers';

data.router = new Router();
Backbone.history.start({
  pushState: true
});

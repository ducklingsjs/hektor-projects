import 'babel/polyfill';

import Backbone from 'backbone';

import 'services/handlebars-helpers';

import Router from 'routers/main';
import data from 'services/data';

data.router = new Router();
Backbone.history.start({
  pushState: true
});

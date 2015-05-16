var Handlebars = require('handlebars/runtime');

Handlebars.registerHelper('now', function() {
  return new Date();
});

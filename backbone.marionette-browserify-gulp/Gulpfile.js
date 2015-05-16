var gulp = require('gulp');

var H = require('hektor-gulp')(gulp).load({
  styles: {},
  scripts: {
    moduleSystemConfig: {
      aliases: {
        underscore: 'lodash',
        marionette: 'backbone.marionette'
      }
    },
    transpiler: null,
    debug: true
  },
  connect: {
    root: ['.tmp', 'app'],
    port: 9100,
    livereload: {
      port: 10100
    }
  },
  serve: {}
});

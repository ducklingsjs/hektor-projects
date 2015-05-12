var gulp = require('gulp');

var H = require('hektor-gulp')(gulp).load({
  styles: {},
  scripts: {
    aliasify: {
      aliases: {
        underscore: 'lodash',
        marionette: 'backbone.marionette'
      }
    },
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

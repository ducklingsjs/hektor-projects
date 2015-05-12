var gulp = require('gulp');

var H = require('hektor-gulp')(gulp).load({
  sass: {},
  browserify: {
    aliasify: {
      aliases: {
        underscore: 'lodash',
        marionette: 'backbone.marionette'
      }
    },
    debug: true
  },
  connect: {},
  serve: {}
});

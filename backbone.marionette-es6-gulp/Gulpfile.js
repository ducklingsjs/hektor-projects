var gulp = require('gulp');

var H = require('hektor-gulp')(gulp).load({
  scripts: {
    moduleSystemConfig: {
      aliases: {
        underscore: 'lodash',
        marionette: 'backbone.marionette'
      }
    },
    transpiler: 'babel',
    debug: true
  },
  connect: {
    root: ['.tmp', 'app'],
    port: 9100,
    livereload: {
      port: 10100
    }
  },
  codecheck: {
    fail: true
  },
  replace: {
    from: '{{build-time}}',
    to: function() { return (new Date()).toString(); }
  },
  serve: {
    watch: [
      {
        path: '<%= paths.app %>/styles/{,**/}*.scss',
        tasks: ['styles']
      }, {
        path: '<%= paths.app %>/scripts/{,**/}*.{js,hbs}',
        tasks: ['scripts', 'replace']
      }
    ]
  }
}, true);

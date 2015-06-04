var gulp = require('gulp');

var nodePath = ['app/scripts', '.tmp/styles/app'];
if (process.env.NODE_PATH) {
  var paths = process.env.NODE_PATH.split(':');
  nodePath = paths.concat(nodePath);
}

console.log(nodePath);

var H = require('hektor-gulp')(gulp).load({
  scripts: {
    moduleSystemConfig: {
      aliases: {
        underscore: 'lodash',
        marionette: 'backbone.marionette'
      },
      nodePath: nodePath
    },
    transpiler: 'babel',
    debug: true
  },
  styles: {
    loco: {
      dest: '<%= paths.tmp %>/styles/',
      format: '_%sha1:4%'
    },
    dest: '<%= paths.tmp %>/styles/main.css'
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
  },
  build: {
    moduleName: 'sequence',
    tasks: ['styles', 'scripts', 'codecheck', 'minify', 'rev']
  }
}, true);

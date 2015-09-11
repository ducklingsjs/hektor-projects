'use strict';

var gulp = require('gulp');

require('hektor-gulp')(gulp).load({
  scripts: {
    src: '<%= paths.app %>/scripts/main.dart',
    moduleSystem: 'dart',
    debug: true
  },
  postcss: {
    src: '<%= paths.app %>/styles/main.css',
    processors: [
      ['postcss-import'],
      ['postcss-nested'],
      ['postcss-simple-vars'],
      ['postcss-nested-props'],
      ['postcss-size'],
      ['postcss-position'],
      ['autoprefixer', { browsers: ['last 1 Chrome version'] }]
    ],
    dest: '<%= paths.tmp %>/styles'
  },
  connect: {
    root: ['.tmp', 'app'],
    port: 9100,
    livereload: {
      port: 10100
    }
  },
  serve: {
    watch: [
      {
        path: '<%= paths.app %>/styles/{,**/}*.scss',
        tasks: ['postcss']
      }, {
        path: '<%= paths.app %>/scripts/{,**/}*.{dart}',
        tasks: ['scripts']
      }
    ]
  }
}, true);

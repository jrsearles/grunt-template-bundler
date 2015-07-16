/*
 * grunt-template-bundle
 * 
 *
 * Copyright (c) 2015 Joshua Searles
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Configuration to be run (and then tested).
    templateBundle: {
      default_options: {
        options: {
          minify: true
        },
        files: {
          "test/actual/template.html": ["test/fixtures/**/*.html"]
        }
      },
      wrapped_options: {
        options: {
          minify: true,
          wrapper: function (src, path) { return "jsMethod(\"" + src.replace(/"/g, "\\\"") + "\");"; }
        },
        files: {
          "test/actual/template.js": ["test/fixtures/**/*.html"]
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['templateBundle', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
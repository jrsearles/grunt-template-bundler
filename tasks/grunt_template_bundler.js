/*
 * grunt-template-bundler
 * 
 *
 * Copyright (c) 2015 Joshua Searles
 * Licensed under the MIT license.
 */
"use strict";
var minify = require("html-minifier").minify;

module.exports = function (grunt) {
  grunt.registerMultiTask("templateBundle", "Grunt plugin which takes html files and ", function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      minify: true,
      separator: grunt.util.linefeed,
      wrapper: undefined,
      minifyOptions: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        caseSensitive: true
      }
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var output = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn("Source file \"" + filepath + "\" not found.");
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        var src = grunt.file.read(filepath);

        if (options.minify) {
          src = minify(src, options.minifyOptions);
        }

        if (options.wrapper) {
          return options.wrapper(src, filepath);
        }

        return src;
      }).join(grunt.util.normalizelf(options.separator));

      grunt.file.write(file.dest, output);
      grunt.log.writeln("File \"" + file.dest + "\" created.");
    });
  });
};

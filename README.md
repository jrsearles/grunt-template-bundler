# grunt-template-bundler

> Grunt plugin to concatenate and minify html templates

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-template-bundler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-template-bundler');
```

## The "grunt-template-bundler" task

### Overview
In your project's Gruntfile, add a section named `templateBundle` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  templateBundle: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.separator
Type: `String`
Default value: `newline`

A string value that is used to do something with whatever.

#### options.minify
Type: `Boolean`
Default value: `true`

Indicates whether to minify the html. 

#### options.minifyOptions
Type: `Object`
Default value: `{
        collapseWhitespace: true,
        keepClosingSlash: true,
        caseSensitive: true
      }`

Minify options that are passed directly into the [HTML Minifier](https://github.com/kangax/html-minifier)

#### options.wrapper
Type: `Function`
Default value: `undefined`

If supplied this function will get the minified html and filepath as separate arguments and return a string which will be used in the output file.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Joshua Searles. Licensed under the MIT license.

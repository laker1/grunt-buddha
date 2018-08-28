# grunt-buddha-maple

> Buddha\'s grace illuminates code as sunshine.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-buddha-maple --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buddha-maple');
```

## The "buddha_maple" task

### Overview
In your project's Gruntfile, add a section named `buddha_maple` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  buddha_maple: {
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

#### options.who
Type: `String`
Default value: `'assets/alpaca.txt'`

指定使用佛祖还是神兽来保佑我们的代码

#### options.commentSymbol
Type: `String`
Default value: `'//'`

指定添加佛祖或神兽时使用的注释符号

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  buddha_maple: {
    options: {
      who:'assets/alpaca.txt',
      commentSymbol:'//'
    },
    dist: 'test/fixtures/*.js'
  },
})
```

#### Custom Options
In this example, custom options like this:

```js
grunt.initConfig({
  buddha_maple: {
    options: {
      who: 'assets/buddha.txt',
      commentSymbol: '//---',
    },
    dist: 'test/fixtures/*.js'
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2018-08-28&nbsp;&nbsp;&nbsp;0.0.1&nbsp;&nbsp;&nbsp;init

## License
Copyright (c) 2018 maple. Licensed under the MIT license.

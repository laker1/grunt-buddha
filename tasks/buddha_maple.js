/*
 * grunt-buddha-maple
 * 
 *
 * Copyright (c) 2018 maple
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');
module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('buddha_maple', 'Buddha\'s grace illuminates code as sunshine.', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      who:'assets/alpaca.txt',
      commentSymbol:'//---',
    });

    var content = grunt.file.read(path.join(__dirname,options.who));
    var contentArr = content.split(grunt.util.normalizelf('\n'));
    contentArr.forEach(function(value,index,arr){
      arr[index] = options.commentSymbol + value;
    });
    content = contentArr.join(grunt.util.normalizelf('\n'));
    // 获取要载入的文件内容buddha.txt，并处理其内容，保存在content变量中
    this.files.forEach(function (file) {
      file.src.filter(function (filepath) {  // file.src已被统一处理成数组了
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        var oldContent = grunt.file.read(filepath);
        var oldContentArr = oldContent.split(grunt.util.normalizelf('\n'));
        oldContentArr = oldContentArr.filter(function(con){
          if(con.indexOf('//')===0){
            return false;
          }else{
            return true;
          }
        });
        oldContent = oldContentArr.join(grunt.util.normalizelf('\n'));
        // if(/o8888888o/.test(oldContent)) // 确保buddha.txt内容只被添加一次
        //   return;     
        var newContent = content + grunt.util.normalizelf('\n') + oldContent;
        grunt.file.write(filepath, newContent); 
    // 用拼接的新内容直接替换原内容       
      });
    });


  });

};

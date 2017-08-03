var gulp = require("gulp");
var gutil = require("gulp-util");
var src = {
  // html 文件
  html: "style/*.html",                          
  // vendor 目录和 bower_components
  vendor: ["vendor/**/*", "bower_components/**/*"], 
  // style 目录下所有 xx/index.less
  //style: "src/style/*/index.less",                 
  // 图片等应用资源
  assets: "assets/**/*"                             
};

var dist = {
  root: "dist/",
  html: "dist/",
  //style: "dist/style",
  //vendor: "dist/vendor",
  //assets: "dist/assets"
};

var bin = {
  root: "bin/",
  html: "bin/",
  //style: "bin/style",
  //vendor: "bin/vendor",
  //assets: "bin/assets"
};
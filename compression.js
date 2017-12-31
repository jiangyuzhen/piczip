"use strict";

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
var pngquant = require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');

function compression(filePath) {
    if(!fs.existsSync(path.resolve(filePath))){
        throw new Error(`${filePath} Not Found`);
        return false;
    }
    // 1. 找到图片
    console.log(filePath, path.resolve(filePath));
    filePath = path.resolve(filePath) || process.cwd();
    gulp.src(`${filePath}/*`)
        // 2. 压缩图片
        .pipe(imageResize({
            width: 400
        }))
        .pipe(imagemin({
            // progressive: true,
            optimizationLevel: 7,
            svgoPlugins: [{ removeViewBox: false }],//不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        // 3. 另存图片
        .pipe(gulp.dest(`${path.resolve(filePath)}/../dest`))
}

module.exports = compression;
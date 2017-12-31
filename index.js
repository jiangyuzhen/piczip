#!/usr/bin/env node

// console.log('hello, 此模块正在开发中...');

"use strict";

// const argv = require('yargs').argv;
const colors = require('colors');
var marked = require('marked');
const EOL = require('os').EOL; // 
const info = require('./package.json');

const Compression = require('./compression');

switch(process.argv[2]){
    case "-v": 
    case "-V": 
    case "version": 
    case "--version": 
        console.log(colors.green(`当前的版本号为： ${info.version}`));
        break;
    case "-h": 
    case "--help": 
    case "help": 
        console.log('');
        console.log(`piczip 是由 Jane.zhen 基于日常需要和练手写的。 ${EOL} piczip 基础命令:`);
        console.log("- -v / -V / version / --version      查询当前 piczip 的版本号");
        console.log("- -h / --help / help                 查看使用说明");
        console.log("- piczip [filepath]                  压缩相对于当前目录的目录下的所有图片");
        console.log("- piczip [filename]                  压缩当前目录下的指定文件，不带后缀名，默认所有的");
        console.log("- piczip [filepath.filename]         压缩相对于当前目录下的指定目录下的指定图片");
        console.log(EOL);
        break;
    default: 
        Compression(process.argv[2]);
}



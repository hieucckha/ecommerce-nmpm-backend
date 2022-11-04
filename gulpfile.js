const gulp = require("gulp")
const nodemon = require("gulp-nodemon")
const mocha = require("gulp-mocha")
const todo = require("gulp-todo")
const util = require("gulp-util")

const fs = require("fs")

gulp.task('run', function () {
    nodemon({
        delay: 10,
        script: './src/server.js',
        watch: 'src',
        ext: 'js',
    })
    .on('restart', function () {
        util.log('server restarted!')
    })
})
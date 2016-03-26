/**
 * Created by jmichelin on 3/25/16.
 */
var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence'),
    inject = require('gulp-inject'),
    serve = require('gulp-serve');

var files = require('./gulp/gulp.config.js');

//set default task
gulp.task('default', function(callback){
 runSequence('build', 'serve', callback);
});

gulp.task('build', function (callback) {
    runSequence('clean',
        'copy-build',
        'index',
        callback);
});

gulp.task('serve', serve ('build'));

gulp.task('index', function () {
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src(files.app_files.tpl_src), {ignorePath: 'build'}))
        .pipe(gulp.dest('./build'));
});

gulp.task('clean', function () {
    del(['./build'], {force: true});
});

gulp.task('copy-build', ['copy-html', 'copy-json', 'copy-assets', 'copy-app-js', 'copy-vendor-js'], function(){
    console.log("inside copy build");
});

//intermediate step
gulp.task('copy-html', function () {
    return gulp.src(['./src/**/*.html',
        '!./src/index.html'])
        .pipe(gulp.dest('./build'));
});

//intermediate step
gulp.task('copy-json', function () {
    return gulp.src('./src/**/*.json')
        .pipe(gulp.dest('./build'));
});

gulp.task('copy-assets', function () {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./build/assets'));

});

gulp.task('copy-app-js', function () {
    return gulp.src('./src/**/*.js')
        .pipe(gulp.dest('./build'));

});

gulp.task('copy-vendor-js', function () {
    return gulp.src('./vendor/**/*.js')
        .pipe(gulp.dest('./build/vendor'));
});
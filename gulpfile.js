'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cleanCss = require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    htmlmin = require('gulp-htmlmin'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
  return gulp.src('./assets/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/css/*.scss', ['sass']);
});

gulp.task('browser-sync', function () {
   var files = [
      './*.html',
      './assets/css/*.css',
      './assets/images/*.{png,jpg,jpeg,gif}',
      './assets/js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: "./"
      }
   });

});

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

//Copy

gulp.task('copyfiles', function() {
    gulp.src('./partials/*')
    .pipe(gulp.dest('./dist/partials'));
    gulp.src('./downloads/*')
    .pipe(gulp.dest('./dist/downloads'));
    gulp.src('./assets/content/*')
    .pipe(gulp.dest('./dist/assets/content'));
});

gulp.task('copyfonts', function() {
   gulp.src('./assets/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copyfavicon', function() {
    gulp.src('favicon.ico')
    .pipe(gulp.dest('./dist/'));
 });

// Images
gulp.task('imagemin', function() {
    return gulp.src('assets/images/**/*.{png,jpg,jpeg,gif}')
      .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
      .pipe(gulp.dest('dist/assets/images'));
  });

// Usemin
gulp.task('usemin', function() {
  return gulp.src('./*.html')
  .pipe(flatmap(function(stream, file){
      return stream
        .pipe(usemin({
            css: [ rev() ],
            html: [ function() { return htmlmin({ collapseWhitespace: true })} ],
            js: [ uglify(), rev() ],
            inlinejs: [ uglify() ],
            inlinecss: [ cleanCss(), 'concat' ]
        }))
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build',['clean'], function() {
    gulp.start('copyfiles','copyfonts','copyfavicon','imagemin','usemin');
});

// Default task
gulp.task('default', ['browser-sync'], function() {
    gulp.start('sass:watch');
});
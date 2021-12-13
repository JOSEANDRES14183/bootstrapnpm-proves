const { parallel, series } = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
};

function copy() {
  return gulp.src('./node_modules/bootstrap/dist/js/*')
    .pipe(gulp.dest('./dist/js'));
};

exports.build = series(buildStyles,copy);
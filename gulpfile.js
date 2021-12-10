var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

function buildStyles2() {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./lib/bootstrap-5.1.3/dist/css'));
  };

exports.buildStyles = buildStyles;
exports.buildStyles2 = buildStyles2;
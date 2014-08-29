var gulp = require('gulp');
var complex = require('gulp-escomplex');
var complexreporter = require('gulp-escomplex-reporter-json');

var pack = require('./package.json');

gulp.task('complexity', function () {
  gulp.src([
    'index.js',
    'lib/**'
  ])
  .pipe(complex({
    packageName: pack.name,
    packageVersion: pack.version
  }))
  .pipe(complexreporter())
  .pipe(gulp.dest('complexity'));
});

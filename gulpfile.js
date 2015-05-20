var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var connect    = require('gulp-connect');

gulp.task('js', function() {
  return browserify('./js/all.js')
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('js'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  })
});

gulp.task('watch', function() {
  gulp.watch('js/components/**/*.js', ['js']);
});

gulp.task('default', ['connect', 'js', 'watch']);
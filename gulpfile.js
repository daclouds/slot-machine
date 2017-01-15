var gulp = require('gulp');
var browserify = require('gulp-browserify');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

var paths = {
  scripts: ['app/**/*.js'],
  styles: ['css/**/*.css']
};

gulp.task('clean', function () {
  return gulp.src('dist/*', {read: false})
    .pipe(clean());
}); 

gulp.task('scripts', ['clean'], function() {
  // Single entry point to browserify 
  gulp.src('entry.js').pipe(browserify({
    insertGlobals : true,
    debug : !gulp.env.production
  }))
  .pipe(gulp.dest('./dist'))
});

gulp.task('minify-css', ['clean'], function() {
  return gulp.src(paths.styles)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch', 'clean', 'scripts', 'minify-css']);

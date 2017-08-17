var gulp = require('gulp');
var rename = require("gulp-rename");
var $    = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('static/tools_frontpage/css/'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["static/tools_frontpage/css/*.css", "templates/tools_frontpage/*.html"],{
        proxy: "http://localhost:8000"
    });
});



gulp.task('default', ['sass', 'browser-sync'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});

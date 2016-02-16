// gulp
var gulp = require('gulp');

// plugins
var connect     = require('gulp-connect');
var jshint      = require('gulp-jshint');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var cssnano     = require('gulp-cssnano');
var sourcemaps  = require('gulp-sourcemaps');
var del         = require('del');
var runSequence = require('run-sequence');

var paths = {
  bower:   'app/bower_components/**',
  src: {
    html:  'app/**/*.html',
    css:   'app/scss/**/*.scss',
    js:    ['app/js/**/*.js',
            '!app/js/**/*.test.js']
  }
};

// tasks
gulp.task('lint', function() {
  gulp.src(paths.src.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

// Clean output directory
gulp.task('clean', function(cb) {
  return ( del(
    ['dist'],
    cb )
  );
});

gulp.task('sass', function() {
  return gulp.src(paths.src.css)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(connect.reload());
});

gulp.task("js", function() {
    return gulp.src([
        'app/js/main.js',
        'app/js/state1.list.controller.js',
        'app/js/state2.list.controller.js'
        ])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('copy-bower-components', function () {
  gulp.src(paths.bower)
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', function () {
  gulp.src(paths.src.html)
    .pipe(gulp.dest('dist/'));
});

gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 9999,
    livereload: true
  });
});

gulp.task('watchFiles', function() {
  gulp.watch(paths.src.js, ['js']);
  gulp.watch(paths.src.css, ['sass']);
});

// build task
gulp.task('build', ['clean'], function(cb) {
  runSequence(
    'lint',
    'sass',
    'js',
    'copy-html-files',
    'copy-bower-components',
    'connectDist',
    'watchFiles',
    cb
  );
});

gulp.task('default',
  ['build']
);

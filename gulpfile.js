var gulp = require('gulp');
var less = require('gulp-less');
var changed = require('gulp-changed');
var esformatter = require('gulp-esformatter');
var webpack = require('gulp-webpack');
var watch = require('gulp-watch');
var debug = require('gulp-debug');
var del = require('del');
var path = require('path');
var concat = require('gulp-concat');
var gcallback = require('gulp-callback');

//var lessDir = 'src/main/resources/static/style/';
//var lessPath = path.join(lessDir, '*.less');
var targetDir = 'src/main/resources/static/dist/';

var componentRoot = 'src/main/resources/static/components/';
var appEntry = componentRoot + 'app/app.js';

// change it to your server target folder to enable painless live reload
var explodedTargetDir = 'target/carousell-code-challenge-0.0.1-SNAPSHOT/dist';

// this tells gulp to take the index.js file and send it to Webpack along with the config and put the resulting files in dist/
gulp.task("webpack", function () {
  return gulp.src(appEntry)
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(targetDir))
});

//// compile less
//gulp.task('less', function () {
//  return gulp.src(['src/main/resources/static/style/*.less'])
//    .pipe(debug({title: 'compiling less:'}))
//    .pipe(less())
//    .pipe(gulp.dest(targetDir))
//});
//
////watch less changes
//gulp.task('watch:less', function () {
//  gulp.src(lessPath)
//    .pipe(watch(lessPath))
//    .pipe(debug({title: 'compiling less:'}))
//    .pipe(less())
//    .pipe(gulp.dest(targetDir))
//
//});

//watch script changes
gulp.task('watch:script', function () {
  var webpackConfig = require('./webpack.config.js');
  webpackConfig['watch'] = true;
  return gulp.src(appEntry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(targetDir));
});

//sync modified resource to target dir
gulp.task('watch:target', function () {
  var targetPath = path.resolve(targetDir, '*');
  return gulp.src(targetPath)
    .pipe(watch(targetPath))
    .pipe(debug({title: 'syncing:'}))
    .pipe(gulp.dest(explodedTargetDir));
});

//watch all resources
gulp.task('watch', ['watch:script', 'watch:target']);

// format all js code. Please do it before pushing
gulp.task('format', function () {
  return gulp.src([componentRoot + '**/*.js'])
    .pipe(esformatter({indent: {value: '  '}}))
    .pipe(gulp.dest(componentRoot));
});

// clean generated source and downloaded lib
gulp.task('clean', function () {
  return del([
    'src/main/resources/static/dist/**',
    'node_modules/**/*'
  ]);
});

gulp.task('default', [/*'less', */'webpack'], function () {
  console.log('You can run "gulp watch:all" to watch code changes.');
});

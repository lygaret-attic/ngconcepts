'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

var mkServer = function(dirs) {
    connect.server({
        root: dirs,
        port: 9000,
        fallback: 'index.html'
    });
}

gulp.task('serve', ['watch'], function () {
    mkServer(['src', '.tmp']);
});

gulp.task('serve:dist', ['build'], function () {
  mkServer('dist');
});

gulp.task('serve:e2e', function () {
  mkServer(['src', '.tmp']);
});

gulp.task('serve:e2e-dist', ['watch'], function () {
  mkServer('dist');
});

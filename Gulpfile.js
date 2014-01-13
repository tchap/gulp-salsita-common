// Copyright (c) 2013 The gulp-salsita-common AUTHORS
//
// Use of this source code is governed by The MIT License
// that can be found in the LICENSE file.

var common = require('./lib')
  , gulp   = require('gulp');

gulp.task('publish', function() {
  return gulp.src([
      './AUTHORS',
      './Gulpfile.js',
      './LICENSE',
      './README.md',
      './index.js',
      './lib',
      './package.json'
  ])
  .pipe(common.publishArtifacts);
});

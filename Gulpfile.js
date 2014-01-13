// Copyright (c) 2013 The gulp-salsita-common AUTHORS
//
// Use of this source code is governed by The MIT License
// that can be found in the LICENSE file.

var common = require('./lib')
  , gulp   = require('gulp');

gulp.task('publish', function() {
  // Pack the whole module as an artifacts and publish it.
  return gulp.src('*')
  .pipe(common.publishAsArtifact({
    storeURL:      'http://artifacts/upload/',
    projectSecret: 'MNGmSCNK3xTSbEMVJUwQ'
  }));
});

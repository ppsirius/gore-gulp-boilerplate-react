/**
 * Copyright (c) 2016-present, zangrafx
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const eslint = require('gore-eslint');
const gg = require('gore-gulp');
const gulp = require('gulp');

gg(__dirname).setup(gulp);

gulp.task('lint', function () {
  return eslint([
    __filename,
    './src/**/*.js',
    './src/**/*.jsx',
  ]);
});

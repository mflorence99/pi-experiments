var del = require('del');
var gulp = require('gulp');
var merge = require('merge-stream');
var ngc = require('gulp-ngc');
var path = require('path');

// globals
var source = path.join(process.cwd(), './');
var target = path.join(process.cwd(), './dist');

function build() {
  return merge(
    compile(),
    copyRoot()
  );
}

// clean out target
function clean() {
  return del([path.join(target, '**/*')], {force: true});
}

// compile TypeScript --> JavaScript
function compile() {
  return ngc('./lib.tsconfig.json');
}

// copy root files
function copyRoot() {
  var globs = [
    path.join(source, 'package.json')
  ];
  return gulp.src(globs)
    .pipe(gulp.dest(target));
}

// gulp tasks

gulp.task('clean', function() {
  return del([path.join(target, '**/*')], {force: true});
});

gulp.task('default', ['clean'], function() {
  return build();
});

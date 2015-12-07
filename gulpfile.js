var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('static:dev', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('build/'));
});

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.js')
    .pipe(webpack({
      output:
        {filename: 'bundle.js'}
      }))
    .pipe(gulp.dest('build/'));
  });

gulp.task('watch', function() {
  gulp.watch('app/**/*.html', ['static:dev']);
  //gulp.watch('app/**/*.js', ['webpack:dev']);
});

gulp.task('default', ['watch']);


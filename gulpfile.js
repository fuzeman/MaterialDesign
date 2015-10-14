var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

var runTimestamp = Math.round(Date.now()/1000);

gulp.task('build', function(){
  return gulp.src(['icons/svg/*.svg'])
    .pipe(iconfont({
      fontName: 'MaterialDesignIcons',
      formats: ['ttf', 'eot', 'woff'],
      timestamp: runTimestamp,
    }))
      .on('glyphs', function(glyphs, options) {
        // Generate CSS file
        gulp.src('templates/MaterialDesignIcons.css')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: 'MaterialDesignIcons',
          fontPath: '../fonts/',
          className: 'mdi'
        }))
        .pipe(gulp.dest('build/css/'));
      })
    .pipe(gulp.dest('build/fonts/'));
});
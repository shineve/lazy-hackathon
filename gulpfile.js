const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');

/* --- 壓縮 HTML --- */
gulp.task('minify-html', () => {
  return gulp
    .src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));
});

/* --- 壓縮 CSS --- */
gulp.task('minify-css', () => {
  return gulp
    .src('src/css/*.css')
    .pipe(cleanCSS({ compatibility: '*' }))
    .pipe(gulp.dest('dist/css'));
});

/* --- 壓縮 JavaScript --- */
gulp.task('minify-js', () => {
  return gulp.src('src/js/*.js').pipe(terser()).pipe(gulp.dest('dist/js'));
});

/* --- 同步執行全部任務 --- */
gulp.task('default', gulp.parallel('minify-html', 'minify-css', 'minify-js'));

var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var lint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var copy = require('gulp-copy');
var watch = require('gulp-watch');

var paths = {
  filesrc: ['./client/**/*', './server/**/*'],
  jadesrc: ['./client/**/*.jade'],
  lesssrc: ['./client/**/*.less'],
  codesrc: ['./client/**/*.js', './server/**/*.js'],
  copysrc: ['./client/**/*.js', './client/**/*.mp3', './client/**/*.jpg', './client/**/*.wav', './client/**/*.png', './client/**/*.ico'],
  jadedst: './public',
  lessdst: './public',
  copydst: './public'
};

gulp.task('build', ['jade', 'less', 'lint', 'jscs', 'copy']);
gulp.task('default', ['build', 'watch']);

gulp.task('jade', function() {
  gulp.src(paths.jadesrc)
    .pipe(jade({pretty: true, doctype: 'html'}))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(paths.jadedst));
});

gulp.task('less', function() {
  gulp.src(paths.lesssrc)
    .pipe(less())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest(paths.lessdst));
});

gulp.task('lint', function() {
  gulp.src(paths.codesrc)
    .pipe(lint())
    .pipe(lint.reporter('jshint-stylish'));
});

gulp.task('jscs', function() {
  gulp.src(paths.codesrc)
    .pipe(jscs())
    .on('error', function (err) {
      console.log(err.message);
      this.emit('end');
    });
});

gulp.task('copy', function() {
  gulp.src(paths.copysrc)
    .pipe(copy(paths.copydst, {prefix:1}));
});

gulp.task('watch', function() {
  watch(paths.filesrc, function() {
    gulp.start('build');
  });
});

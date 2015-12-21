
/*
 * Dependencias
 */
var gulp = require('gulp'),
   concat = require('gulp-concat'),
   uglify = require('gulp-uglify');

gulp.task('default', function () {
   console.log('--- Hello Gulp ---');
});

/*
 gulp.task('name', [dependancies], function(){

 });*/

/*gulp.task('copy-build',['copy-assets','copy-app-js', 'copy-vendor-js']);


 gulp.task('copy-assets', function(){

 });
 gulp.task('copy-app-js', function(){

 });
 gulp.task('copy-vendor-js', function(){

 });*/

/*
 * Configuración de la tarea 'demo'
 */
gulp.task('demo', function () {
   gulp.src('js/source/*.js')
      .pipe(concat('todo.js'))
      .pipe(uglify())
      .pipe(gulp.dest('js/build/'))
});

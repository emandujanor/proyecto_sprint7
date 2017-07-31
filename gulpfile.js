var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');


gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('jade', function(){
    gulp.src('./src/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./dist'))
})
//para que este alerta a cualquier cambio hecho en mis archivos jade
gulp.task('watch', function(){
    gulp.watch('./src/*.jade', ['jade'])
});

gulp.task('default', ['jade', 'watch'])

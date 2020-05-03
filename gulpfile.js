const gulp = require('gulp');
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');

function css() {
  return gulp.src('src/scss/app.scss')
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(autoPrefixer('last 2 versions'))
    .pipe(gulp.dest('src/css'));
}

function watchFiles() {
  gulp.watch('src/scss/*.scss', css);
  gulp.watch('src/index.html');
}

//Registrar funciones como tarea
gulp.task('css', css);
gulp.task('watch', watchFiles);
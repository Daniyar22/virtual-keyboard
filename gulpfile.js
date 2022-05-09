var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer')

gulp.task('scss', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%'], {cascade: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'))
});




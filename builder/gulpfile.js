const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

gulp.task('styles', function() {
    return gulp.src('../src/BEM/common.blocks/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('../build/css'));

});

gulp.task('scripts', function() {
    return gulp.src('../src/BEM/common.blocks/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('../build/js'));
});

gulp.task('watch', function() {
    gulp.watch('../src/BEM/common.blocks/*.scss', gulp.series('styles'));
    gulp.watch('../src/BEM/common.blocks/*.js', gulp.series('scripts'));
});
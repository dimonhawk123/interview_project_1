const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const del = require('del');

const css = [ 
    '../node_modules/normalize.css/normalize.css',  
    '../src/BEM/common.blocks/*.scss',
    '../src/BEM/media-queries/*.scss'
];

const js = [
    '../node_modules/smoothscroll-polyfill/dist/smoothscroll.min.js',
    '../src/BEM/common.blocks/*.js'
];

gulp.task('styles', function() {
    return gulp.src(css)        
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(autoprefixer({            
            cascade: false
        }))        
        .pipe(gulp.dest('../build/css'));

});

gulp.task('scripts', function() {
    return gulp.src(js)
        .pipe(concat('scripts.js'))        
        .pipe(gulp.dest('../build/js'));
});

gulp.task('watch', function() {
    gulp.watch(css, gulp.series('styles'));
    gulp.watch(js, gulp.series('scripts'));
});

gulp.task('clear', function() {
    del(['../build/*']); 
});

gulp.task('build', gulp.parallel('styles', 'scripts'));
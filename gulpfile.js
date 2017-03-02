var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var connect = require('gulp-connect-php');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('./style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});


gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('connect-sync', function() {
    connect.server({}, function() {
        browserSync({
            proxy: '127.0.0.1:8000'
        });
    });

    gulp.watch('*.php').on('change', function() {
        browserSync.reload();
    });

    gulp.watch(["./sass/*.scss", "./sass/shortcodes/*.scss"], ['sass']);

});


gulp.task('default', ['connect-sync', 'sass'], function() {});
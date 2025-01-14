import gulp from 'gulp';

// Плагины
import plumber  from 'gulp-plumber';
import notify from 'gulp-notify';
import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import webphtml from 'gulp-webp-html';
import prettyhtml from 'gulp-pretty-html';

// Конфигурация
import path from './../config/path.js';
import app from './../config/app.js';


// Обработка HTML 
const html = () => {
    return gulp.src(path.html.src)
    .pipe(plumber({
        errorHandler: notify.onError(err => ({
            title: 'HTML',
            message: err.message
        }))
    }))
    .pipe(fileInclude())
    .pipe(webphtml())
    .pipe(htmlmin({collapseWhitespace: false}))
    .pipe(prettyhtml())
    .pipe(gulp.dest(path.html.dest));
}

export default html;
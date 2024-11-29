const {src, dest} = require("gulp");
const sass = require("gulp-sass");
const browserSync = require('browser-sync').create();

const {scss} = require("./paths");

const styles = () =>
    src(scss.src)
    .pipe(sass())
    .pipe(dest(scss.dist))
    .pipe(browserSync.stream({match: '**/*.css'}));

module.exports = styles;
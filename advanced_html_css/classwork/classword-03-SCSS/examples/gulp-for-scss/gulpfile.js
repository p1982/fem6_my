const gulp = require("gulp");
const sass = require("gulp-sass");

const css = ()=> 
    gulp.src("./src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"));

const watch = ()=> {
    gulp.watch("./src/scss/**/*.scss", sass);
}

gulp.task("dev", gulp.series(css, watch));
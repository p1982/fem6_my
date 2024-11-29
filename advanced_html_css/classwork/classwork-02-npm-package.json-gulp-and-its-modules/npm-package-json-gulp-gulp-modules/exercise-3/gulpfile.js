const gulp = require("gulp");
const clean = require('gulp-clean');

const css = () =>{
    return gulp.src("./src/css/**/*.css"). 
    pipe(gulp.dest("./dist/css"))
    
}

gulp.task("css", css);

const js = () =>{
    return gulp.src("./src/scripts/**/*.js"). 
    pipe(gulp.dest("./dist/js"))
}

gulp.task("js", js);

const addImg = () =>{
    return gulp.src("./src/image/**/*.{jpg, png, svg, gif, webp}"). 
    pipe(gulp.dest("./dist/img"))
}

gulp.task("addImg", addImg);

gulp.task('clean', function () {
    return gulp.src('dist/', {read: false, allowEmpty: true})
        .pipe(clean());
});

gulp.task("build", gulp.series("clean", gulp.parallel(css, js, addImg)))


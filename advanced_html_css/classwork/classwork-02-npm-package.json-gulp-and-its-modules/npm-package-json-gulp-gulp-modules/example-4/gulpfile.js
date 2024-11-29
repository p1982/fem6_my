const gulp = require("gulp"); 

const patchs = {
    css: {
        src: "./src/css/**/*.css",
        dist: "./dist/css/"
    },
    img: {
        src: "./src/image/**/*.{jpg,png,webp,gif,svg}",
        dist: "./dist/img/"
    }
};

const moveCSS = () => 
    gulp.src(patchs.css.src). 
    pipe(gulp.dest(patchs.css.dist));

const moveIMG = () => 
    gulp.src(patchs.img.src). 
    pipe(gulp.dest(patchs.img.dist));  

const watch = () => {
    gulp.watch(patchs.css.src, moveCSS);				
    gulp.watch(patchs.img.src, moveIMG);
}

gulp.task("build", gulp.parallel(moveCSS, moveIMG));

gulp.task('dev', gulp.series('build', watch));

gulp.task("default", gulp.series('build', watch));


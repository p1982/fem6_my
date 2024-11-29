const gulp = require("gulp"); // сохраняем в переменную gulp большой объект, позволяющий создавать задачи, считывать и перемещать файлы

// На примере предыдущей задачи видно, что запускать последовательно несколько тасок - долго. Хотелось бы их всех  объединить в одну задачу - "перемещение файлов". Но как это сделать, если .src считывает разные файлы? Достаточно легко, с помощью методов .series или >parallel

const patchs = {
    css: {
        src: "./src/css/**/*.css",
        dist: "./dist/css/"
    },
    img: {
        src: "./src/image/**/*.{jpg,png,webp,gif,svg}",
        dist: "./dist/img/"
    }
}

const moveCSS = () => 
    gulp.src(patchs.css.src). 
    pipe(gulp.dest(patchs.css.dist));

const moveIMG = () => 
    gulp.src(patchs.img.src). 
    pipe(gulp.dest(patchs.img.dist));  


// gulp.task("moveCSS", moveCSS);
// gulp.task("moveIMG", moveIMG);

// gulp.parallel принимает название функций, которые должны выполняться
// gulp.task("moveFiles", gulp.parallel(moveCSS, moveIMG));

// Если же названия указаны в кавычках, то это - название тасок. Если эти таски не было созданы, то команда gulp moveFiles вызовет  ошибку
// gulp.task("moveFiles", gulp.parallel("moveCSS", "moveIMG"));
gulp.task("moveFiles2", gulp.parallel(moveCSS, moveIMG));
/*
gulp.task("moveFiles2", ()=>{
    moveCSS();
    moveIMG();
});
*/
const watch = () => {
	gulp.watch(patchs.css.src, moveCSS);				
	gulp.watch(patchs.img.src, moveIMG);
}

// gulp.task("watch", watch);

gulp.task('dev', gulp.series('moveFiles2', watch));

gulp.task("default", gulp.series('moveFiles2', watch))


const gulp = require('gulp');
const paths = {
    js:{
        src:'./src/scripts/**/*.js',
        dest:'./dest/scripts'
    },
    img: {
        src:  './src/img/**/*.{png,jpg,jpeg}',
        dest: './dest/img'
    }
}
const moveJS = ()=>
    gulp.src(paths.js.src).
    pipe(gulp.dest(paths.js.dest));

gulp.task('moveJS', moveJS)

const moveIMG =()=>
    gulp.src(paths.img.src).
    pipe(gulp.dest(paths.img.dest));

    gulp.task('moveIMG', moveIMG)
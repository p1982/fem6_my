const {src, dest} = require("gulp");
const imagemin = require("gulp-imagemin");

const {img} = require("./paths");

const images = ()=> 
    src(img.src)
        .pipe(imagemin())
        .pipe(dest(img.dist));

module.exports = images;
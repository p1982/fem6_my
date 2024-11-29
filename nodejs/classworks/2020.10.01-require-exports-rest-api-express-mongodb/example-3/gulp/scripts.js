const {src, dest} = require("gulp");
const concat = require("gulp-concat");

const {js} = require("./paths");

const scripts = ()=> 
    src(js.src)
        .pipe(concat("scripts.js"))
        .pipe(dest(js.dist));

module.exports = scripts;
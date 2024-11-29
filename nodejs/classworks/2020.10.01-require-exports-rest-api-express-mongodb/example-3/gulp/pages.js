const {src, dest} = require("gulp");
const fileinclude = require('gulp-file-include');

const {html} = require("./paths");

const pages = () =>
    src(html.src)
      .pipe(
        fileinclude({
          prefix: "@@",
          basepath: "@file"
        })
      )
      .pipe(dest(html.dist));

module.exports = pages;
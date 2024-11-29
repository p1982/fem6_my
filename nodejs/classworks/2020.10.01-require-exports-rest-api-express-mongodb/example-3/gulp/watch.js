const {watch} = require("gulp");

const pages = require("./pages");
const styles = require("./styles");
const images = require("./images");
const scripts = require("./scripts");

const {html, scss, img, js} = require("./paths");

const watchFiles = ()=> {
    watch(html.src, pages);
    watch(scss.src, styles);
    watch(img.src, images);
    watch(js.src, scripts);
}

module.exports = watchFiles;
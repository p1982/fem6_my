const paths = {
    dist: "dist",
    html: {
        src: "src/html/**/*.html",
        dist: "dist/html"
    },
    scss: {
        src: "src/scss/**/*.scss",
        dist: "dist/css"
    },
    img: {
        src: "src/img/**/*.{png,gif,jpg,webp,svg}",
        dist: "dist/img"
    },
    js: {
        src: "src/js/**/*.js",
        dist: "dist/js"
    }
};

module.exports = paths;
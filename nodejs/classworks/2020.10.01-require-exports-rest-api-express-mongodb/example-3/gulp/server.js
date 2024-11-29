const browserSync = require('browser-sync').create();
const {html} = require("./paths");

const server = (done) => {
    browserSync.init({
        server: {
            baseDir: `${html.dist}/ru`
        },
        port: 3000
    });
    done();
}

module.exports = server;
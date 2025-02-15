const clean = require("./clean");

const pages = require("./pages");
const styles = require("./styles");
const images = require("./images");
const scripts = require("./scripts");

const server = require("./server");
const watchFiles = require("./watch");

module.exports = {clean, pages, styles, images, scripts, server, watchFiles};
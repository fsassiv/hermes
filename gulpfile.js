const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const sourceMaps = require("gulp-sourcemaps");

var SASS = "./public/scss/**/*.scss";
var CSS = "./public/css";

function styles() {
  return gulp
    .src(SASS)
    .pipe(sourceMaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourceMaps.write("/"))
    .pipe(gulp.dest(CSS))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    // proxy: "localhost:8080",
    server: {
      baseDir: "./"
    },
    open: false
  });
  gulp.watch(SASS, styles);
}

exports.styles = styles;
exports.watch = watch;

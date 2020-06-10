// Require in needed packages
var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')

// Set up gulp to recognise the SCSS CSS framework
function compileSass(cb) {
    return gulp.src("src/styles/styles.scss")
        // Set up the sourcemaps
        .pipe(sourcemaps.init())
        // Pipe the source code to sass interpreter
        .pipe(sass())
        // Add the sourcemap to the end of the compiled CSS
        .pipe(sourcemaps.write())
        // Write the interpreted file to the desired destination
        .pipe(gulp.dest('public/styles/'))
    // Run the passed-in callback if necessary
    cb();
}

// Set up gulp to watch changes and compile source in real-time
function watch(cb) {
    // gulp.watch will watch for changes in any file passed in as argument 1,
    // and execute the callback passed as argument 2 if there is a change
    gulp.watch("src/**/*.scss", compileSass);
    cb();
}

// Declare which of our functions declared here map to which commands passed
// to the Gulp CLI
exports.sass = compileSass;
exports.watch = watch;
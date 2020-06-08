// Require in needed packages
var gulp = require('gulp')
// var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')

var ts = require('gulp-typescript')
// variable pointing to compiler with settings defined in tsconfig.json
var tsproject = ts.createProject('./tsconfig.json')

// Set up gulp to recognise the Babel JS transpiler
function compileTS(cb) {
    return tsproject.src()
        // Pipe the ts source code to the compiler
        .pipe(tsproject())
        .js.pipe(gulp.dest('dist/'))
    cb();
}

// Set up gulp to recognise the SCSS CSS framework
// function compileSass(cb) {
//     return gulp.src("source/scss/style.scss")
//         // Set up the sourcemaps
//         .pipe(sourcemaps.init())
//         // Pipe the source code to sass interpreter
//         .pipe(sass())
//         // Add the sourcemap to the end of the compiled CSS
//         .pipe(sourcemaps.write())
//         // Write the interpreted file to the desired destination
//         .pipe(gulp.dest('dist/css'))
//     // Run the passed-in callback if necessary
//     cb();
// }

// Set up gulp to watch changes and compile source in real-time
function watch(cb) {
    // gulp.watch will watch for changes in any file passed in as argument 1,
    // and execute the callback passed as argument 2 if there is a change
    // gulp.watch("source/scss/**/*.scss", compileSass);
    gulp.watch("src/**/*.ts", compileTS);
    gulp.watch("src/**/*.tsx",compileTS);
    cb();
}

// Declare which of our functions declared here map to which commands passed
// to the Gulp CLI
// exports.sass = compileSass;
exports.typescript = compileTS;
exports.watch = watch;
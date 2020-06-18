// Require in needed packages
var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')

var ts = require('gulp-typescript')
// variable pointing to compiler with settings defined in tsconfig.json
var tsproject = ts.createProject('tsconfig.json')

// Set up gulp to recognise the Babel JS transpiler
function compileTS(cb) {
    return tsproject.src()
        // Pipe the ts source code to the compiler
        .pipe(tsproject())
        .js.pipe(gulp.dest('dist/'))
    cb();
}

// Set up gulp to watch changes and compile source in real-time
function watch(cb) {
    // gulp.watch will watch for changes in any file passed in as argument 1,
    // and execute the callback passed as argument 2 if there is a change
    gulp.watch("src/**/*.ts", compileTS);
    cb();
}

// Declare which of our functions declared here map to which commands passed
// to the Gulp CLI
exports.typescript = compileTS;
exports.watch = watch;
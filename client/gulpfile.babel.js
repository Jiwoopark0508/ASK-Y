"use strict";
let gulp        = require('gulp');
let browserify  = require('browserify');
let source      = require('vinyl-source-stream');
gulp.task("default", ["transpile"]);

gulp.task("transpile", () => {
    return browserify("src/app.js")
        .transform("babelify")
        .bundle()
        .on("error", function(error){
            console.log(`\n Error ${error} \n`);
        })
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"));
});
gulp.task("watch", ["transpile"], () => {
    gulp.watch("src/**/*", ["transpile"]);
});

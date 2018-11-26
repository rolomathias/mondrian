//This line fetches gulp package from npm and saves it in a variable called gulp
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const uncss = require("postcss-uncss");
//The line below merges css files
const concatCss = require("gulp-concat-css");

//Defines a new task and runs function when task is executed
gulp.task("remove-css", function() {
	//SRC is the folder where gulp grabs files to process
	//*.CSS processes all files within folder with the extension CSS
	gulp.src("./css/*.css")
	.pipe(concatCss("newcss.css"))
	//line betlow copied from https://www.npmjs.com/package/gulp-uncss
	.pipe(postcss([uncss({html: "index.html"})]))
	//Destination defines where processed files are created/transferred
	//Pipe used to run any kind of function on source file
	.pipe(gulp.dest("css2"))
})
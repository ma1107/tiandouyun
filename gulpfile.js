var gulp = require("gulp");
var sass = require("gulp-sass");

//复制html
gulp.task("copyhtml",function(){
	gulp.src("*.html").pipe(gulp.dest("F:\\php\\WWW\\1802"));
	
});

//复制图片
gulp.task("copyimg",function(){
	gulp.src("img/*.{jpg,png}").pipe(gulp.dest("F:\\php\\WWW\\1802\\img"));
	
	
});



//sass编译
gulp.task("scssfile",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("F:\\php\\WWW\\1802\\css"));
});

//监听
gulp.task("watchall",function(){
	gulp.watch("*.html",["copyhtml"]);
	gulp.watch("img/*.{jpg,png}",["copyimg"]);
	gulp.watch("scss/*.scss",["scssfile"]);
});
var gulp = require("gulp");
var concat = require("gulp-concat");
var clean = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var replace = require("gulp-html-replace");
var pump = require("pump");

gulp.task("buildCss",function(){
    gulp.src(["node_modules/bootstrap/dist/css/bootstrap.css","src/css/*.css"])
    .pipe(concat("build.css"))
    .pipe(clean())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("buildJs",function(){

    pump([
        gulp.src([
            "./node_modules/angular/angular.js",
            "./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
            "./node_modules/angular-ui-router/release/angular-ui-router.js",
            "src/js/app.js",
            "src/js/services/utilService.js",
            "src/js/filters/userFilter.js",
            "src/js/controllers/kqController.js",
            "src/js/controllers/userController.js",
            "src/js/controllers/mainController.js"
        ]).pipe(concat("build.js")),
        uglify({
            mangle:{
                reserved:[
                    "$http",
                    "$scope",
                    "$timeout",
                    "$stateProvider",
                    "$urlRouterProvider",
                    "utilServices"
                ]
            }
        }),
        gulp.dest("dist/js")
    ]);
   /* gulp.src([
        "./node_modules/angular/angular.js",
        "./node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
        "./node_modules/angular-ui-router/release/angular-ui-router.js",
        "src/js/app.js",
        "src/js/services/utilService.js",
        "src/js/filters/userFilter.js",
        "src/js/controllers/kqController.js",
        "src/js/controllers/userController.js",
        "src/js/controllers/mainController.js"
    ])
    .pipe(concat("build.js"))
    .pipe(uglify({
        mangle:{
            reserved:[
                "$http",
                "$scope",
                "$timeout",
                "$stateProvider",
                "$urlRouterProvider",
                "utilServices"
            ]
        }
    }))
    .pipe(gulp.dest("dist/js"));*/
});

gulp.task("buildHtml",function(){
    gulp.src("./src/index.html")
    .pipe(replace({
        inCss:"css/build.css",
        inJs:"js/build.js"
    }))
    .pipe(gulp.dest("dist"));
});

gulp.task("copyFile",function () {
    gulp.src("./node_modules/bootstrap/dist/fonts/*.*")
    .pipe(gulp.dest("dist/fonts"));

    gulp.src("./src/templates/*.*")
    .pipe(gulp.dest("dist/templates"));
});

gulp.task("build",["buildCss","buildJs","buildHtml","copyFile"],function () { 

 });
var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    dest: 'public/'
};


// Include all gulp plugins
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

// Concat and minify JS, both custom and from bower packages
gulp.task('js', function() {
	var jsFiles = ['src/js/*'];
	gulp.src(plugins.mainBowerFiles().concat(jsFiles))
		.pipe(plugins.filter('*.js'))
		.pipe(ngAnnotate())
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(config.dest + 'js'));
});

// Concat and minify CSS, both custom and from bower packages
gulp.task('css', function() {
	var cssFiles = ['src/css/*'];
    gulp.src(plugins.mainBowerFiles().concat(cssFiles))
    .pipe(plugins.filter('*.scss'))
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest(config.dest + 'css'));
});

// Concat and minify bootstrap fonts
gulp.task('fonts', function() {
    gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.dest + 'fonts'));
});

gulp.task('default', ['js', 'css', 'fonts']);
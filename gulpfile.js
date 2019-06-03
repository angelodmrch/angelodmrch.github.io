var gulp    = require('gulp');
var sass    = require('gulp-sass');
var plugins	= require( "gulp-load-plugins" )({ lazy: false });
var argv	= require( "minimist" )(process.argv.slice(1));

var config = {
    bower: './bower_components',
    bootstrapDir: './bower_components/bootstrap',
    publicDir: './assets',
};

gulp.task('css', function() {
    return gulp.src( 'assets/sass/**/*.scss')
    .pipe( plugins.plumber({errorHandler: plugins.notify.onError("Erro ao compilar os styles, <%= error.message %>")}))
    .pipe(sass({
        includePaths: [
        config.bower
        ],
    }))
    .pipe( plugins.autoprefixer(['last 2 version', '> 1%', 'ie 8', 'ie 7'], {cascade: false}))
	.pipe( plugins.rename({
		suffix: '.min'
	}))
    .pipe( plugins.if( !( argv.d || argv.debug ), plugins.cleanCss() ) )
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task( 'watch', function() {
	gulp.watch('assets/sass/**/*.scss', gulp.series('css'));
});


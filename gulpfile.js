var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sequence = require('gulp-sequence');

var webpack = require('webpack-stream');

tasks = {
  jshint: function(){
    return gulp.src('./public/js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  },
  sass: function(){
    var includePaths = []
      .concat(require('node-bourbon').includePaths)
      .concat(require('node-neat').includePaths)

    return gulp.src('./public/scss/*.scss')
      .pipe(sass({includePaths: includePaths}))
      .pipe(gulp.dest('./public/css'));
  },
  styles: function(){
    return gulp.src('./public/css/*.css')
      .pipe(concat('stylesheet.css'))
      .pipe(cleanCSS())
      .pipe(autoprefixer({browsers: ['last 2 versions']}))
      .pipe(gulp.dest('build/css'));
  },
  watch: function(){
    gulp.watch('*/*.js', ['jshint']);
    gulp.watch('scss/*.scss', ['sass']);
  },
  webpack: function(){
    return gulp.src(['server.js', './models/*.js', '.db/*.js', './controllers/*.js', './public/js/*.js'])
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(gulp.dest('build/js/'));
  }
};

gulp.task('jshint', tasks.jshint);
gulp.task('sass', tasks.sass);
gulp.task('styles', tasks.styles);
gulp.task('watch', tasks.watch);
gulp.task('webpack', tasks.webpack);

gulp.task('default', function(cb){sequence('jshint', 'sass', 'watch', cb); });

gulp.task('buildStyles', function(cb){sequence('sass', 'styles', cb); });

gulp.task('build', function(cb){sequence('jshint', 'sass', 'styles', 'webpack', cb); });

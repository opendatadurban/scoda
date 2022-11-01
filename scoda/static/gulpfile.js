// Defining npm packages
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    //sourcemaps = require('gulp-sourcemaps'),
    pngquant = require('imagemin-pngquant'),
    mozjpeg = require('imagemin-mozjpeg'),
    butternut = require('gulp-butternut'),
    imagemin = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith'),
    webpImage = require('gulp-webp'),
    concat = require('gulp-concat');

// Defining base paths
var basePaths = {
  dist: './dist/',
  node: './node_modules/',
  dev: './src/',
};

// Load primary js resources by order, and then stack all secondary resources at the end
var jsSources = [
  'src/js/vendor/jquery/jquery.min.js',
  'src/js/vendor/popper/popper.min.js',
  'src/js/vendor/moment/moment.min.js',
  'src/js/vendor/bootstrap4/bootstrap.min.js',
  'src/js/vendor/daterangepicker/daterangepicker.js',
  'src/js/vendor/select2/select2.min.js',
  'src/js/vendor/leaflet1_0_2/leaflet.js',
  // 'src/js/vendor/chart/chart.min.js',
  'src/js/vendor/bootstrap-filestyle/bootstrap-filestyle.min.js',
  // 'src/js/custom/charts-config.js',
  'src/js/vendor/classie/classie.js',
  'src/js/vendor/uisearch/uisearch.js',
  'src/js/custom/scripts.js'
 ],
sassSources = [
  'src/sass/vendor/bootstrap4/bootstrap-grid.scss',
  'src/sass/vendor/bootstrap4/bootstrap-reboot.scss',
  'src/sass/vendor/bootstrap4/bootstrap.scss',
  // 'src/sass/vendor/chartjs/chart.min.css',
  'src/sass/vendor/select2/select2.min.css',
  'src/js/vendor/leaflet1_0_2/leaflet.css',
  'src/sass/vendor/daterangepicker/daterangepicker.css',
  'src/sass/**/*.scss'
]

// SASS
gulp.task('sass', function() {
  gulp.src(sassSources)
  //.pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sass({outputStyle: 'compressed'}))
    .on('error', gutil.log)
  .pipe(concat('main.min.css'))
  //.pipe(sourcemaps.write())
  .pipe(gulp.dest(basePaths.dist + 'css'))
});

// SASS
gulp.task('sass-build', function() {
  gulp.src(sassSources)
  .pipe(sass({outputStyle: 'compressed'}))
    .on('error', gutil.log)
  .pipe(concat('main.min.css'))
  .pipe(gulp.dest(basePaths.dist + 'css'))
});

// JS
gulp.task('js', function() {
  gulp.src(jsSources)
  //.pipe(sourcemaps.init({loadMaps: true}))
  .pipe(butternut())
  .pipe(concat('scripts.min.js'))
  //.pipe(sourcemaps.write())
  .pipe(gulp.dest(basePaths.dist + 'js'))
});

// JS
gulp.task('js-build', function() {
  gulp.src(jsSources)
  .pipe(butternut())
  .pipe(concat('scripts.min.js'))
  .pipe(gulp.dest(basePaths.dist + 'js'))
});


//optimize and move images
gulp.task('webpImage', function(){
  gulp.src(basePaths.dist + 'img/**')
  .pipe(webpImage())
  .pipe(gulp.dest(basePaths.dist + 'img'))
});

// Run:
// gulp imagemin
// Running image optimizing task
gulp.task('imagemin', function(){
  gulp.src('src/img/other/**')
  .pipe(imagemin([
    pngquant({quality: [0.5, 0.5]}),
    mozjpeg({quality: 50})
  ]))
  .pipe(gulp.dest(basePaths.dist + 'img'))
});

gulp.task('sprite', function () {
  var spriteData = gulp.src(basePaths.dev + 'img/sprites/*.png')
      .pipe(spritesmith({
          /* this whole image path is used in css background declarations */
          imgName: '../img/sprite.png',
          cssName: 'sprites.scss'
      }));
  spriteData.img.pipe(gulp.dest(basePaths.dist + 'img'));
  spriteData.css.pipe(gulp.dest(basePaths.dev + 'sass/base'));
});

gulp.task('watch', function() {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(['src/img/other/**'], ['imagemin']);
  gulp.watch(['src/img/sprites/*.png'], ['sprite']);
});

// Copy all Bootstrap JS files
gulp.task('copy-assets', function() {


  // Copy all Bootstrap JS files
      gulp.src(basePaths.node + 'bootstrap/dist/js/**/*.js')
         .pipe(gulp.dest(basePaths.dev + '/js/vendor/bootstrap4'));
  
  // Copy all Bootstrap SCSS files
      gulp.src(basePaths.node + 'bootstrap/scss/**/*.scss')
         .pipe(gulp.dest(basePaths.dev + '/sass/vendor/bootstrap4'));
  
  // Copy all Font Awesome Fonts
      gulp.src(basePaths.node + 'font-awesome/fonts/**/*.{ttf,woff,woff2,eof,svg}')
          .pipe(gulp.dest(basePaths.dist + 'fonts/fontawesome/fonts'));
  
  // Copy all Font Awesome SCSS files
      gulp.src(basePaths.node + 'font-awesome/css/font-awesome.min.css')
          .pipe(gulp.dest(basePaths.dist + '/fonts/fontawesome/css'));
  
  // Copy jQuery
      gulp.src(basePaths.node + 'jquery/dist/jquery.min.js')
          .pipe(gulp.dest(basePaths.dev + 'js/vendor/jquery'));
  
  // Copy Util
      gulp.src(basePaths.node + 'util/util.js')
          .pipe(gulp.dest(basePaths.dev + 'js/vendor/util'));
  
  // Copy Popper JS file
      gulp.src(basePaths.node + 'popper.js/dist/umd/popper.min.js')
          .pipe(gulp.dest(basePaths.dev + 'js/vendor/popper'));
  
  // Copy Moment JS file
      gulp.src(basePaths.node + 'moment/min/moment.min.js')
          .pipe(gulp.dest(basePaths.dev + 'js/vendor/moment'));
  
  // Copy Bootstrap Daterangepicker JS file
      gulp.src(basePaths.node + 'bootstrap-daterangepicker/daterangepicker.js')
          .pipe(gulp.dest(basePaths.dev + 'js/vendor/daterangepicker'));
  
  // Copy Bootstrap Daterangepicker CSS file
      gulp.src(basePaths.node + 'bootstrap-daterangepicker/daterangepicker.css')
          .pipe(gulp.dest(basePaths.dev + 'sass/vendor/daterangepicker'));
  
  // Copy Bootstrap Filestyle JS file
      gulp.src(basePaths.node + 'bootstrap-filestyle/src/bootstrap-filestyle.min.js')
          .pipe(gulp.dest(basePaths.dev + 'js/vendor/bootstrap-filestyle'));
  
  // Copy Chartjs JS file
      gulp.src(basePaths.node + 'chart.js/dist/chart.min.js')
          .pipe(gulp.dest(basePaths.dev + 'js/vendor/chart'));
  
  // Copy Chartjs CSS file
      gulp.src(basePaths.node + 'chart.js/dist/chart.min.css')
          .pipe(gulp.dest(basePaths.dev + 'sass/vendor/chart'));
  
  // Copy Select2 JS file
      gulp.src(basePaths.node + 'select2/dist/js/select2.min.js')
          .pipe(gulp.dest(basePaths.dev + 'js/vendor/select2'));
  
  // Copy Select2 CSS file
      gulp.src(basePaths.node + 'select2/dist/css/select2.min.css')
          .pipe(gulp.dest(basePaths.dev + '/sass/vendor/select2'));

  // Copy Leaflet JS file
  gulp.src(basePaths.node + 'leaflet/dist/js/leaflet.js')
    .pipe(gulp.dest(basePaths.dev + 'js/vendor/leaflet1_0_2'));

// Copy Leaflet CSS file
  gulp.src(basePaths.node + 'leaflet/dist/css/leaflet.css')
    .pipe(gulp.dest(basePaths.dev + '/js/vendor/leaflet1_0_2'));
          
  });


gulp.task('default', ['js', 'sass', 'watch']);
gulp.task('build', ['js-build', 'sass-build']);



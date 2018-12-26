var gulp = require('gulp'),
gutil = require('gulp-util'),
gulpLoadPlugins = require('gulp-load-plugins'),
plugins = gulpLoadPlugins(),
path = require('path');

var config = {
  sftp: {
    staging: {
      host: '111.67.19.188',
      auth: 'staging',
      port: '22',
      remotePath: '/var/www/vhosts/sensed.com.au/stage.sensed.com.au/barryplant'
    }
  },
  themeFiles: [
    'build/**/*'
  ]
};

// Compile SCSS into CSS
gulp.task('styles', function(done) {
  gulp.src('src/assets/scss/main.scss')
  .pipe(plugins.sass({outputStyle: 'expanded'}).on('error', plugins.sass.logError))
  .pipe(plugins.rename( function(file) {
    file.dirname = file.dirname.replace(path.sep + 'sass', path.sep + 'css')
  }))
  .pipe(plugins.autoprefixer({ browsers: ['last 3 versions'] }))
  .pipe(plugins.rename('screen.dev.css'))
  .pipe(gulp.dest('public/css'))
  .pipe(plugins.cssmin())
  .pipe(plugins.concat('screen.min.css'))
  .pipe(gulp.dest('public/css'));
  done();
});

gulp.task('modernizr', function(done) {
  gulp.src(['src/assets/**/*.scss'])
    .pipe(plugins.modernizr({
      options : ["setClasses"],
      tests: ['inlinesvg'],
      excludeTests: []
    }))
    .pipe(plugins.uglify())
    .pipe(plugins.concat('modernizr.min.js.php'))
    .pipe(plugins.header('<script>\n/* Contains custom build of Modernizr */\n'))
    .pipe(plugins.footer('</script>'))
    .pipe(gulp.dest("public/lib/"));
    done();
});

gulp.task('js', function(done) {
  gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/selectize/dist/js/standalone/selectize.js',
    'node_modules/slick-carousel/slick/slick.js',
    // 'node_modules/fg-loadcss/src/loadCSS.js',
    'node_modules/svg4everybody/dist/svg4everybody.js',
    'src/assets/lib/unveil.js',
    'src/assets/js/_generic.js',
    'src/assets/js/_utilities.throttle-debounce.js',
    'src/assets/js/_utilities.hover-underline.js',
    'src/assets/js/_utilities.toggle-nav.js',
    'src/assets/js/_utilities.onresize.js',
    'src/assets/js/_modal.js',
    'src/assets/js/_sliders.js',
    'src/assets/js/_advanced-search.js',
    'src/assets/js/_components.header.js',
    'src/assets/js/base.js'
  ])
  .pipe(plugins.uglify({ mangle: false }).on('error', gutil.log))
  .pipe(plugins.concat('script.js'))
  .pipe(gulp.dest('public/js'))
  .pipe(plugins.uglify())
  .pipe(plugins.rename({extname: ".min.js"}))
  .pipe(gulp.dest('public/js'));
  done();
});

gulp.task('svgstore', function(done){
  gulp.src('src/assets/img/inline-svgs/*.svg')
  .pipe(plugins.svgmin( function(file) {
    plugins: [{
      cleanupIDs: {
        prefix: path.basename(file.relative, path.extname(file.relative)) + '-',
        minify: true
      }
    }]
  }))
  .pipe(plugins.svgstore())
  .pipe(gulp.dest('public/img'))
  done();
});

gulp.task('copy:images', function(done){
  gulp.src(['src/assets/img/*.{gif,jpg,png,svg,ico}'])
  .pipe(gulp.dest('public/img'))
  done();
});

gulp.task('copy:fonts', function(done){
  gulp.src(['src/assets/fonts/*.{eot,woff,woff2,ttf,otf}'])
  .pipe(gulp.dest('public/fonts'))
  done();
});

gulp.task('watch', function(done) {
  gulp.watch(['src/assets/scss/**/*.scss', 'src/components/**/*.scss'], gulp.series('styles'));
  gulp.watch('src/assets/js/*.js', gulp.series('js'));
  gulp.watch('src/assets/img/inline-svgs/*.svg', gulp.series('svgstore'))
  done();
});

gulp.task('sftp:staging', function() {
  var sftp = require('gulp-sftp-up4');
  return gulp.src(config.themeFiles, { base: './build' })
    .pipe(sftp({
      host: config.sftp.staging.host,
      auth: config.sftp.staging.auth,
      port: config.sftp.staging.port,
      remotePath: config.sftp.staging.remotePath
    }));
});

gulp.task('default', 
  gulp.series('styles', 'js', 'svgstore', 'modernizr', 'copy:images', 'copy:fonts', 'watch',
  function(done) { 
    done(); 
  })
);

gulp.task('build', 
  gulp.series('styles', 'js', 'svgstore', 'modernizr', 'copy:images', 'copy:fonts',
  function(done) { 
    done(); 
  })
);

var gulp          = require('gulp'),
    browserSync   = require('browser-sync'),
    postcss       = require('gulp-postcss'),
    autoprefixer  = require('autoprefixer'),
    fs            = require('fs'),
    cleanCSS      = require('gulp-clean-css'),
    extract       = require('gulp-style-extract'),
    deploy        = require('gulp-gh-pages'),    
    notify        = require('gulp-notify'),
    plumber       = require('gulp-plumber'),
    rename        = require('gulp-rename'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    stylelint     = require('gulp-stylelint'),
    handlebars    = require('handlebars'),
    runSequence   = require('run-sequence'),
    reload        = browserSync.reload,
    del           = require('del'),
    vinylPaths    = require('vinyl-paths'),
    colors        = require('colors'),
    download      = require('gulp-downloader'),
    octophant     = require('octophant'),
    flatten       = require('gulp-flatten'),
    hb            = require('gulp-hb');
    gcmq          = require('gulp-group-css-media-queries');

require.extensions['.html'] = function (module, filename) {
   module.exports = handlebars.compile(fs.readFileSync(filename, 'utf8'))
};
 
var bases = {
    app:  'src/',
    dist: 'dist/',
    scss:  'src/scss/',
    flavors:  'src/flavors/'
};

var sassOptions = {
  outputStyle: 'expanded'
};

var postcssPlugins = [
  autoprefixer({
    browsers: ['last 2 versions']
  })
];

var tokens = [
  {
    title: 'bd',
    src:    'https://assets.brand.ai/ipreo/bd/_style-params.scss?key=By4YfCNVWZ',
    dest:   bases.flavors + 'bd'
  },
  {
    title: 'pcs',
    src:    'https://assets.brand.ai/ipreo/pcs/_style-params.scss?key=r1QaADqhg',
    dest:   bases.flavors + 'pcs'
  },
  {
    title: 'buyside',
    src:    'https://assets.brand.ai/ipreo/buyside/_style-params.scss?key=r1QaADqhg',
    dest:   bases.flavors + 'buyside'
  },
  {
    title: 'northstar',
    src:    'https://assets.brand.ai/ipreo/northstar/_style-params.scss?key=r1QaADqhg',
    dest:   './src/scss/config/'
  }
];

colors.setTheme({
  silly:   'rainbow',
  input:   'grey',
  verbose: 'cyan',
  prompt:  'grey',
  info:    'green',
  data:    'grey',
  help:    'cyan',
  warn:    'yellow',
  debug:   'blue',
  error:   'red'
});

var displayError = function(error) {
  // Initial building up of the error
  var errorString = '[' + error.plugin.error.bold + ']';
  errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end

  // If the error contains the filename or line number add it to the string
  if(error.fileName)
      errorString += ' in ' + error.fileName;

  if(error.lineNumber)
      errorString += ' on line ' + error.lineNumber.bold;

  // This will output an error like the following:
  // [gulp-sass] error message in file_name on line 1
  console.error(errorString);
};

var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Basso"
  })(err);
  this.emit('end');
};


// BUILD SUBTASKS
// ---------------

gulp.task('clean:dist', function() {
  return gulp.src(bases.dist)
    .pipe(vinylPaths(del));
});


gulp.task('styles', function() {
  return gulp.src(bases.scss + '*.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssPlugins))
    .pipe(cleanCSS({format: 'beautify'}))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(bases.dist))
    .pipe(reload({stream:true}))    
});


gulp.task('flavors', function() {
  return gulp.src(bases.flavors + '**/*.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(postcss(postcssPlugins))
    .pipe(cleanCSS({format: 'beautify'}))
    .pipe(rename({
      dirname: ''
    }))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(bases.dist))
    .pipe(reload({stream:true}))    
});


gulp.task('styles:build', function() {
  return gulp.src(bases.dist + '**/*.css')
    .pipe(gcmq())  
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(bases.dist))
});


gulp.task('styles:flatten', function() {
  return gulp.src(bases.dist + '**/*.css')
    .pipe(flatten())
    .pipe(gulp.dest(bases.dist))
});


gulp.task('clean:leftovers', function() {
  return gulp.src([bases.dist + 'bd', bases.dist + 'buyside'])
    .pipe(vinylPaths(del));
});


gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: bases.dist
    }
  });
});


gulp.task('deploy', function() {
  return gulp.src(bases.dist + '**/*.*')
    .pipe(deploy());
});


gulp.task('copy', function() {

gulp.src(bases.app + 'demo-js/**/*.*')
    .pipe(gulp.dest(bases.dist + 'demo-js'))
    .pipe(reload({stream:true}));

gulp.src(bases.app + 'img/*')
    .pipe(gulp.dest(bases.dist + 'img'))
    .pipe(reload({stream:true}));
  
    // copy icons to dist directly
  gulp.src(bases.app + 'fonts/**/*.*')
    .pipe(gulp.dest(bases.dist + 'fonts'))
    .pipe(reload({stream:true}));
});


// ------------------------------------------------
// Northstar Tokens = gulp northstar-scrape
// ------------------------------------------------

gulp.task('tokens', function(){
  return tokens.forEach(function(flavor){
    download(flavor.src)
    .pipe(rename('_tokens.scss'))
    .pipe(gulp.dest(flavor.dest));
  });
});


gulp.task('northstar-scrape', function(done) {
   runSequence('tokens:northstar', done);
});



gulp.task('variables:bd', function(cb) {
  var options = {
    title: `Cupcake BD Settings`,
    output: bases.flavors + `bd/_variables.scss`,
    sort: [
      'global-non-tokens'
    ]
  };
  octophant(bases.scss, options, cb);
});



gulp.task('scrape-variables', function(done) {
  runSequence('variables:bd', done);
});


gulp.task('lint', function() {
  return gulp.src(bases.scss + '**/*.scss')
    .pipe(stylelint({
      failAfterError: true,
      reporters: [
        {formatter: 'verbose', console: true}
      ],
      debug: true
    }));
});


gulp.task('html', function() {
  gulp.src(bases.app + '*.html')
    .pipe(hb({ partials: './src/scss/**/**/*.html'}))
    .pipe(gulp.dest(bases.dist))
    .pipe(reload({stream:true}));
});


gulp.task('watch', function() {
  gulp.watch(bases.scss + '**/*.scss', ['styles', 'flavors']);
  gulp.watch(bases.flavors + '**/*.scss', ['styles', 'flavors']);
  gulp.watch(bases.app + '**/*.html', ['html']);
  //gulp.watch(bases.app + 'img/*', ['img']);
});


gulp.task('extract:color', function() {
  gulp.src(bases.dist + '*.css')
   .pipe(extract({
      properties: ['color']
  }))
  .pipe(rename('colors.css'))
  .pipe(gulp.dest('dist/tokens'))
});

gulp.task('extract:bg', function() {
  gulp.src(bases.dist + '*.css')
   .pipe(extract({
      properties: ['background-color']
  }))
  .pipe(rename('bg-colors.css'))
  .pipe(gulp.dest('dist/tokens'))
});

// ------------
// BUILD TASKS
// ------------

gulp.task('default', function(done) {
  runSequence('clean:dist', 'html', 'lint', 'styles', 'flavors', 'copy', 'styles:build', 'styles:flatten', 'clean:leftovers', 'browser-sync', 'watch', done);
});

gulp.task('build', function(done) {
  runSequence('clean:dist', 'html', 'styles', 'flavors', 'copy', 'styles:build', 'styles:flatten', 'clean:leftovers', done);
});



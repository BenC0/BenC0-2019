const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const runSequence = require('run-sequence')
const browserSync = require('browser-sync').create()
const gzip = require('gulp-gzip');

const Prod = 'Production/'
const Build = 'Build/'

 
gulp.task('babel', () => {
  gulp.src([
      Build+'scripts/!node_modules',
      Build+'scripts/!gulpfile.js',
      Build+'scripts/*.js'
    ])
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest(Prod+'scripts/'))
})

gulp.task('sass', () => {
  gulp.src(Build+'styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(Prod+'styles/'))
})

gulp.task('html', () => {
  gulp.src(Build+'*.html')
    .pipe(gulp.dest(Prod))
})

gulp.task("gzip", () => {
  gulp.src([
      Build+'scripts/!node_modules',
      Build+'scripts/!gulpfile.js',
      Build+'scripts/*.js'
    ])
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gzip({
      append: false
    }))
    .pipe(gulp.dest("gZip-"+Prod+'scripts/'))
    
  gulp.src(Build+'*.html')
    .pipe(gzip({
      append: false
    }))
    .pipe(gulp.dest("gZip-"+Prod))

  gulp.src(Build+'styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gzip({
      append: false
    }))
    .pipe(gulp.dest("gZip-"+Prod+'styles/'))
})

gulp.task('build', () => {
  runSequence(['sass', 'babel', 'html', 'gzip'])
})

gulp.task('watch', ['sass', 'html', 'babel'], () => {
  browserSync.init({
    server: Prod,
    port: 3000
  });
  gulp.watch(Build+'*.html', ['html'])
  gulp.watch(Build+'styles/*.scss', ['sass'])
  gulp.watch(Build+'scripts/*.js', ['babel'])
  gulp.watch(Build+'styles/templates/*.scss', ['sass'])

  gulp.watch(Prod+'*.html').on('change', browserSync.reload)
  gulp.watch(Prod+'styles/*.scss').on('change', browserSync.reload)
  gulp.watch(Prod+'scripts/*.js').on('change', browserSync.reload)
})
let gulp = require('gulp')
let sourcemaps = require('gulp-sourcemaps')
let nodemon = require('gulp-nodemon')
let source = require('vinyl-source-stream')
let buffer = require('vinyl-buffer')
let browserify = require('browserify')
let watchify = require('watchify')

function putTogether(watch) {
    let bundler = watchify(
        browserify('./src/index.js', {
            debug: true
        }).transform('babelify', {
            presets: ['es2015', 'react']
        })
    )

    function rePut() {
        bundler.bundle().on('error', function (err) {
            console.error(err)
            this.emit('end')
        }).pipe(source('bundle.js')).
        pipe(buffer()).
        pipe(sourcemaps.init({
            loadMaps: true
        })).
        pipe(sourcemaps.write('./')).
        pipe(gulp.dest('./src/public'))
    }

    if (watch) {
        bundler.on('update', function () {
            let date = new Date()
            let timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            console.log(`[${timestamp}] bundling...`)
            rePut()
        })
    }

    rePut()
}

function watch() {
    return putTogether(true)
}

gulp.task('build', function () {
    return putTogether()
})
gulp.task('watch', function () {
    return watch()
})

gulp.task('serve', function () {
    nodemon({
        script: 'src/server.js',
        ignore: 'src/public/bundle.js'
    })
})

gulp.task('default', ['watch', 'serve'])
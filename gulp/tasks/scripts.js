import gulp from 'gulp'
import webpack from 'webpack-stream'
import { paths } from '../paths.js'
import { isBuild } from '../isBuild.js'
import browserSync from 'browser-sync'

export const scripts = () => {
  return gulp
    .src(paths.src.js, { sourcemaps: !isBuild })
    .pipe(
      webpack({
        mode: isBuild ? 'production' : 'development',
        output: {
          filename: 'app.min.js',
        },
      })
    )
    .pipe(gulp.dest(paths.build.js))
    .pipe(browserSync.stream())
}

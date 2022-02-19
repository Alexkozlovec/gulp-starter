import gulp from 'gulp'
import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import { paths } from '../paths.js'
import { isBuild } from '../isBuild.js'
import browserSync from 'browser-sync'

export const images = () => {
  if (isBuild) {
    return gulp
      .src(paths.src.images)
      .pipe(newer(paths.build.images))
      .pipe(webp())
      .pipe(gulp.dest(paths.build.images))
      .pipe(gulp.src(paths.src.images))
      .pipe(newer(paths.build.images))
      .pipe(
        imagemin({
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizationLevel: 3,
        })
      )
      .pipe(gulp.dest(paths.build.images))
  }

  return gulp
    .src(paths.src.images)
    .pipe(newer(paths.build.images))
    .pipe(gulp.dest(paths.build.images))
    .pipe(browserSync.stream())
}

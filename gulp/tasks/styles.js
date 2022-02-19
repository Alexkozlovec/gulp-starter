import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import webpcss from 'gulp-webpcss'
import cleanCss from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import replace from 'gulp-replace'
import browserSync from 'browser-sync'
import gulpIf from 'gulp-if'
import gulpGroupCssMediaQueries from 'gulp-group-css-media-queries'

import { isBuild } from '../isBuild.js'
import { paths } from '../paths.js'

const { src, dest } = gulp

const sass = gulpSass(dartSass)

export const styles = () => {
  return src(paths.src.scss, { sourcemaps: !isBuild })
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(replace(/@images\//g, '../images/'))
    .pipe(gulpIf(isBuild, gulpGroupCssMediaQueries()))
    .pipe(
      gulpIf(
        isBuild,
        webpcss({
          webpClass: '.webp',
          noWebpClass: '.no-webp',
        })
      )
    )
    .pipe(
      gulpIf(
        isBuild,
        autoprefixer({
          grid: true,
          overrideBrowsersList: ['last 3 versions'],
          cascade: true,
        })
      )
    )
    .pipe(gulpIf(isBuild, cleanCss()))
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(dest(paths.build.css))
    .pipe(browserSync.stream())
}

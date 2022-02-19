import gulp from 'gulp'
import fileInclude from 'gulp-file-include'
import replace from 'gulp-replace'
import gulpIf from 'gulp-if'
import webpHtmlNoSvg from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'

import { paths } from '../paths.js'
import { isBuild } from '../isBuild.js'
import browserSync from 'browser-sync'

const { src, dest } = gulp

export const html = () => {
  return src(paths.src.html)
    .pipe(fileInclude())
    .pipe(replace(/@images\//g, 'images/'))
    .pipe(gulpIf(isBuild, webpHtmlNoSvg()))
    .pipe(
      gulpIf(
        isBuild,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        })
      )
    )
    .pipe(dest(paths.build.html))
    .pipe(browserSync.stream())
}

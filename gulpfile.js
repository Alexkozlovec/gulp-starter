import gulp from 'gulp'
import { paths } from './gulp/paths.js'
import { cleanDist } from './gulp/tasks/clean.js'
import { copyAssets } from './gulp/tasks/copyAssets.js'
import { html } from './gulp/tasks/html.js'
import { images } from './gulp/tasks/images.js'
import { scripts } from './gulp/tasks/scripts.js'
import { server } from './gulp/tasks/server.js'
import { styles } from './gulp/tasks/styles.js'

const watcher = () => {
  gulp.watch(paths.watch.assets, copyAssets)
  gulp.watch(paths.watch.html, html)
  gulp.watch(paths.watch.scss, styles)
  gulp.watch(paths.watch.js, scripts)
  gulp.watch(paths.watch.images, images)
}

const commonTasks = gulp.parallel(copyAssets, html, styles, scripts, images)

const dev = gulp.series(cleanDist, commonTasks, gulp.parallel(watcher, server))
const build = gulp.series(cleanDist, commonTasks)

gulp.task('default', dev)

export { dev, build }

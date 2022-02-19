import { paths } from '../paths.js'
import browserSync from 'browser-sync'

export const server = () => {
  return browserSync.init({
    server: {
      baseDir: `${paths.buildFolder}`,
    },
    notify: false,
  })
}

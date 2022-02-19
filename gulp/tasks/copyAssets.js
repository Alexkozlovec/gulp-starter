import gulp from 'gulp'
import { paths } from '../paths.js'

const { src, dest } = gulp

export const copyAssets = () => {
  return src(paths.src.assets).pipe(dest(paths.build.assets))
}

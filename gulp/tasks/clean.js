import del from 'del'
import { paths } from '../paths.js'

export const cleanDist = () => {
  return del(paths.buildFolder)
}

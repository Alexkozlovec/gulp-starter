import path from 'path'

const rootFolder = path.basename(path.resolve())
const buildFolder = './dist'
const srcFolder = './src'

export const paths = {
  src: {
    assets: `${srcFolder}/assets/**/*`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
  },
  build: {
    assets: `${buildFolder}/assets/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/images/`,
  },
  watch: {
    assets: `${srcFolder}/assets/**/*`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp,avif,heic}`,
  },
  rootFolder,
  srcFolder,
  buildFolder,
}

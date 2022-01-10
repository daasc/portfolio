module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/assets/scss/color/colors.scss";`
      }
    }
  }
}
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/assets/scss/color/colors.scss";
        @import "~@/assets/scss/global.scss";`
      }
    }
  }
}
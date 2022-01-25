module.exports = {
  publicPath: '/portfolio/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/assets/scss/color/colors.scss";
        @import "~@/assets/scss/global.scss";
        @import "~@/assets/scss/navbar/index.scss";`
      }
    }
  }
}
<template>
  <div>
    <p class="text">Hello, I'm Paulo Sobrinho.</p>
    <p class="profession">Full-Stack Software Engineer</p>
    <hr class="separation" />
    <socialNetworksVue></socialNetworksVue>
  </div>
</template>
<script>
import socialNetworksVue from './socialNetworks.vue';

export default {
  name: "hello",
  components: {
    socialNetworksVue
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/home/index.scss";
</style>

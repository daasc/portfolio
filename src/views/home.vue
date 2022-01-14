<template>
  <div class="container home">
    <hello></hello>
  </div>
</template>
<script>
import hello from "../components/hello.vue";
export default {
  name: "Home",
  components: {
    hello,
  },
  data() {
    return {
      messages: "dad",
    };
  },
  methods: {
    hello() {
      console.log("hello");
    },
  },
};
</script>
<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
</style>

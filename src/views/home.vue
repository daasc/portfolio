<template>
  <div class="home">
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
  width: 100%;
  height: calc(100vh - 70px);
  margin-top: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
</style>

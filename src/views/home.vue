<template>
  <div>
    <h1 class="d">Hola</h1>
  </div>
</template>
<script>
export default {
  name: "Home",
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
.d {
  color: $color-red
}

</style>
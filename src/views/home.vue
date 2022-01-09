<template>
  <div>
    <h1>Hola</h1>
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

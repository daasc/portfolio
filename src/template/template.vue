<template>
  <div>
    <navbar></navbar>
      <router-view></router-view>
  </div>
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
  name: "template",
  components: {
    navbar: navbar,
  },
  data() {
    return {};
  },
};
</script>

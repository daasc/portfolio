<template>
  <div>
    <header class="navbar">
      <a href=""></a>
      <div class="navbar__mobile" @click="showMenu()">
        <div class="line1" :class="{line1: menuActive}"></div>
        <div class="line2" :class="{line2: menuActive}"></div>
        <div class="line3" :class="{line3: menuActive}"></div>
      </div>
      <ul
        class="navbar__itens"
        :class="{ active: menuActive, notActive: !menuActive }"
      >
        <li class="navbar__links">About Me</li>
        <li class="navbar__links">Tech Stack</li>
        <li class="navbar__links">Projects</li>
        <li class="navbar__links">Resources</li>
        <li class="navbar__links">Contact</li>
        <li class="navbar__links">Button</li>
      </ul>
    </header>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    showMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>
<style lang="scss">

.notActive {
  transform: translateX(100%);
  li {
    opacity: 0;
  }
}

.active {
  transform: translateX(0%);

  li {
    opacity: 1;
    color: red;
  }
}
</style>

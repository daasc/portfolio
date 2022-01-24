<template>
  <div>
    <header class="navbar">
      <router-link to="/" class="logo" @click="path = ''">@daasc</router-link>
      <div class="navbar__mobile" @click="showMenu()">
        <div :class="{ line1: menuActive }"></div>
        <div :class="{ line2: menuActive }"></div>
        <div :class="{ line3: menuActive }"></div>
      </div>
      <ul
        class="navbar__itens"
        :class="{ active: menuActive, notActive: !menuActive }"
      >
        <li class="navbar__links" @click="showMenu('/about')">
          <router-link to="/about">About Me</router-link>
          <span class="active" v-if="path === '/about'"></span>
        </li>
        <li class="navbar__links" @click="showMenu('/stack')">
          <router-link to="/stack" >Tech Stack</router-link>
          <span class="active" v-if="path === '/stack'"></span>
        </li>
        <li class="navbar__links" @click="showMenu('/projects')">
          <router-link to="/projects" >Projects</router-link>
          <span class="active" v-if="path === '/projects'"></span>
        </li>
        <li class="navbar__links" @click="showMenu('/contact')">
          <router-link to="/contact" >Contact</router-link>
          <span class="active" v-if="path === '/contact'"></span>
        </li>
        <li class="navbar__links" @click="showMenu()">
          <input type="checkbox" @click="dark()" name="" id="" />
        </li>
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
      path: this.$route.path
    };
  },
  methods: {
    showMenu(path) {
      this.menuActive = !this.menuActive;
      this.path = path
    },  
    dark() {
      const body = document.querySelector('body');
      if(body.classList.contains('dark')) {
        body.classList.remove('dark');
      } else {
        body.classList.add('dark');
      }
    }
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--font-color);
}
.notActive {
  transition: transform 0.5s ease-in;
}
.line1 {
  transition: transform 0.5s ease-in;
  transform: rotate(-45deg) translate(-8px, 8px);
}
.line2 {
  opacity: 0;
}
.line3 {
  transition: transform 0.5s ease-in;
  transform: rotate(45deg) translate(-5px, -7px);
}
.active {
  transform: translateX(0%) !important;

  li {
    opacity: 1;
    cursor: pointer;
  }
}
input[type="checkbox"] {
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: background 300ms linear;

  // circle
  &::before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    top: 0px;
    left: 0px;
    border-radius: 20px;
    background-color: #fff;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: left 300ms linear;
  }

  // move to right
  &:checked {
    background: rgb(48, 48, 48);

    &::before {
      left: 25px;
      background-color: #fff;
    }
  }
}
</style>

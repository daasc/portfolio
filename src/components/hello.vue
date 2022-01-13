<template>
  <div>
    <p class="text">Hello, I'm Paulo Sobrinho.</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.text {
  position: absolute;
  top: calc(50vh - 70px);
  left: 50%;
  transform: translate(-50%, -50%);
  border-right: 4px solid black;
  font-size: 180%;
  white-space: nowrap;
  overflow: hidden;
  animation: typewriter 5s steps(15) 1s 1 normal both,
    blinkCursor 500ms steps(15) infinite normal;
}

@keyframes blinkCursor {
  from {
    border-right-color: black;
  }
  to {
    border-right-color: transparent;
  }
}

@media (min-width: 0px) {
  @keyframes typewriter {
    from {
      width: $myStartWidth;
    }
    to {
      width: 87%;
    }
  }
}
@media (min-width: 420px) {
  @keyframes typewriter {
    from {
      width: $myStartWidth;
    }
    to {
      width: 74%;
    }
  }
}
@media (min-width: 600px) {
  @keyframes typewriter {
    from {
      width: $myStartWidth;
    }
    to {
      width: 50%;
    }
  }
}
@media (min-width: 1000px) {
  @keyframes typewriter {
    from {
      width: $myStartWidth;
    }
    to {
      width: 25%;
    }
  }
}
</style>

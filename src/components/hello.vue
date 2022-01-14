<template>
  <div>
    <p class="text">Hello, I'm Paulo Sobrinho.</p>
    <p class="profession">Full Stack Enginner @daasc</p>
    <hr class="separation">
    <div class="social-networks">
      <div class="center">
        <span class="circle" @click="$red">
          <a
            href="https://www.freecodecamp.org/fcc4a6519fb-9404-4d1d-864c-5326a950c783"
            target="_blank"
          >
            <img
              class="icons"
              src="../assets/img/free-code-camp-brands.svg"
              alt="social networks freeCodeCamp"
            />
          </a>
        </span>
        <span class="circle">
          <a href="https://github.com/daasc" target="_blank" rel="noopener noreferrer">
            <img
              class="icons"
              src="../assets/img/github-brands.svg"
              alt="social networks freeCodeCamp"
            />
          </a>
        </span>
        <span class="circle">
          <a href="https://www.hackerrank.com/paulojhole" target="_blank" rel="noopener noreferrer">
            <img
              class="icons"
              src="../assets/img/hackerrank-brands.svg"
              alt="social networks freeCodeCamp"
            />
          </a>
        </span>
        <span class="circle">
          <a
            href="https://www.linkedin.com/in/paulo-sobrinho-93b527185/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="icons"
              src="../assets/img/linkedin-in-brands.svg"
              alt="social networks freeCodeCamp"
            />
          </a>
        </span>
      </div>
    </div>
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
.separation {
  width: 150px;
  height: 4px;
  background-color: $black;
  border: none;
  border-radius: 4px;
}
.text {
  margin: 0 auto;
  border-right: 4px solid black;
  white-space: nowrap;
  overflow: hidden;
  animation: typewriter 5s steps(15) 1s 1 normal both,
    blinkCursor 500ms steps(15) infinite normal;
}
.profession {
  font-size: 1.5rem;
}
.social-networks {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.circle {
  padding: 10px;
  background-color: $black;
  border-radius: 50%;
  cursor: pointer;
}
.center {
  display: flex;
  justify-content: space-around;
  width: 300px;
}
.social-networks img {
  width: 40px;
  height: 35px;
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
  .text {
    font-size: 1.8rem;
  }
  .profession {
    font-size: 1.1rem;
  }
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
  .text {
    font-size: 2rem;
  }
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
  .text {
    font-size: 2.5rem;
  }
  @keyframes typewriter {
    from {
      width: $myStartWidth;
    }
    to {
      width: 70%;
    }
  }
}
@media (min-width: 1000px) {
  .text {
    font-size: 3.3rem;
  }
  .profession {
    font-size: 1.5rem;
  }
  @keyframes typewriter {
    from {
      width: $myStartWidth;
    }
    to {
      width: 41%;
    }
  }
}
</style>

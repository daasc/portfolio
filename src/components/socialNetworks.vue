<template>
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
        <a href="https://github.com/daasc" target="_blank" rel="noopener">
          <img
            class="icons"
            src="../assets/img/github-brands.svg"
            alt="social networks freeCodeCamp"
          />
        </a>
      </span>
      <span class="circle">
        <a
          href="https://www.hackerrank.com/paulojhole"
          target="_blank"
          rel="noopener"
        >
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
          rel="noopener"
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
</template>
<script>
export default {
  name: 'socialNetworks'
};
</script>
<style lang="scss" scoped>
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
</style>

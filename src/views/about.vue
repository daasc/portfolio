<template>
  <div class="container">
    <div class="about-me">
      <figure class="about-me__figure">
        <img src="../assets/img/person.jpeg" alt="photo " />
      </figure>
      <div class="about-me__information">
        <p>
          Hi, I'm a Full-Stack Software Engineer. I'm currently working on
          developing Micro-Services in Node.js with Serveless and working on
          the Front-End with pure javascript.
        </p>
        <p>
          I have training in Front-End, Back-End in Node.js, Javascript and
          Vue.js. I am a self-taught professional, always looking to improve my
          skills in search of being a renowned professional. I love doing
          challenges.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.about-me {
  display: flex;
  align-items: center;
  justify-content: center;
  .about-me__figure {
    width: 30%;
    img {
      align-self: flex-end;
      width: 350px;
      height: 350px;
      border-radius: 50%;
    }
  }
  .about-me__information {
    font-family: 'Fira Mono', monospace;
    width: 40%;
    text-align: center;
    font-size: 20px;
  }
}
</style>

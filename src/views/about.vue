<template>
  <div class="container">
    <div class="about-me">
      <figure class="about-me__figure">
        <img src="../assets/img/person.jpeg" alt="photo " />
      </figure>
      <div class="about-me__information">
        <p>
          Hi, I'm a Full-Stack Software Engineer. I'm currently working on
          developing Micro-Services in Node.js with Serveless and working on the
          Front-End with pure javascript.
        </p>
        <p>
          I have training in Front-End, Back-End in Node.js, Javascript and
          Vue.js. I am a self-taught professional, always looking to improve my
          skills in search of being a renowned professional. I love doing
          challenges.
        </p>
      </div>
    </div>
    <h2>My Timeline</h2>
    <timeline-vue></timeline-vue>
  </div>
</template>
<script>
import timelineVue from "../components/timeline.vue";

export default {
  name: "about",
  components: {
    timelineVue,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: $mediaInit) {
  .container {
    h2 {
      text-align: center;
      font-size: 2rem;
    }
    .about-me {
      width: 100%;
      display: flex;
      flex-direction: column;
      .about-me__figure {
        width: 80%;
        margin: 0 auto;

        img {
          width: 100%;
          height: 312px;
          border-radius: 50%;
        }
      }
      .about-me__information {
        font-family: "Fira Mono", monospace;
        width: 100%;
        text-align: center;
        font-size: 17px;
        p {
          padding: 5px;
        }
      }
    }
  }
}
@media (min-width: $mediaMinWidth) {
  .container {
    .about-me {
      .about-me__figure {
        width: 68%;
        margin: 0 auto;
        img {
          height: 330px;
        }
      }
      .about-me__information {
        font-size: 20px;
      }
    }
  }
}
@media (min-width: $mediaIpad) {
  .container {
    .about-me {
      .about-me__figure {
        width: 330px;
      }
      .about-me__information {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
}
@media (min-width: $mediaMaxWidth) {
  .container {
    display: block;
    h2 {
      text-align: center;
      font-size: 2rem;
    }
    .about-me {
      flex-direction: row;
      align-items: center;
      margin-top: 20px;
      .about-me__figure {
        margin: 0px;
        width: 40%;
        display: flex;
        justify-content: flex-end;
        img {
          width: 350px;
          height: 350px;
          border-radius: 50%;
        }
      }
      .about-me__information {
        width: 50%;
        margin: 0px;
        p {
          max-width: 750px;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>

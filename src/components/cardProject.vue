<template>
  <!-- <div class="card" @click="openLink(link)"> -->
  <div class="box" @click="openLink(project.link)">
    <div class="content__box">
      <div class="title__box">{{ project.title }}</div>
      <div class="stack__box">{{ project.stack }}</div>
      <figure>
        <v-lazy-image
          :src="project.urlImage"
          alt="Trulli"
          style="width: 100%"
        />
        <figcaption>{{ project.description }}</figcaption>
      </figure>
    </div>
  </div>
</template>
<script>
import VLazyImage from "v-lazy-image";
export default {
  name: "card",
  components: {
    VLazyImage,
  },
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    openLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
@media (min-width: $mediaInit) {
  .box {
    text-align: center;
    width: 80%;
    font-family: "Fira Mono", monospace;
    margin: 0 auto;
    max-height: 285px;
    background-color: var(--color-primary);
    color: var(--font-color);
    padding: 20px;
    border-radius: 10px;
    border-top: 3px solid #00b0ff;
    box-shadow: 0px 20px 20px -10px var(--color-box-shadow);
    cursor: pointer;

    .content__box {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-direction: column;
      height: 100%;
      figure {
        width: 90%;
      }
      .title__box {
        font-weight: bolder;
        font-size: 19px;
      }
    }
  }
}
@media (min-width: $mediaMaxWidth ) {
  .box {
    width: 85%;
    .content__box {
      figure {
        width: 70%;
      }
    }
  }
}
</style>

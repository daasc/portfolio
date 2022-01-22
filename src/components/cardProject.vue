<template>
  <div class="card" @click="openLink(link)">
    <figure class="card__content">
      <v-lazy-image class="card__content__img" :src="urlImage"  alt="image of a project"/>
      <figcaption class="card__content__description">
        <span class="card__tittle">{{ title }}</span>
        <span class="card__stack">{{ stack }}</span>
      </figcaption>
    </figure>
  </div>
</template>
<script>
import VLazyImage from "v-lazy-image";
export default {
  name: "card",
  components: {
    VLazyImage
  },
  props: {
    urlImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    stack: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
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
.card {
  width: 400px;
  position: relative;
  min-height: 270px;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 15px;
  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    z-index: -1;
    clip-path: polygon(
      51% 72%,
      82% 67%,
      100% 78%,
      100% 100%,
      68% 100%,
      32% 100%,
      0 100%,
      0 78%,
      18% 68%
    );
    background-color: $color4;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }
  .card__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .card__content__img {
      width: 100%;
      height: 80%;
      z-index: -2;
    }
    .card__content__description {
      color: white;
      width: 100%;
      height: 20%;
      padding: 0px 10px;

      .card__tittle {
        font-family: "Fira Mono", monospace;
        display: block;
        font-size: 20px;
      }
      .card__stack {
        font-family: "Fira Mono", monospace;
        font-size: 15px;
      }
    }
  }
}
</style>

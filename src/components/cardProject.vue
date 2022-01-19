<template>
  <div class="card">
    <figure class="card__content">
      <img class="card__content__img" :src="urlImage" />
      <span class="s"></span>
      <figcaption class="card__content__description">
        <div>{{ title }}</div>
        {{ description }}
      </figcaption>
    </figure>
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    urlImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.card {
  width: 370px;
  position: relative;
  min-height: 250px;
  cursor: pointer;
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
    background-color: #1f7da6;
    
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
    }
  }
}
</style>

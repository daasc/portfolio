<template>
  <div class="container">
    <h1>Projects</h1>
    <div class="list__projects">
      <card-project
        v-for="(item, index) in projects"
        :key="index"
        :project="item"
      ></card-project>
    </div>
  </div>
</template>
<script>
import cardProject from "../components/cardProject.vue";
import projectsJson from "../db/projects.json";
export default {
  name: "projects",
  components: {
    "card-project": cardProject,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      for (const project of projectsJson.projects) {
        this.projects.push(project);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
  color: var(--font-color);
}
@media (min-width: $mediaInit ) {
  .list__projects {
    width: 100%;
    display: grid;
    
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto-fill, 290px);
    grid-row-gap: 0.5em;
    grid-column-gap: 1em;
  }
}
@media (min-width: $mediaBp1Width ) {
  .list__projects {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: $mediaMaxWidth ) {
  .container {
    display: block;
  }
  .list__projects {
    grid-template-columns: repeat(3, 1fr);
    padding: 0px 10px;
  }
}

@media (min-width: $mediaLG ) {
  .list__projects {
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 10px;
  }
}
</style>

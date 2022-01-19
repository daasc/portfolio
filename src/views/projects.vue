<template>
  <div class="container">
    <h1>Projects</h1>
    <div class="list__projects">
      <card-project
        v-for="(item, index) in projects"
        :key="index"
        :title="item.title"
        :urlImage="item.urlImage"
        :description="item.description"
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
}
.list__projects {
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
  margin: 0px 2% 0px 2%;
  flex-wrap: wrap;
}
</style>

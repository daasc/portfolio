<template>
  <div class="container">
    <h1>My Tech Stack</h1>
    <div class="stacks">
      <div class="stacks__lists">
        <figure class="stacks__icons">
          <img
            src="../assets/img/stack/html-5-logo-svgrepo-com.svg"
            alt="html icons"
          />
          <figcaption>HTML 5</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/stack/w3_css-official.svg" alt="css icons" />
          <figcaption>CSS</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/stack/logo-javascript.svg" alt="javascript icons" />
          <figcaption>Javascript</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/stack/nodejs-horizontal.svg" alt="Node.js icons" />
          <figcaption>Node.js</figcaption>
        </figure>
      </div>
      <div class="stacks__lists">
        <figure class="stacks__icons">
          <img src="../assets/img/stack/vuejs-icon.svg" alt="Vue.js icons" />
          <figcaption>Vue.js</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/stack/git-scm-icon.svg" alt="git icons" />
          <figcaption>GIT</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/stack/flutterio-icon.svg" alt="flutter icons" />
          <figcaption>Flutter</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img
            src="../assets/img/stack/Amazon_Web_Services-Logo.wine.svg"
            alt="AWS icons"
          />
          <figcaption>AWS</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img
            src="../assets/img/stack/Firebase_Logo_Logomark.svg"
            alt="Firebase icons"
          />
          <figcaption>Firebase</figcaption>
        </figure>
      </div>
      <div class="stacks__lists">
        <figure class="stacks__icons">
          <img src="../assets/img/stack/python-5.svg" alt="Python icons" />
          <figcaption>Python</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/stack/vscode.svg" alt="vscode icons" />
          <figcaption>Vscode</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/stack/mongodb-icon.svg" alt="mongodb icons" />
          <figcaption>MongoDb</figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "stacks",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/stacks/index.scss";
</style>

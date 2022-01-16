<template>
  <div class="container">
      <h1>My Tech Stack</h1>
    <div class="stacks">
      <div class="stacks__lists">
        <figure class="stacks__icons">
          <img
            src="../assets/img/html-5-logo-svgrepo-com.svg"
            alt="html icons"
          />
          <figcaption>HTML 5</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/w3_css-official.svg" alt="css icons" />
          <figcaption>CSS</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/logo-javascript.svg" alt="javascript icons" />
          <figcaption>Javascript</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/nodejs-horizontal.svg" alt="Node.js icons" />
          <figcaption>Node.js</figcaption>
        </figure>
      </div>
      <div class="stacks__lists">
        <figure class="stacks__icons">
          <img src="../assets/img/vuejs-icon.svg" alt="Vue.js icons" />
          <figcaption>Vue.js</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/git-scm-icon.svg" alt="git icons" />
          <figcaption>GIT</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/flutterio-icon.svg" alt="flutter icons" />
          <figcaption>Flutter</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img
            src="../assets/img/Amazon_Web_Services-Logo.wine.svg"
            alt="AWS icons"
          />
          <figcaption>AWS</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img
            src="../assets/img/Firebase_Logo_Logomark.svg"
            alt="Firebase icons"
          />
          <figcaption>Firebase</figcaption>
        </figure>
      </div>
      <div class="stacks__lists">
        <figure class="stacks__icons">
          <img src="../assets/img/python-5.svg" alt="Python icons" />
          <figcaption>Python</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/vscode.svg" alt="vscode icons" />
          <figcaption>Vscode</figcaption>
        </figure>
        <figure class="stacks__icons">
          <img src="../assets/img/mongodb-icon.svg" alt="mongodb icons" />
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
<style lang="scss">
@media (min-width: $mediaInit) {
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
  .stacks {
    .stacks__lists {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .stacks__icons {
        width: 150px;
        height: 50px;
        border: 2px solid $black;
        display: flex;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        margin: 0px;
        margin-bottom: 15px;
        &:nth-child(4) {
          img {
            width: 70px;
          }
        }
        img {
          width: 35px;
          height: 35px;
        }
        figcaption {
          margin-left: 5px;
        }
      }
    }
  }
}
@media (min-width: $mediaMaxWidth) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .stacks {
      align-self: center;
      width: 70%;
      .stacks__lists {
        margin-top: 50px;
        width: 80%;
        margin: 0 auto;
        &:nth-child(2) {
          width: 100%;
        }
        &:last-child {
          justify-content: center;
          gap: 7%;
        }
        .stacks__icons {
          width: 200px;
          height: 70px;
          &:nth-child(4) {
            img {
              width: 80px;
            }
          }
          img {
            width: 50px;
            height: 50px;
          }
          figcaption {
            margin-left: 5px;
            font-family:  "Fira Mono", monospace;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>

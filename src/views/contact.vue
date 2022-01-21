<template>
  <div class="container">
    <div class="contact">
      <h1>say hi! :-)</h1>
      <form action="">
        <fieldset>
          <label for="name">
            <input
              type="text"
              v-model="contact.name"
              id="name"
              placeholder="name"
            />
          </label>
          <label for="email">
            <input
              type="email"
              v-model="contact.email"
              id="email"
              placeholder="email"
            />
          </label>
        </fieldset>
        <label for="subject">
          <input
            type="text"
            v-model="contact.subject"
            id="subject"
            placeholder="subject"
          />
        </label>
        <label for="message">
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
        </label>
        <div class="align__button">
          <input type="submit" value="" class="button" />
        </div>
      </form>
    </div>
    <socialNetworksVue></socialNetworksVue>
  </div>
</template>
<script>
import socialNetworksVue from "../components/socialNetworks.vue";

export default {
  name: "contact",
  components: {
    socialNetworksVue,
  },
  data() {
    return {
      contact: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
};
</script>
<style lang="scss">
::-webkit-input-placeholder {
  color: black;
}
@media (min-width: $mediaInit) {
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .contact {
      width: 97%;
      border: 2px solid $black;
      margin: 0 auto;
      h1 {
        text-align: center;
      }
      form {
        padding: 10px;
        input[type="text"],
        [type="email"],
        textarea {
          background: none;
          border: none;
          border-bottom: solid 2px black;
          color: black;
          font-size: 1em;
          font-weight: 400;
          letter-spacing: 1px;
          margin: 0em 0 1.875em 0;
          padding: 0 0 0.875em 0;
          width: 100%;
          transition: all 0.3s;
          font: inherit;
        }
        input[type="text"]:focus,
        [type="email"]:focus,
        textarea:focus {
          outline: none;
          padding: 0 0 0.875em 0;
        }
        .align__button {
          display: flex;
          justify-content: center;
          .button {
            background: none;
            border: solid 2px black;
            color: black;
            cursor: pointer;
            display: inline-block;
            font-family: Fira Mono, sans-serif;
            font-size: 14px;
            font-weight: bold;
            outline: none;
            padding: 20px 35px;
            text-transform: uppercase;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
          }
        }
      }
    }
  }
}
@media (min-width: $mediaBp1Width) {
  .container {
    .contact {
      width: 65%;
      form {
        fieldset {
          display: flex;
          justify-content: space-between;
          width: 100%;
          label {
            width: 45%;
            input[type="text"],
            [type="email"] {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>

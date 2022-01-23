<template>
  <div class="container">
    <show-message-vue
      v-if="message"
      :msg="message"
      :success="true"
    ></show-message-vue>
    <div class="contact">
      <h1>say hi! :-)</h1>
      <form @submit.prevent="sendEmail">
        <fieldset>
          <label for="name">
            <input
              type="text"
              v-model="contact.from_name"
              id="name"
              placeholder="name"
              name="from_name"
            />
            <span v-if="this.error.from_name" class="error"
              >name field is required</span
            >
          </label>
          <label for="email">
            <input
              type="email"
              v-model="contact.email"
              id="email"
              name="email"
              placeholder="email"
            />
            <span class="error" v-if="this.error.email"
              >email field is required</span
            >
          </label>
        </fieldset>
        <label for="subject">
          <input
            type="text"
            v-model="contact.subject"
            id="subject"
            name="subject"
            placeholder="subject"
          />
          <span class="error" v-if="this.error.subject"
            >subject field is required</span
          >
        </label>
        <label for="message">
          <textarea
            name="message"
            id=""
            cols="30"
            v-model="contact.message"
            rows="10"
            placeholder="message"
          ></textarea>
          <span class="error" v-if="this.error.message"
            >message field is required</span
          >
        </label>
        <div class="align__button">
          <button type="submit" class="button" :disabled='load' :class="{'button__loading': load}">
            <span class="button__text">SEND</span>
          </button>
        </div>
      </form>
    </div>
    <socialNetworksVue></socialNetworksVue>
  </div>
</template>
<script>
import socialNetworksVue from "../components/socialNetworks.vue";
import emailjs from "@emailjs/browser";
import showMessageVue from "../components/showMessage.vue";

export default {
  name: "contact",
  components: {
    socialNetworksVue,
    showMessageVue,
  },
  data() {
    return {
      load: false,
      message: "",
      contact: {
        from_name: "",
        email: "",
        subject: "",
        message: "",
      },
      error: {
        from_name: false,
        email: false,
        subject: false,
        message: false,
      },
    };
  },
  methods: {
    async sendEmail() {
      try {
        this.load = true
        if (!this.validation()) {
          await emailjs.send(
            "service_p0g0hrj",
            "template_6au9gfd",
            this.contact,
            "user_iE7JjBRVQcI03YJ7dP4Yz"
          );
          this.cleanForm();
          this.showMessage();
          this.hideMessage();

        }
        this.load = false
      } catch (error) {
        this.load = false
        console.log(error);
        this.hideMessage();
      }
    },
    showMessage() {
      this.message = "Message sent successfully";
    },
    hideMessage() {
      setTimeout(() => {
        this.message = "";
      }, 2900);
    },
    validation() {
      let hasError = false;
      for (const key in this.contact) {
        const value = this.contact[key];
        if (!value) {
          hasError = true;
          this.error[key] = true;
        } else {
          this.error[key] = false;
        }
      }
      return hasError;
    },
    cleanForm() {
      this.contact.subject = "";
      this.contact.message = "";
      this.contact.from_name = "";
      this.contact.email = "";
    },
  },
};
</script>
<style lang="scss">
::-webkit-input-placeholder {
  color: black;
}
@media (min-width: $mediaInit) {
  .error {
    color: $color-red;
  }

  .container {
    display: block;
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
          position: relative;
          justify-content: center;
          .button {
            position: relative;
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

            .button__text {
            }
          }
          .button__loading {
            .button__text {
              visibility: hidden;
              opacity: 0;
            }
            &::after {
              content: "";
              position: absolute;
              width: 16px;
              height: 16px;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              border: 4px solid transparent;
              border-top-color: $black;
              border-radius: 50%;
              animation: button-loading-spinner 1s ease infinite;
            }
          }
        }
      }
    }
  }
}
@media (min-width: $mediaBp1Width) {
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
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

@media (min-width: $mediaLG) {
  .container {
    .contact {
      width: 50%;
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

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>

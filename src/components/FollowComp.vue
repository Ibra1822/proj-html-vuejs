<script>
import { computed } from "@vue/runtime-core";
import { store } from "../data/store";

export default {
  name: "FollowComp",
  data() {
    return {
      store,
    };
  },
  methods: {
    sendCompanyInfo() {
      if (store.companyInfoEmail !== "" && store.companyInfoName !== "") {
        store.companyInfo.push({
          name: store.companyInfoName,
          mail: store.companyInfoEmail,
        });
      } else {
        store.isCorrectSend = true;
      }
      console.log(store.companyInfo);
    },
  },
  computed: {
    errorNewsLetter() {
      if (store.companyInfoEmail == "" || store.companyInfoName == "") {
        return "IL NOME E LA MAIL SONO OBBLIGATORI";
      }
    },
  },
};
</script>
<template>
  <div class="cont-all">
    <div class="center">
      <div class="cont-title">
        <h4>NewsLetter</h4>
        <h2><span>Know</span> First</h2>
        <p>
          Follow closley and receive content about our company and the news of
          the current market
        </p>
      </div>
      <div class="cont-form">
        <h4 v-if="store.isCorrectSend">{{ errorNewsLetter }}</h4>
        <input type="text" placeholder="Name" v-model="store.companyInfoName" />
        <input
          type="email"
          placeholder="Email"
          v-model="store.companyInfoEmail"
        />
        <button @click="sendCompanyInfo()">Subscribe</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

@media screen and (max-width: 780px) {
  .center {
    flex-direction: column;
    .cont-title {
      width: 100% !important;
    }
    .cont-form {
      width: 100% !important;
    }
  }
}

@media screen and (max-width: 600px) {
}
// ------

.cont-all {
  height: 400px;
  width: 100%;
  background-image: url("../assets/lead-customer/images/bg-1.jpg");
  background-size: cover;
  background-position: right 12% bottom 56%;
  .center {
    @include center;
    display: flex;
    .cont-title {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      h4 {
        color: #1d8483;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      h2 {
        color: #fff;
        font-size: 2.1rem;
        margin: 20px 0;
        span {
          padding: 10px 15px;
          background-color: rgba(29, 132, 131, 0.3);
        }
      }
      p {
        color: #778a94;
      }
    }
    .cont-form {
      height: 100%;
      width: 50%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h4 {
        color: #1d8483;
        margin-bottom: 10px;
      }
      input {
        padding: 12px 15px;
        opacity: 0.5;
        margin-bottom: 20px;
        border-radius: 5px;
        border: 0px;
        &:focus-visible {
          outline: 2px solid #1d8483;
          opacity: 0.7;
        }
      }
      button {
        width: 130px;
        @include stBtn;
      }
    }
  }
}
</style>

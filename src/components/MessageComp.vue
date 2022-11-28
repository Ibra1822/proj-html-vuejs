<script>
import { store } from "../data/store";

export default {
  name: "MessageComp",
  props: {
    info: Array,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    send() {
      if (store.mail !== "" && store.info !== "") {
        store.usersMessage.push({
          name: store.name,
          mail: store.mail,
          phone: store.phone,
          message: store.message,
          info: store.info,
        });
      } else {
        store.isClicked = true;
      }
      console.log(store.usersMessage);
    },
  },
  computed: {
    error() {
      if (store.mail === "") {
        return "La Mail è OBBLIGATORIA ";
      } else if (store.info === "") {
        return "Devi Selezionare su cosa vuoi piu INFO";
      }
    },
  },
};
</script>
<template>
  <div id="sign" class="cont-all">
    <div class="center">
      <div class="left">
        <div class="text-cont">
          <h4>Send a message</h4>
          <h2>Get in <span>Touch</span></h2>
          <p>We will respond to your message as soon possible</p>
        </div>
        <div class="form">
          <div class="name-email">
            <input type="text" placeholder="Name" v-model="store.name" />
            <input type="email" placeholder="Email" v-model="store.mail" />
          </div>
          <div class="phone-info">
            <input type="number" placeholder="Phone" v-model="store.phone" />
            <select v-model="store.info" name="" id="">
              <option value="" selected>More info</option>
              <option value="Prices">Prices</option>
              <option value="Services">Services</option>
            </select>
          </div>
          <div class="message">
            <textarea
              v-model="store.message"
              placeholder="Message"
              name=""
              id=""
              rows="5"
            ></textarea>
          </div>
          <button @click="send()">Send</button>
          <h4 v-if="store.isClicked">{{ error }}</h4>
        </div>
      </div>
      <div class="right">
        <div class="cont-right">
          <h3>Example Inc.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul>
            <li v-for="(item, index) in info" :key="index">
              <i :class="item.icon"></i>
              <p>{{ item.info }}</p>
            </li>
          </ul>
          <button>View Map</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

@media screen and (max-width: 780px) {
  .center {
    flex-direction: column;
    width: 100% !important;
  }

  .left {
    width: 100% !important;
  }

  .right {
    width: 100% !important;
    display: flex;
    justify-content: center;
  }
}

// ------

.cont-all {
  width: 100%;
  .center {
    @include center;
    @include lowFlex;
  }
  .left {
    height: 100%;
    width: 50%;
    padding: 20px;
    h4 {
      color: #1d8483;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 2.1rem;
      margin-bottom: 30px;
      span {
        padding: 10px 15px;
        background-color: rgba(29, 132, 131, 0.3);
        color: #1d8483;
      }
    }
    p {
      color: #778a94;
      margin-bottom: 20px;
    }

    .name-email {
      input {
        @include inputCalc;
        margin-bottom: 10px;
        &:focus-visible {
          outline: 2px solid #1d8483;
          opacity: 0.7;
        }
      }
    }
    .phone-info {
      input,
      select {
        @include inputCalc;
        margin-bottom: 10px;
        &:focus-visible {
          outline: 2px solid #1d8483;
          opacity: 0.7;
        }
      }
    }
    .message {
      textarea {
        resize: none;
        width: 98%;
        margin: 1%;
        background-color: lightgray;
        border: 0px;
        border-radius: 5px;
        padding: 5px;
        &:focus-visible {
          outline: 2px solid #1d8483;
          opacity: 0.7;
        }
      }
    }

    button {
      @include stBtn;
      margin: 1%;
    }
  }

  .right {
    height: 100%;
    width: 50%;
    padding: 20px;
    h3 {
      font-size: 1.6rem;
      margin-bottom: 20px;
      color: #121117;
    }
    p {
      color: #778a94;
      margin-bottom: 10px;
      font-size: 0.9rem;
    }
    ul {
      list-style: none;

      li {
        display: flex;
        align-items: center;
        &:last-child i {
          padding: 20px 23px;
        }
        i {
          padding: 20px;
          font-size: 22px;
          background-color: rgba(57, 196, 198, 0.5);
          color: #1d8483;
          border-radius: 50%;
          margin: 10px 15px;
          cursor: pointer;
        }
        p {
          color: #1d8483;
          cursor: pointer;
        }
      }
    }
    button {
      @include sdBtn;
      color: #1d8483;
      &:hover {
        background-color: #1d8483;
        color: #fff;
      }
    }
  }
}
</style>

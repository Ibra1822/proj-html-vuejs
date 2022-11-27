<script>
export default {
  name: "MessageComp",
  props: {
    info: Array,
  },
};
</script>
<template>
  <div class="cont-all">
    <div class="center">
      <div class="left">
        <div class="text-cont">
          <h4>Send a message</h4>
          <h2>Get in <span>Touch</span></h2>
          <p>We will respond to your message as soon possible</p>
        </div>
        <div class="form">
          <div class="name-email">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div class="phone-info">
            <input type="number" placeholder="Phone" />
            <select name="" id="">
              <option value="" selected>More info</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
          <div class="message">
            <textarea placeholder="Message" name="" id="" rows="5"></textarea>
          </div>
          <button>Send</button>
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
    }
  }
}
</style>

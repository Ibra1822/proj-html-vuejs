<script>
import { store } from "../data/store";

export default {
  name: "HeaderComp",
  data() {
    return {
      store,
    };
  },
  props: {
    nav: Array,
  },
};
</script>
<template>
  <div id="up" class="cont-header">
    <div class="cont-all">
      <div class="head">
        <div class="info">
          <div class="cont-hours">
            <i class="fa-solid fa-clock"></i>
            <span>Open Hours: Mon - Sat - 9:00 - 18:00</span>
          </div>
          <div class="cont-info">
            <i class="fa-solid fa-phone"></i>
            <span>+1(305)1234+5678</span>
            <i class="fa-solid fa-envelope"></i>
            <span>hello@example.com</span>
            <i class="fa-brands fa-facebook-f more"></i>
            <i class="fa-brands fa-twitter more"></i>
            <i class="fa-brands fa-linkedin-in more"></i>
          </div>
        </div>
      </div>
      <div class="hero-cont">
        <header>
          <div class="content-header">
            <div class="logo">
              <h2><span>Next</span> GEN</h2>
            </div>
            <nav>
              <ul>
                <li v-for="(item, index) in nav" :key="index">
                  <a href="#">{{ item.title }}</a>
                </li>
              </ul>
              <button>Get in touch</button>
            </nav>
          </div>
        </header>
        <div class="hero-text">
          <h1>Lead - <span>Customer</span></h1>
          <div class="cont-p">
            <p>
              Sucsessful strategis require data analysis,creativity and customer
              focus, taking advantege of the latest technologies to offer
              excellent services
            </p>
            <div class="cont-btn">
              <button class="btn-left">Get in Touch</button>
              <button class="btn-rigth">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;
.cont-header {
  height: 800px;
  width: 100%;
  background-color: black;

  .head {
    width: 100%;
    height: 55px;
    background-color: #24333d;

    .info {
      @include center;
      @include mediumFlex;
      span {
        color: #778a94;
        font-size: 0.8rem;
        margin-right: 20px;
        cursor: pointer;
      }
      i {
        height: 10px;
        width: 10px;
        color: #778a94;
        margin-right: 10px;
        cursor: pointer;
      }
      i.more {
        margin-right: 20px;
      }
    }
  }
}
.hero-cont {
  height: calc(800px - 55px);
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),
    url("../assets/lead-customer/hero-image.png");
  background-size: cover;
}

header {
  @include lowFlex;
  height: 85px;
  width: 100%;
  .content-header {
    height: 100%;
    width: 100%;
    @include mediumFlex;
    @include center;
    .logo {
      color: #fff;
      text-transform: uppercase;
      cursor: pointer;
      span {
        padding: 5px 0px 5px 8px;
        background-color: rgba(29, 132, 131, 0.4);
        color: #39c4c6;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        font-size: 1.4rem;
        font-weight: 200;
      }
      h2 {
        font-weight: 200;
      }
    }
    nav {
      display: flex;
      align-items: center;
      ul {
        list-style: none;
        display: flex;
        font-size: 1.1rem;
        li {
          margin-right: 25px;
          text-transform: uppercase;
          a {
            text-decoration: none;
            color: #fff;
          }
        }
      }
      button {
        @include stBtn;
      }
    }
  }
}
.hero-text {
  @include lowFlex;
  flex-direction: column;
  height: calc(800px - 140px);
  h1 {
    color: #fff;
    font-size: 3.5rem;
    margin-bottom: 30px;
    span {
      padding: 7px 15px;
      background-color: rgba(29, 132, 131, 0.3);
    }
  }
  .cont-p {
    width: 38%;
    text-align: center;
    p {
      color: #a2adae;
      font-size: 1.1rem;
      margin-bottom: 30px;
    }
  }
}
.cont-btn {
  .btn-left {
    @include stBtn;
    margin-right: 15px;
  }
  .btn-rigth {
    @include sdBtn;
    &:hover {
      padding: 9px 22px;
      background-color: #1d8483;
      border: 0px;
    }
  }
}
</style>

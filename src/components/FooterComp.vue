<script>
import { store } from "../data/store";

export default {
  name: "FooterComp",
  props: {
    info: Array,
    we: Array,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <footer>
    <div class="center">
      <div class="info box">
        <div class="logo">
          <h2><span>Next</span> GEN</h2>
          <p>A function HTML template for Corporate & Business</p>
          <ul>
            <li v-for="(item, index) in info" :key="index">
              <i :class="item.icon"></i>
              <p>{{ item.info }}</p>
            </li>
          </ul>
          <button><a href="#sign">Get in touch</a></button>
        </div>
      </div>
      <div v-for="(item, index) in we" :key="index" class="box">
        <h2>{{ item.title }}</h2>
        <ul>
          <li v-for="(li, index) in item.inside" :key="index">
            <a href="">
              <i class="fa-solid fa-chevron-right no-hover"></i>
              <p>
                <span>{{ li }}</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  <div class="find-us">
    <div class="left-end">
      <p>Enjoy the low price. We are tracking any intention of piracy</p>
    </div>
    <div class="right-end">
      <div class="cont-year">
        <i class="fa-regular fa-copyright"></i>
        <p>2020 NEXTGEN is Proudly Powered by <span>Codings</span></p>
      </div>
      <a href="#up"> <i class="fa-solid fa-arrow-up"></i></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

@media screen and (max-width: 780px) {
  .center {
    width: 100% !important;
    padding: 20px !important;
    .box {
      width: calc(100% / 2 - 20px);
      margin-bottom: 50px;
      h2 {
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .box {
    margin: auto;
    width: 100% !important;
  }

  .find-us {
    .left-end {
      display: none;
    }
    .right-end {
      width: 100% !important;
      display: flex;
      align-items: center;
      .cont-year {
        width: 100%;
      }
    }
  }
}
// ------

footer {
  width: 100%;
  background-color: #121117;
  .center {
    @include center;
    @include mediumFlex;
    flex-wrap: wrap;
    padding: 10px 0px;
  }
  .box {
    height: 400px;
    width: calc(100% / 4 - 40px);
    min-width: 193px;
    padding: 20px;
    background-color: rgba(30, 34, 35, 0.5);
    border-radius: 20px;
    h2 {
      color: #fff;
      margin-bottom: 20px;
    }
    ul {
      list-style: none;
      li {
        a {
          text-decoration: none;
          color: #fff;
          display: flex;
          margin-bottom: 20px;
          span {
            &:hover {
              text-decoration: underline;
            }
          }
          i {
            margin-right: 15px;
          }
        }
      }
    }
  }
  .info.box {
    background-color: transparent;
    .logo {
      color: #fff;
      text-transform: uppercase;
      margin-bottom: 40px;

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
    }
    p {
      font-size: 0.7rem;
      margin-top: 20px;
    }
    ul {
      list-style: none;
      margin-top: 20px;
      li {
        display: flex;
        margin-bottom: 20px;
        align-items: center;
        i {
          margin-right: 20px;
          vertical-align: middle;
        }
      }
    }
    button {
      @include darkBtn;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
.find-us {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d0d11;
  color: #a2adae;
  font-size: 0.9rem;
  padding: 20px;
  .left-end {
    width: 50%;
    text-align: right;
    padding: 0px 60px;
  }
  .right-end {
    width: 50%;
    display: flex;
    justify-content: space-between;
    i {
      font-size: 1.4rem;
      margin: 0px 20px;
      cursor: pointer;
      color: #fff;
    }
    .cont-year {
      display: flex;
      span {
        color: #39c4c6;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      i {
        font-size: 0.8rem;
        margin: 3px 2px;
        cursor: default;
        color: #fff;
      }
    }
  }
}
</style>

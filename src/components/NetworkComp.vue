<script>
import { store } from "../data/store";
export default {
  name: "Networkcomp",
  props: {
    networkArray: Array,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="cont-network">
    <div class="center">
      <div class="left">
        <div class="title">
          <p class="about-text">Aboute the network</p>
          <h2><span>The</span> Company</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            molestiae culpa deserunt nesciunt accusamus? Quia!
          </p>
        </div>
        <div class="box-cont">
          <div v-for="(item, index) in networkArray" :key="index" class="box">
            <div class="box-title">
              <i :class="item.icon"></i>
              <h2>{{ item.title }}</h2>
            </div>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="../assets/lead-customer/images/about-3.jpg" alt="" />
      </div>

      <div class="cont-d">
        <div v-for="n in 36" :key="n" class="dot"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

@media screen and (max-width: 780px) {
  .center {
    width: 95% !important;
    .left {
      width: 100% !important;
      text-align: center;

      .box {
        padding: 10px;
      }
    }
    .right {
      display: none;
    }
  }
}
@media screen and (max-width: 600px) {
}

// ------

.cont-network {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: flex-end;
  .center {
    height: 100%;
    width: 92%;
    @include lowFlex;
    position: relative;
    .left {
      height: 100%;
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 0.9rem;
      .box-cont {
        display: flex;
        flex-wrap: wrap;
        .box {
          width: calc(100% / 2 - 20px);
          padding: 10px;
          margin-bottom: 45px;
          .box-title {
            display: flex;
            padding: 10px;
            h2 {
              font-size: 1rem;
            }
            i {
              font-size: 20px;
              margin: 0px 5px 0px 0px;
              color: #1d8483;
            }
          }
        }
      }
    }
    .title {
      width: 100%;
      padding: 20px 10px;
      color: #24333d;
      .about-text {
        margin: 10px;
        color: rgb(29, 132, 131);
        text-transform: uppercase;
        font-weight: 800;
      }
      p {
        margin: 10px;
      }
      span {
        padding: 7px 10px;
        background-color: rgba(29, 132, 131, 0.3);
        color: #1d8483;
      }
      h2 {
        font-size: 1.8rem;
        font-weight: 900;
      }
    }
    //
    .right {
      height: 100%;
      width: 60%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}

.dot {
  height: 10px;
  width: 10px;
  background-color: #39c4c6;
  border-radius: 50%;
  margin: 5px;
  opacity: 0.4;
}
.cont-d {
  display: flex;
  flex-wrap: wrap;
  height: 10px;
  width: 180px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 95%;
  left: 45%;
}
</style>

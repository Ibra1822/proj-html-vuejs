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
    </div>
  </div>
</template>

<style lang="scss">
@use "../styles/mixin" as *;

.cont-network {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: flex-end;
  .center {
    height: 100%;
    width: 85%;
    @include lowFlex;
    .left {
      height: 100%;
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .box-cont {
        display: flex;
        flex-wrap: wrap;
        .box {
          width: calc(100% / 2);
          padding: 10px;
          margin-bottom: 45px;
          .box-title {
            display: flex;
            padding: 10px;
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
      width: 70%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>

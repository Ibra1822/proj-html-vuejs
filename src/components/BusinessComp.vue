<script>
import { store } from "../data/store";
export default {
  neme: "BusinessComp",
  props: {
    businessArray: Array,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="business-cont">
    <div class="center">
      <div class="title">
        <p>Our Business area</p>
        <h2>Excellence in <span>Services</span></h2>
        <div class="cont-p-btn">
          <div class="p-cont">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              laudantium soluta consectetur blanditiis odio at, tempora adipisci
              numquam libero!
            </p>
          </div>
          <div class="btn-cont">
            <button>SEE ALL</button>
          </div>
        </div>
      </div>
      <div class="box-cont">
        <div v-for="(item, index) in businessArray" :key="index" class="box">
          <div class="inbox">
            <i :class="item.icon"></i>
            <h2>{{ item.title }}</h2>
            <p>{{ item.desc }}</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

@media screen and (max-width: 780px) {
  .title {
    text-align: center;
  }
  .center {
    width: 95% !important;
  }
  .box {
    width: calc(100% / 2) !important;
  }
}
@media screen and (max-width: 600px) {
  .title {
    margin-bottom: 55px;
  }
  .box {
    width: 100% !important;
  }
}
// ------
.business-cont {
  width: 100%;
  background-color: #121117;
  .center {
    @include center;
    .title {
      height: 250px;
      width: 100%;
      color: #fff;
      padding: 25px 19px;
      p {
        margin: 20px 0px;
        color: #1d8483;
      }
      h2 {
        font-size: 2.5rem;
        span {
          padding: 10px 15px;
          background-color: rgba(29, 132, 131, 0.3);
        }
      }
      .cont-p-btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .p-cont {
          padding: 40px;
          p {
            color: #778a94;
          }
        }
        .btn-cont {
          width: 20%;
          button {
            @include darkBtn;
          }
        }
      }
    }
    .box-cont {
      @include lowFlex;
      flex-wrap: wrap;
      padding: 30px 0px;
      .box {
        width: calc(100% / 3);
        padding: 10px;
        .inbox {
          height: 100%;
          width: 100%;
          border: 1px solid #19191f;
          border-radius: 15px;
          background-color: #19191f;
          padding: 15px 20px;
          i {
            font-size: 30px;
            color: rgba(29, 132, 131, 0.7);
            margin: 10px;
          }
          h2 {
            color: #fff;
            margin-bottom: 20px;
          }
          p {
            font-size: 1rem;
            color: #a2adae;
            margin-bottom: 20px;
          }
          button {
            @include darkBtn;
          }
        }
      }
    }
  }
}
</style>

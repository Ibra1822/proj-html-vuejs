<script>
import { store } from "../data/store";
export default {
  name: "NewsComp",
  props: {
    newsArray: Array,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getImg(imgName) {
      return new URL(
        `../assets/lead-customer/images/${imgName}`,
        import.meta.url
      ).href;
    },
  },
};
</script>
<template>
  <div class="cont-news">
    <div class="center">
      <div class="cont-title">
        <h4>Our editorial content</h4>
        <h2>Latest <span>News</span></h2>
        <div class="cont-p-btn">
          <p>
            Evry week we pubblish content about what is the best in the business
            world
          </p>
          <button
            v-for="(item, index) in newsArray"
            :key="index"
            @click="item.visible = !item.visible"
          >
            See ALL
          </button>
        </div>
      </div>
      <div class="cont-box">
        <div
          v-for="(item, index) in newsArray"
          :key="index"
          v-show="item.visible === true"
          class="box"
        >
          <div class="img-cont">
            <img class="eff" :src="getImg(item.image)" alt="" />
          </div>
          <div class="user">
            <i class="fa-solid fa-user"></i>
            <p>{{ item.user }}</p>
            <i class="fa-regular fa-clock"></i>
            <p>{{ item.last }}</p>
          </div>
          <div class="text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

@media screen and (max-width: 780px) {
  .center {
    width: 100% !important;
  }
  .cont-title {
    text-align: center;
  }
  .cont-box {
    flex-wrap: wrap;
    .box {
      width: calc(100% / 2);
      min-width: 255px;
      margin: 20px auto;
    }
  }
}

@media screen and (max-width: 600px) {
  .cont-box {
    padding: 40px !important;
    .box {
      width: 100% !important;
      margin: 20px auto;
    }
  }
}
// ------

.cont-news {
  width: 100%;
  .center {
    @include center;
    display: flex;
    flex-direction: column;
    .cont-title {
      width: 100%;
      height: 200px;
      padding: 25px 20px;
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

      .cont-p-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        button:not(:last-child) {
          display: none;
        }
        p {
          color: #778a94;
        }
        button {
          @include stBtn;
        }
      }
    }
    .cont-box {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      padding: 20px;
      flex-wrap: wrap;
      .box {
        height: 350px;
        width: calc(100% / 3 - 30px);
        position: relative;
        cursor: pointer;
        margin-bottom: 30px;
        &:hover .text p {
          display: block;
        }
        &:hover .user {
          display: flex;
        }

        &:hover .eff {
          filter: blur(2px);
        }

        .img-cont {
          height: 100%;
          width: 100%;
          background-color: #000;
          border-radius: 15px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
            opacity: 0.5;
          }
        }

        .user {
          position: absolute;
          top: 20px;
          left: 25px;
          display: flex;
          color: #fff;
          display: none;
          p {
            margin: 0px 15px;
            font-size: 0.9rem;
          }
          i {
            font-size: 0.9rem;
          }
        }

        .text {
          width: 100%;
          padding: 15px;
          position: absolute;
          bottom: 15px;
          color: #fff;
          transition: all 1s;

          p {
            display: none;
            margin-top: 20px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>

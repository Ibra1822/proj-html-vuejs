<script>
import { store } from "../data/store";
export default {
  name: "PriceAreaComp",
  props: {
    priceArray: Array,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="cont-prices">
    <div class="center">
      <div class="cont-title">
        <h4>Monthly plans</h4>
        <h2><span>Pricing</span> Table</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          officiis repudiandae repellat veniam iste at est facilis repellendus
          voluptates praesentium, dolor laborum eveniet eaque
        </p>
      </div>
      <div class="cont-card-price">
        <div
          v-for="(item, index) in priceArray"
          :key="index"
          class="box"
          :class="{ big: item.popular }"
        >
          <div v-if="item.popular" class="popular">
            <h6>Most popular</h6>
          </div>
          <div class="title-box">
            <i :class="item.icon"></i>
            <h3>{{ item.title }}</h3>
            <h2>{{ item.price }}</h2>
            <ul>
              <li v-for="(ogt, index) in item.offer" :key="index">
                <p>{{ ogt.type }}</p>
                <i
                  :class="{
                    'fa-solid fa-check': ogt.isTrue,
                    'fa-solid fa-x': ogt.isTrue === false,
                  }"
                ></i>
              </li>
            </ul>
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
    width: 95% !important;
  }
  .cont-card-price {
    flex-wrap: wrap;
    justify-content: center;
    .box {
      width: calc(100% / 2);
      margin-top: 45px;
    }
  }
}

@media screen and (max-width: 600px) {
  h4,
  h2 {
    margin-bottom: 30px !important;
  }
  .box {
    width: 90% !important;
    margin-bottom: 45px;
  }
}
// ------

.cont-prices {
  width: 100%;
  background-color: #e3e7df;
  padding: 40px;
  .center {
    @include center;
    display: flex;
    flex-direction: column;
    .cont-title {
      height: 180px;
      width: 100%;
      margin: 50px 0px;
      text-align: center;
      h4 {
        color: #1d8483;
        margin: 15px 0px;
        text-transform: uppercase;
      }
      h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        span {
          padding: 10px 15px;
          background-color: rgba(29, 132, 131, 0.3);
          color: #1d8483;
        }
      }
      p {
        color: #a2adae;
      }
    }
    .cont-card-price {
      display: flex;
      align-items: center;
      justify-content: center;
      .box {
        width: calc(100% / 3);
        text-align: center;
        background-color: #fff;
        border-radius: 10px;
        padding-top: 10px;
        min-width: 230px;
        i {
          color: #1b7e7e;
          font-size: 30px;
          margin-bottom: 20px;
        }
        h3 {
          margin-bottom: 20px;
        }
        h2 {
          font-size: 1.7rem;
          color: #1b7e7e;
          margin-bottom: 25px;
        }
        ul {
          list-style: none;
          padding: 25px;

          li {
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 5px;
            cursor: pointer;
            p {
              font-size: 0.9rem;
            }
            i {
              font-size: 15px;
            }
          }
        }
      }
      .box.big {
        height: 450px;
        margin: 0px 25px;
      }
    }
  }

  .popular {
    width: 20%;
    background-color: #1b7e7e;
    margin-top: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    h6 {
      color: #ffff;
      padding: 5px;
    }
  }
}
</style>

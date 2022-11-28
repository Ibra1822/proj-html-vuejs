<script>
import { store } from "../data/store";
export default {
  name: "QualityComp",
  props: {
    quality: Array,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="cont-qual">
    <div class="center">
      <div v-for="(item, index) in quality" :key="index" class="card">
        <div class="cont-inside">
          <div class="card-logo">
            <i :class="item.logo"></i>
          </div>
          <div class="card-title">
            <h2>{{ item.title }}</h2>
          </div>
          <div class="card-text">
            <p>
              {{ item.desc }}
            </p>
          </div>
        </div>
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
    width: 100% !important;
    .card {
      width: calc(100% / 2);
      min-width: 220px;
      text-align: center;
    }
  }
}
@media screen and (max-width: 600px) {
  .center {
    width: 100% !important;
    .card {
      width: 90% !important;
    }
  }
}

// ------

.cont-qual {
  width: 100%;
  background-color: #e3e7df;
  padding: 40px 0px;

  .center {
    @include center;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: relative;
  }
  .card {
    height: 290px;
    width: calc(100% / 3);
    padding: 15px;
    .cont-inside {
      height: 100%;
      width: 100%;
      background-color: #ffffff;
      padding: 10px;
      border-radius: 15px;
      overflow-y: scroll;
    }
    i {
      font-size: 1.2rem;
      padding: 20px;
      background-color: rgba(57, 196, 198, 0.4);
      color: #1d8483;
      border-radius: 50%;
    }
    h2 {
      margin: 10px 0px;
      color: #1e2223;
    }
    p {
      color: #778a94;
      font-size: 0.97rem;
      padding: 5px;
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
  top: 100%;
  left: 49%;
  z-index: 999;
}
</style>

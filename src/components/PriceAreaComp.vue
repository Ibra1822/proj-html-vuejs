<script>
export default {
  name: "PriceAreaComp",
};
</script>
<template>
  <div class="cont-prices">
    <div class="center">
      <div class="cont-title"></div>
      <div class="cont-card-price">
        <div class="box"></div>
        <div class="box center"></div>
        <div class="box"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

.cont-prices {
  height: 800px;
  width: 100%;
  @include debug;
  .center {
    @include debug;
    @include center;
    display: flex;
    flex-direction: column;
    .cont-title {
      @include debug;
      height: 180px;
      width: 100%;
      margin-bottom: 50px;
    }
    .cont-card-price {
      display: flex;
      align-items: center;
      .box {
        @include debug;
        height: 500px;
        width: calc(100% / 3);
      }
      .box.center {
        height: 550px;
      }
    }
  }
}
</style>

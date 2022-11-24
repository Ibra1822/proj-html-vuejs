<script>
export default {
  name: "NewsComp",
};
</script>
<template>
  <div class="cont-news">
    <div class="center">
      <div class="cont-title"></div>
      <div class="cont-box">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

.cont-news {
  @include debug;
  height: 600px;
  width: 100%;
  .center {
    @include debug;
    @include center;
    display: flex;
    flex-direction: column;
    .cont-title {
      @include debug;
      width: 100%;
      height: 200px;
    }
    .cont-box {
      @include debug;
      height: 400px;
      width: 100%;
      display: flex;
      .box {
        @include debug;
        height: 350px;
        width: calc(100% / 3);
      }
    }
  }
}
</style>

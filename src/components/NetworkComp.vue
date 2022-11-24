<script>
export default {
  name: "Networkcomp",
};
</script>
<template>
  <div class="cont-network">
    <div class="center">
      <div class="left">
        <div class="title"></div>
        <div class="box-cont">
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../styles/mixin" as *;

.cont-network {
  @include debug;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: flex-end;
  .center {
    height: 100%;
    width: 85%;
    @include debug;
    @include lowFlex;
    .left {
      height: 100%;
      width: 30%;
      @include debug;
      background-color: aqua;
      display: flex;
      flex-direction: column;
      .box-cont {
        display: flex;
        flex-wrap: wrap;
        .box {
          @include debug;
          height: 200px;
          width: calc(100% / 2);
        }
      }
    }
    .title {
      @include debug;
      width: 100%;
      height: 200px;
    }
    //
    .right {
      height: 100%;
      width: 70%;
      @include debug;
      background-color: red;
    }
  }
}
</style>

<script>
export default {
  neme: "BusinessComp",
};
</script>
<template>
  <div class="business-cont">
    <div class="center">
      <div class="title"></div>
      <div class="box-cont">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;
.business-cont {
  height: 750px;
  width: 100%;
  @include debug;
  .center {
    @include center;
    @include debug;
    .title {
      height: 250px;
      width: 100%;
      @include debug;
    }
    .box-cont {
      @include lowFlex;
      flex-wrap: wrap;
      .box {
        @include debug;
        width: calc(100% / 3);
        height: 250px;
      }
    }
  }
}
</style>

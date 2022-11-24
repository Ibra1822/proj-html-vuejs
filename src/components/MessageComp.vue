<script>
export default {
  name: "MessageComp",
};
</script>
<template>
  <div class="cont-all">
    <div class="center">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

.cont-all {
  @include debug;
  height: 500px;
  width: 100%;
  .center {
    @include debug;
    @include center;
    @include lowFlex;
  }
  .left {
    @include debug;
    height: 100%;
    width: 50%;
  }
  .right {
    @include debug;
    height: 100%;
    width: 50%;
  }
}
</style>

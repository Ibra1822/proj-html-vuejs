<script>
export default {
  name: "FollowComp",
};
</script>
<template>
  <div class="cont-all">
    <div class="center">
      <div class="cont-title"></div>
      <div class="cont-form"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

.cont-all {
  @include debug;
  height: 400px;
  width: 100%;
  .center {
    @include debug;
    width: 60%;
    height: 100%;
    margin: auto;
    display: flex;
    .cont-title {
      @include debug;
      height: 100%;
      width: 50%;
    }
    .cont-form {
      @include debug;
      height: 100%;
      width: 50%;
    }
  }
}
</style>

<script>
export default {
  name: "FooterComp",
};
</script>
<template>
  <footer>
    <div class="center">
      <div class="info box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </footer>
  <div class="find-us"></div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

footer {
  @include debug;
  height: 400px;
  width: 100%;
  .center {
    @include center;
    @include debug;
    @include lowFlex;
  }
  .box {
    @include debug;
    height: 300px;
    width: calc(100% / 4);
  }
  .info.box {
    background-color: red;
  }
}
.find-us {
  height: 60px;
  width: 100%;
  background-color: aqua;
}
</style>

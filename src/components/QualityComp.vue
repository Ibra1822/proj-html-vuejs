<script>
export default {
  name: "QualityComp",
};
</script>
<template>
  <div class="cont-qual">
    <div class="center">
      <div class="card">
        <div class="card-logo"></div>
        <div class="card-title"></div>
        <div class="card-text"></div>
      </div>
      <div class="card">
        <div class="card-logo"></div>
        <div class="card-title"></div>
        <div class="card-text"></div>
      </div>
      <div class="card">
        <div class="card-logo"></div>
        <div class="card-title"></div>
        <div class="card-text"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

.cont-qual {
  @include debug;
  width: 100%;
  height: 400px;
  background-color: #e3e7df;
  .center {
    @include debug;
    @include center;
    @include mediumFlex;
  }
  .card {
    @include debug;
    height: 250px;
    width: calc(100% / 3);
  }
}
</style>

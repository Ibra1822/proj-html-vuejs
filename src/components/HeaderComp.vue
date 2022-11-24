<script>
export default {
  name: "HeaderComp",
};
</script>
<template>
  <div class="cont-header">
    <div class="cont-all">
      <div class="head">
        <div class="info"></div>
      </div>
      <div class="hero-cont">
        <header>
          <div class="content-header">asfafs</div>
        </header>
        <div class="hero-text"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;
.cont-header {
  height: 800px;
  width: 100%;
  background-color: cadetblue;
  .head {
    @include debug;
    width: 100%;
    height: 55px;
    .info {
      @include debug;
      @include center;
      @include lowFlex;
    }
  }
}
.hero-cont {
  height: calc(800px - 55px);
  width: 100%;
  @include debug;
  background-image: url("../assets/lead-customer/hero-image.png");
  background-size: cover;
  background-color: black;
}

header {
  @include debug;
  @include lowFlex;
  height: 85px;
  width: 100%;
}
.hero-text {
  @include lowFlex;
  @include debug;
  height: calc(800px - 140px);
}
</style>

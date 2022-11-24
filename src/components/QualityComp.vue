<script>
export default {
  name: "QualityComp",
};
</script>
<template>
  <div class="cont-qual">
    <div class="center">
      <div class="card">
        <div class="cont-inside">
          <div class="card-logo"><i class="fa-solid fa-user-group"></i></div>
          <div class="card-title"><h2>Human Capital</h2></div>
          <div class="card-text">
            <p>
              Humanizing business:Harness the power of technology to improve the
              way people work
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="cont-inside">
          <div class="card-logo"><i class="fa-solid fa-chart-pie"></i></div>
          <div class="card-title"><h2>Core Business</h2></div>
          <div class="card-text">
            <p>
              It takes innovative approaches to transform modernize and run
              existing platforms
            </p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="cont-inside">
          <div class="card-logo"><i class="fa-solid fa-gauge-high"></i></div>
          <div class="card-title"><h2>Performnace</h2></div>
          <div class="card-text">
            <p>
              Achieving maximum impact and value from investments in finance and
              supply chain
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

.cont-qual {
  @include debug;
  width: 100%;
  background-color: #e3e7df;
  .center {
    @include center;
    @include mediumFlex;
  }
  .card {
    height: 290px;
    width: calc(100% / 3);
    padding: 15px;
    margin: 40px 0px;
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
</style>

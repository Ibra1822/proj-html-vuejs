<script>
export default {
  name: "FollowComp",
};
</script>
<template>
  <div class="cont-all">
    <div class="center">
      <div class="cont-title">
        <h4>NewsLetter</h4>
        <h2><span>Know</span> First</h2>
        <p>
          Follow closley and receive content about our company and the news of
          the current market
        </p>
      </div>
      <div class="cont-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;
.cont-all {
  height: 400px;
  width: 100%;
  background-image: url("../assets/lead-customer/images/bg-1.jpg");
  background-size: cover;
  background-position: right 12% bottom 56%;
  .center {
    width: 60%;
    height: 100%;
    margin: auto;
    display: flex;
    .cont-title {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      h4 {
        color: #1d8483;
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      h2 {
        color: #fff;
        font-size: 2.1rem;
        margin: 20px 0;
        span {
          padding: 10px 15px;
          background-color: rgba(29, 132, 131, 0.3);
        }
      }
      p {
        color: #778a94;
      }
    }
    .cont-form {
      height: 100%;
      width: 50%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      input {
        padding: 10px 15px;
        opacity: 0.5;
        margin-bottom: 20px;
      }
      button {
        width: 130px;
        @include stBtn;
      }
    }
  }
}
</style>

<script>
export default {
  name: "PriceAreaComp",
};
</script>
<template>
  <div class="cont-prices">
    <div class="center">
      <div class="cont-title">
        <h4>Monthly plans</h4>
        <h2><span>Pricing</span> Table</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          officiis repudiandae repellat veniam iste at est facilis repellendus
          voluptates praesentium, dolor laborum eveniet eaque
        </p>
      </div>
      <div class="cont-card-price">
        <div class="box">
          <div class="title-box">
            <i class="fa-solid fa-rocket"></i>
            <h3>Standard</h3>
            <h2>$ 490/mo</h2>
            <ul>
              <li>
                <p>Standard Accounting</p>
                <i class="fa-solid fa-check"></i>
              </li>
              <li>
                <p>Platform Access</p>
                <i class="fa-solid fa-check"></i>
              </li>
              <li>
                <p>Business Orientation</p>
                <i class="fa-solid fa-xmark"></i>
              </li>
              <li>
                <p>Dedicated Consultant</p>
                <i class="fa-solid fa-xmark"></i>
              </li>
              <li>
                <p>Personal assistence</p>
                <i class="fa-solid fa-xmark"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="box center">
          <i class="fa-solid fa-briefcase"></i>
          <h3>Professional</h3>
          <h2>$ 890/mo</h2>
          <ul>
            <li>
              <p>Standard Accounting</p>
              <i class="fa-solid fa-check"></i>
            </li>
            <li>
              <p>Platform Access</p>
              <i class="fa-solid fa-check"></i>
            </li>
            <li>
              <p>Business Orientation</p>
              <i class="fa-solid fa-check"></i>
            </li>
            <li>
              <p>Dedicated Consultant</p>
              <i class="fa-solid fa-xmark"></i>
            </li>
            <li>
              <p>Personal assistence</p>
              <i class="fa-solid fa-xmark"></i>
            </li>
          </ul>
        </div>
        <div class="box">
          <i class="fa-regular fa-gem"></i>
          <h3>Professional</h3>
          <h2>$ 890/mo</h2>
          <ul>
            <li>
              <p>Standard Accounting</p>
              <i class="fa-solid fa-check"></i>
            </li>
            <li>
              <p>Platform Access</p>
              <i class="fa-solid fa-check"></i>
            </li>
            <li>
              <p>Business Orientation</p>
              <i class="fa-solid fa-check"></i>
            </li>
            <li>
              <p>Dedicated Consultant</p>
              <i class="fa-solid fa-check"></i>
            </li>
            <li>
              <p>Personal assistence</p>
              <i class="fa-solid fa-check"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/mixin" as *;

.cont-prices {
  height: 850px;
  width: 100%;
  background-color: #e3e7df;
  .center {
    @include center;
    display: flex;
    flex-direction: column;
    .cont-title {
      height: 180px;
      width: 100%;
      margin: 50px 0px;
      text-align: center;
      h4 {
        color: #1d8483;
        margin: 15px 0px;
        text-transform: uppercase;
      }
      h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        span {
          padding: 10px 15px;
          background-color: rgba(29, 132, 131, 0.3);
          color: #1d8483;
        }
      }
      p {
        color: #a2adae;
      }
    }
    .cont-card-price {
      display: flex;
      align-items: center;
      .box {
        width: calc(100% / 3);
        padding: 25px;
        text-align: center;
        background-color: #fff;
        border-radius: 10px;
        i {
          color: #1b7e7e;
          font-size: 30px;
          margin-bottom: 20px;
        }
        h2 {
          font-size: 1.7rem;
          color: #1b7e7e;
          margin-bottom: 25px;
        }
        ul {
          list-style: none;
          li {
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 5px;
            cursor: pointer;
            p {
              font-size: 0.9rem;
            }
            i {
              font-size: 15px;
            }
          }
        }
      }
      .box.center {
        height: 450px;
        margin: 0px 25px;
      }
    }
  }
}
</style>

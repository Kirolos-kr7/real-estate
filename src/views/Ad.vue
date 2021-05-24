<template>
  <div class="home">
    <div class="container">
      <div class="img-container-outer">
        <img class="main" src="../assets/appartment3.webp" alt="" />
        <div class="img-container-inner">
          <img src="../assets/appartment5.webp" alt="" />
          <img src="../assets/appartment1.webp" alt="" />
        </div>
      </div>
      <div class="data-container">
        <div class="left data-item">
          <h2>
            {{ Properties.city }},
            {{ Properties.location }}
            {{ Properties.type }} For
            {{ Properties.status }}
          </h2>
          <div class="flex-wrapper">
            <div class="items-row">
              <div class="item">
                <img src="../assets/building.svg" alt="" /> Property Type:
                <span>{{ Properties.type }}</span>
              </div>
              <div class="item">
                <img src="../assets/house-size.svg" alt="" /> Property Size:
                <span>{{ Properties.size }} sqm</span>
              </div>
            </div>
            <div class="items-row">
              <div class="item">
                <img src="../assets/beds.svg" alt="" /> Bedrooms Count:
                <span>{{ Properties.bedrooms }}</span>
              </div>
              <div class="item">
                <img src="../assets/bath.svg" alt="" /> Bathrooms Count:
                <span>{{ Properties.bathrooms }}</span>
              </div>
            </div>
          </div>
          <div class="description">
            <h3>Description</h3>
            <p>{{ Properties.description }}</p>
          </div>
          <div class="share">
            <h3>Like it ?! .. SAVE it OR SHARE it</h3>
            <div class="btn btn-outline save">
              <img src="../assets/heart.svg" alt="" /> Save for later
            </div>
            <br />
            <span>or</span><br />
            <div class="btn btn-outline facebook">
              <img src="../assets/facebook.svg" class="facebook" alt="" />
              Facebook
            </div>
            <div class="btn btn-outline twitter">
              <img src="../assets/twitter.svg" class="twitter" alt="" /> Twitter
            </div>
            <div class="btn btn-outline pinterest">
              <img src="../assets/pinterest.svg" class="pinterest" alt="" />
              Pinterest
            </div>
            <div class="btn btn-outline mail">
              <img src="../assets/email.svg" class="mail" alt="" /> EMail
            </div>
          </div>
        </div>
        <div class="right data-item">
          <h4>
            <div class="priceWithType">
              <div class="price" v-if="Properties.status == 'sell'">
                {{ Properties.price }}
              </div>
              <div class="price" v-else>
                {{ Properties.price }} <span>/ Month</span>
              </div>
            </div>
          </h4>
          <div class="btn-container">
            <a :href="Properties.phoneNum" class="btn btn-secondary">
              <img src="../assets/phone.svg" alt="" /> Call
            </a>
            <a :href="Properties.mailTo" class="btn btn-secondary">
              <img src="../assets/emailFly.svg" alt="" /> Mail
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import axios from "../../node_modules/axios/dist/axios";

export default {
  name: "Ad",
  data() {
    return {
      Properties: Object,
      targetId: -1
    };
  },
  components: {
    Footer
  },
  created() {
    let id = location.hash.slice(1, 99);
    if (id.toString().length <= 4) {
      id = location.hash[location.hash.length - 1];
      this.targetId = id;
    }
    axios
      .get("https://api.jsonbin.io/b/5f974d68076e516c36fbc533", {
        headers: {
          "secret-key":
            "$2b$10$WGQfVW2bAIcLnxO4y08qkuixN98oCN24Ru4tiBhMwniw4kcjO3UP2"
        }
      })
      .then(response => {
        this.Properties = response.data[this.targetId];
      })
      .catch(error => {
        throw error;
      });
    // else {
    //   location.assign(location.origin + "/404");
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.container {
  text-align: left;
  .img-container-outer {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: 65vh;
    margin-top: 25px;
    img.main {
      width: 60%;
      height: 100%;
      border: 3px solid #b8dbd9;
      border-right: 3px solid #fff;
    }
    .img-container-inner {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      width: 35%;
      height: 100%;
      img {
        width: 100%;
        height: 50%;
        border: 3px solid #b8dbd9;
        border-left: 3px solid #fff;
      }
      img:nth-of-type(1) {
        border-left: 3px solid #fff;
        border-bottom: 3px solid #fff;
      }
      img:nth-of-type(2) {
        border-top: 3px solid #fff;
        border-left: 3px solid #fff;
      }
    }
  }
  .data-container {
    display: flex;
    align-items: flex-start;
    .data-item {
      width: 50%;
    }
    padding: 10px 5px;
    h2 {
      font-weight: 600;
    }
    .flex-wrapper {
      display: flex;
      padding: 20px 0;
      border-bottom: 1px solid #e4e4e4;
      white-space: nowrap;
      .items-row {
        margin-right: 40px;
        .item {
          padding: 5px 0px;
          img {
            width: 25px;
            transform: translate(-3px, -3px);
          }
          span {
            padding: 15px;
            font-weight: 600;
          }
        }
      }
    }
    .description {
      padding: 20px 0;
      border-bottom: 1px solid #e4e4e4;
      h3 {
        font-weight: 600;
        font-size: 24px;
        margin-bottom: 20px;
      }
    }
    .share {
      padding: 20px 0;
      // border-bottom: 1px solid #e4e4e4;
      h3 {
        font-weight: 600;
        font-size: 24px;
        margin-bottom: 20px;
      }
      .btn {
        margin: 5px;
        img {
          width: 15px;
          transform: translate(-1px, -2px);
        }
        &:hover {
          background-color: #e4e4e4;
        }
      }
      .save {
        color: #f44336;
        border-color: #f44336;
      }
      .facebook {
        color: #3b5999;
        border-color: #3b5999;
      }
      .twitter {
        color: #55acee;
        border-color: #55acee;
      }
      .pinterest {
        color: #f44336;
        border-color: #f44336;
      }
      .mail {
        color: #1e88e5;
        border-color: #1e88e5;
      }
      span {
        margin: 20px;
      }
    }
    .right {
      text-align: center;
      padding: 15px;
      border: 2px dashed #e4e4e4;
      margin: 5px 30px;
      position: sticky;
      top: 80px;
      h4 {
        font-weight: 600;
        .priceWithType .price {
          font-size: 40px;
          span {
            font-size: 25px;
          }
        }
      }
      .btn-container {
        .btn {
          padding: 5px 35px;
          font-size: 20px;
          margin: 20px;
          img {
            width: 25px;
            transform: translate(-1px, -2px);
            filter: invert(1);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .container .data-container .right .btn-container .btn {
    padding: 5px 15px;
    margin: 10px;
  }
  .container .data-container .flex-wrapper {
    display: block;
  }
}

@media only screen and (max-width: 768px) {
  .container .data-container {
    display: block;
  }
  .left,
  .right {
    width: 100% !important;
    margin: 0 auto !important;
  }
  .container .img-container-outer {
    flex-direction: column;
    width: 100%;
    height: auto;
    margin-top: 25px;
    img.main {
      width: 100%;
      border: 3px solid #fff;
    }
    .img-container-inner {
      width: 100%;
      display: flex;
      flex-direction: row;
      img {
        border: 3px solid #fff;
        width: 50%;
      }
    }
  }
}
</style>

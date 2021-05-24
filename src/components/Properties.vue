<template>
  <div class="Properties">
    <h1>
      <div
        class="type"
        v-if="Properties.length > 0 && Properties[0].item.status == 'sell'"
      >
        Places For Sale
        <span>[{{ Properties.length }}]</span>
      </div>
      <div
        class="type"
        v-else-if="Properties.length > 0 && Properties[0].item.status == 'rent'"
      >
        Places For Rent
        <span>[{{ Properties.length }}]</span>
      </div>
    </h1>
    <div class="item-container row container">
      <div
        class="item-wrapper col-lg-4 col-md-6 col-sm-12"
        v-for="Property in Properties"
        v-bind:key="Property.id"
      >
        <div class="item">
          <img src="../assets/spinner.jpg" alt="spinner" class="spinner" />
          <img
            :src="src[Property.item.id]"
            alt="itemPic"
            class="itemPic hidden"
            @load="onImgLoad"
          />
          <h2>
            <a href="/ad" @click.prevent="passId" :order="Property.item.id"
              >{{ Property.item.city }},
              {{ Property.item.location }}
            </a>
          </h2>
          <p>{{ snippitShort(Property.item.description) }}</p>
          <span class="type">{{ Property.item.type }}</span>
          <span class="numbers"
            >{{ Property.item.bedrooms }}
            <img src="../assets/beds.svg" alt="Bed" class="icon"
          /></span>
          &nbsp;
          <span class="numbers"
            >{{ Property.item.bathrooms }}
            <img src="../assets/bath.svg" alt="Bath" class="icon"
          /></span>
          <div class="priceWithType">
            <div class="price" v-if="Property.item.status == 'sell'">
              {{ Property.item.price }}
            </div>
            <div class="price" v-else>{{ Property.item.price }} / Month</div>
          </div>

          <div class="btn-container">
            <div class="btn btn-outline-secondary">
              <img src="../assets/phone-call.svg" alt="phone" /><a
                :href="Property.item.phoneNum"
                >CALL</a
              >
            </div>
            <div class="btn btn-outline-primary">
              <img src="../assets/email.svg" alt="email" /><a
                :href="Property.item.mailTo"
                >EMAIL</a
              >
            </div>
            <div class="btn btn-outline-danger" @click="showNotification()">
              <img src="../assets/heart.svg" alt="heart" />SAVE
            </div>
          </div>
        </div>
      </div>
      <div class="saved" @click="addToFav">
        <img src="../assets/heart.svg" alt="" />
        <p>Added To Saved</p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
$;
export default {
  name: "Properties",
  data() {
    return {
      src: [
        require("../assets/appartment1.webp"),
        require("../assets/appartment2.webp"),
        require("../assets/appartment3.webp"),
        require("../assets/appartment4.webp"),
        require("../assets/appartment5.webp"),
        require("../assets/appartment6.webp"),
        require("../assets/appartment7.webp"),
        require("../assets/appartment8.webp"),
        require("../assets/appartment9.webp")
      ]
    };
  },
  props: {
    Properties: Array
  },
  methods: {
    onImgLoad() {
      for (
        let i = 0;
        i < document.getElementsByClassName("itemPic").length;
        i++
      ) {
        document
          .getElementsByClassName("itemPic")
          [i].classList.remove("hidden");
        document.getElementsByClassName("spinner")[i].style.display = "none";
      }
    },
    showNotification() {
      $(".saved")
        .fadeIn(300)
        .delay(2000)
        .queue(function() {
          $(".saved")
            .fadeOut(100)
            .dequeue();
        });
    },
    snippitShort(val) {
      return val.slice(0, 80) + "...";
    },
    passId(e) {
      window.location.href = "/ad#" + 210 + e.target.getAttribute("order");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
h1 {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 40px !important;
  font-weight: 900 !important;
  background-image: linear-gradient(to right, $secondaryColor 100%, #fff 0);
  background-repeat: repeat-x;
  background-size: 100% 20%;
  background-position: 100% 97%;
  .type {
    display: inline;
  }
  span {
    font-weight: 400;
  }
}

.item-container {
  min-height: 100vh;
  padding: 20px 0;
  margin: 0 auto;
  .item-wrapper {
    text-align: center;
    .item {
      margin: 10px;
      padding: 10px 0;
      border: 1px solid #232323;
      border-radius: 5px;
      overflow: hidden;
      .spinner {
        width: 100%;
      }
      h2 {
        font-weight: 600;
        position: relative;
        margin-top: 15px;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          border-top: 2px dashed #232323;
        }
        a {
          cursor: pointer;
          color: #2f4550;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
            color: #2f4550;
          }
        }
      }
      p {
        margin-bottom: 5px;
        padding: 3px;
      }
      .itemPic {
        display: block;
        width: 100%;
        margin: -10px auto;
      }
      .type {
        background: #b8dbd9;
        padding: 2px 6px;
        font-weight: 600;
        margin: 0 10px;
      }
      .icon {
        width: 25px;
        transform: translateY(-3px);
      }
      .numbers {
        font-family: "Lato";
      }
      .price {
        font-family: "Lato";
        font-size: 22px;
        background: #b8dbd9;
        text-shadow: 3px 3px 1px #bfbfbf;
        margin: 10px 0;
      }
      .btn-container {
        display: flex;
        justify-content: space-evenly;
        img {
          width: 15px;
          transform: translate(-3px, -2px);
        }
        .btn {
          a {
            color: #6c757d;
            text-decoration: none;
          }
          &:hover a {
            color: #fff;
          }
        }
      }
    }
  }
}
.saved {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #2f4550;
  padding: 15px 20px;
  border-radius: 2rem;
  box-shadow: 3px 3px 9px #00000054;
  img {
    width: 20px;
    margin-right: 6px;
    transform: translateY(-1px);
  }
  p {
    display: inline-block;
    margin-bottom: 0;
    color: #fff;
  }
}
.hidden {
  display: none !important;
}

@media only screen and (max-width: 400px) {
  h1 {
    font-size: 32px !important;
    margin-top: 0;
  }
  .item-container .item-wrapper .item h2 a {
    font-size: 26px;
  }
}
</style>

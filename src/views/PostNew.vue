<template>
  <div class="postNew">
    <h1>New Posting</h1>
    <form class="form">
      <input type="text" class="formElement city" placeholder="City" />
      <input
        type="text"
        class="formElement district"
        placeholder="District"
      /><select class="formElement" name="propertyType" id="propertyType">
        <option value="Appartment">Appartment</option>
        <option value="Town House">Town House</option>
        <option value="Duplex">Duplex</option>
        <option value="Villa">Villa</option>
      </select>
      <input
        type="number"
        class="formElement size"
        min="1"
        placeholder="Property Size in SQM"
      /><input
        type="number"
        class="formElement bedRoomsCount"
        min="1"
        placeholder="Property Bedrooms Count"
      /><input
        type="number"
        class="formElement bathRoomsCount"
        min="1"
        placeholder="Property Bathrooms Count"
      />
      <select
        class="formElement"
        name="sellOrRent"
        id="sellOrRent"
        ref="sellOrRent"
        @change="sellOrRentChg"
      >
        <option value="Sell">Sell</option>
        <option value="Rent">Rent</option>
      </select>
      <input
        type="number"
        class="formElement price"
        min="1"
        ref="price"
        placeholder="Price In EGP"
      />
      <input type="tel" class="formElement phone" name="" id="phone" />
      <input
        type="file"
        class="formElement fileImport"
        placeholder="Upload Images"
        multiple
      />
      <textarea
        class="formElementTA"
        cols="30"
        rows="10"
        placeholder="Description"
      ></textarea>
      <div class="err">
        <img src="../assets/attention.svg" alt="" />Fix errors then resubmit
      </div>
      <div class="btn-container">
        <input
          type="submit"
          @click.prevent="validate"
          class="btn"
          value="Submit"
        />
      </div>
    </form>
  </div>
</template>

<script>
import intlTelInput from "intl-tel-input";
import $ from "jquery";
$;
export default {
  name: "postNew",
  methods: {
    sellOrRentChg() {
      if (this.$refs.sellOrRent.value == "Rent") {
        this.$refs.price.placeholder = "Price Per Month In EGP";
      } else {
        this.$refs.price.placeholder = "Price In EGP";
      }
    },
    resize() {
      const input = document.querySelector("#phone");
      const scaleWidthGetter = document.querySelector(".fileImport");
      input.style.width = scaleWidthGetter.clientWidth + "px";
    },
    validate() {
      let letters = /^[A-Za-z]+$/;
      let numbers = /^[0-9]+$/;
      const ltrS = function(className) {
        if (
          $("." + className)
            .val()
            .match(letters)
        ) {
          $("." + className).css("border", "1px solid #ccc");
          $(".err").hide();
        } else {
          $("." + className).css("border", "2px solid #f00");
          $(".err").show();
        }
      };
      ltrS("city");
      ltrS("district");

      const numS = function(className) {
        if (
          $("." + className)
            .val()
            .match(numbers)
        ) {
          $("." + className).css("border", "1px solid #ccc");
        } else {
          $("." + className).css("border", "2px solid #f00");
        }
      };
      numS("size");
      numS("bedRoomsCount");
      numS("bathRoomsCount");
      numS("price");
    }
  },
  mounted() {
    const input = document.querySelector("#phone");
    intlTelInput(input, {
      separateDialCode: true,
      preferredCountries: ["eg", "us"]
    });
    this.resize();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
@import "../../node_modules/intl-tel-input/build/css/intlTelInput.css";

.iti__flag {
  background-image: url("../../node_modules/intl-tel-input/build/img/flags.png");
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .iti__flag {
    background-image: url("../../node_modules/intl-tel-input/build/img/flags@2x.png");
  }
}

h1 {
  display: inline-block;
  padding-top: 25px;
  padding-bottom: 0;
  margin-bottom: 0 !important;
  z-index: 2;
  font-size: 40px !important;
  font-weight: 900 !important;
  background-image: linear-gradient(to right, $secondaryColor 100%, #fff 0);
  background-repeat: repeat-x;
  background-size: 100% 20%;
  background-position: 100% 97%;
}
form {
  background: #e4e4e4;
  border: 1px solid #b8dbd9;
  border-radius: 15px;
  padding: 30px;
  max-width: 800px;
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .formElement,
  .formElementTA {
    display: block;
    width: 45%;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 10px 0px;
  }
  .formElement {
    height: 47px;
  }
  .formElementTA {
    width: 95%;
  }
  .err {
    width: 95%;
    display: block;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 10px 0px;
    text-align: left;
    display: flex;
    align-items: center;
    background: #00ff3d61;
    display: none;
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }
  .btn-container {
    width: 100%;
    input {
      padding: 10px 15px;
      background: #333;
      border: 1px solid #333;
      color: #fff;
      transition: 0.2s all ease-in-out;
      &:hover {
        background: #222;
        border: 1px solid #222;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .formElement,
  .formElementTA {
    width: 100% !important;
  }
  form {
    margin: 50px 10px;
  }
}
</style>

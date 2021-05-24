<template>
  <div class="Sale">
    <div class="filters-container">
      <h3>Filters</h3>
      <div class="price-container filter-item">
        <h5>Price Range</h5>
        <br />
        <div class="slider-container">
          <span id="starter">1500</span>
          <div id="slider" class="slider"></div>
          <span id="finisher">4500</span>
        </div>
      </div>
      <div class="ratings-container filter-item">
        <h5>Ratings</h5>
        <br />
        <input type="checkbox" name="" id="5Stars" /><label for="5Stars">
          <span class="fa fa-star checked"></span
          ><span class="fa fa-star checked"></span
          ><span class="fa fa-star checked"></span
          ><span class="fa fa-star checked"></span
          ><span class="fa fa-star checked"></span
        ></label>
        <br />
        <input type="checkbox" name="" id="4Stars" /><label for="4Stars">
          <span class="fa fa-star checked"></span
          ><span class="fa fa-star checked"></span
          ><span class="fa fa-star checked"></span
          ><span class="fa fa-star checked"></span
          ><span class="fa fa-star"></span
        ></label>
        <br />
        <input type="checkbox" name="" id="3Stars" /><label for="3Stars">
          <span class="fa fa-star checked"></span
          ><span class="fa fa-star checked"></span
          ><span class="fa fa-star checked"></span
          ><span class="fa fa-star"></span><span class="fa fa-star"></span
        ></label>
        <br />
        <input type="checkbox" name="" id="2Stars" /><label for="2Stars">
          <span class="fa fa-star checked"></span
          ><span class="fa fa-star checked"></span
          ><span class="fa fa-star "></span><span class="fa fa-star "></span
          ><span class="fa fa-star "></span
        ></label>
        <br />
        <input type="checkbox" name="" id="1Star" /><label for="1Star">
          <span class="fa fa-star checked"></span
          ><span class="fa fa-star "></span><span class="fa fa-star "></span
          ><span class="fa fa-star "></span><span class="fa fa-star "></span
        ></label>
        <br />
      </div>
    </div>
    <div class="filter-btn" @click="filterToggle">
      <img src="../assets/filter.svg" alt="" />
    </div>
    <Properites :Properties="saleProperties" />
  </div>
  <Footer />
</template>

<script>
import Fuse from "fuse.js";
import Footer from "../components/Footer";
import axios from "../../node_modules/axios/dist/axios";
import Properites from "../components/Properties";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import $ from "jquery";
$;
export default {
  name: "Sale",
  components: { Footer, Properites },
  data() {
    return {
      saleProperties: [],
      options: {
        threshold: 0.0,
        keys: ["status"]
      }
    };
  },
  methods: {
    filterToggle() {
      $(".filters-container").toggleClass("toggeldFilters");
      $(".filter-btn").toggleClass("toggeldBtn");
    }
  },
  mounted() {
    axios
      .get("https://api.jsonbin.io/b/5f974d68076e516c36fbc533", {
        headers: {
          "secret-key":
            "$2b$10$WGQfVW2bAIcLnxO4y08qkuixN98oCN24Ru4tiBhMwniw4kcjO3UP2"
        }
      })
      .then(response => {
        this.saleProperties = response.data;
        const fuse = new Fuse(this.saleProperties, this.options);
        this.saleProperties = fuse.search("sell");
      })
      .catch(error => {
        throw error;
      });
    $(".saved").hide(0);
    var slider = document.getElementById("slider");
    noUiSlider.create(slider, {
      start: [3000, 12000],
      connect: true,
      range: {
        min: 0,
        max: 15000
      }
    });
    var Values = [
      document.getElementById("starter"),
      document.getElementById("finisher")
    ];
    slider.noUiSlider.on("update", function(values, handle) {
      Values[handle].innerHTML = values[handle].split(".")[0];
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.filters-container {
  background: #b8dbd9;
  text-align: left;
  padding: 20px;
  height: 100vh;
  position: fixed;
  z-index: 9;
  width: 0px;
  top: 0;
  left: -41px;
  padding-top: 100px;
  overflow: hidden;
  transition: 0.3s all ease-in-out;
  border-right: 1px solid #ccc;
  h3 {
    font-weight: 900;
  }
  .filter-item {
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
    h5 {
      display: inline-block;
      background-image: linear-gradient(to right, #d5ff84 100%, #fff 0);
      background-repeat: repeat-x;
      background-size: 100% 20%;
      background-position: 100% 97%;
    }
  }
  .slider-container {
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    .slider {
      width: 50%;
      transform: translateY(5px);
    }
    span {
      font-weight: bold;
    }
  }
  .ratings-container {
    label {
      margin-bottom: 0;
      cursor: pointer;
      span {
        padding: 0 2px;
        transform: translate(2px, -1px);
      }
      .checked {
        color: #d5ff84;
      }
    }
  }
}
.filter-btn {
  width: 40px;
  padding: 5px;
  background: #e4e4e4;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  z-index: 9;
  position: fixed;
  transform: translateY(50px);
}

.toggeldFilters {
  width: 300px;
  left: 0;
}

.toggeldBtn {
  margin-left: 300px;
}

@media only screen and (max-width: 600px) {
  .toggeldFilters {
    width: 200px;
  }
  .toggeldBtn {
    margin-left: 200px;
  }
  .filters-container .slider-container {
    flex-direction: column;
    align-items: center;
    .slider {
      width: 100%;
    }
    #finisher {
      margin-top: 10px;
    }
  }
}
</style>

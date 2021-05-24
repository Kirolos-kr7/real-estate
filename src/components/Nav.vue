<template>
  <nav>
    <div class="nav">
      <div class="upperNav">
        <div class="flex-item">
          <span>Tel:&nbsp;</span>
          <a href="tel:01200468325">506-6620-250</a>
        </div>
        <div class="flex-item">
          <span>Address:&nbsp;</span>
          <a
            href="https://www.google.com/maps/place/24+Main+St,+Blackrock,+Co.+Dublin,+A94+K8R9,+Ireland/@53.3013735,-6.1793555,17z/data=!3m1!4b1!4m5!3m4!1s0x486708c72bf13d31:0xc9bf2aa429a6fed!8m2!3d53.3013703!4d-6.1771668"
            target="_blank"
            >24 Main Street</a
          >
        </div>
      </div>
      <div class="lowerNav">
        <router-link to="/" class="logo"
          ><img src="../assets/logo.svg" alt="Logo" />
          <h2>PRMD Real Estate</h2></router-link
        >
        <ul class="main">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/sale">For Sale</router-link></li>
          <li><router-link to="/rent">For Rent</router-link></li>
          <li><router-link to="/postNew">Post A Listing</router-link></li>
          <Registration />
        </ul>
        <div class="menu">
          <div class="btn" @click="dropdownToggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="dropdown">
          <ul>
            <li>
              <router-link @click="dropdownHide" to="/">Home</router-link>
            </li>
            <div class="dropdown-divider"></div>
            <li>
              <router-link @click="dropdownHide" to="/sale"
                >For Sale</router-link
              >
            </li>
            <div class="dropdown-divider"></div>
            <li>
              <router-link @click="dropdownHide" to="/rent"
                >For Rent</router-link
              >
            </li>
            <div class="dropdown-divider"></div>
            <li>
              <router-link @click="dropdownHide" to="/postNew"
                >Post A Listing</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="lowerLowerNav"></div>
    </div>
  </nav>
</template>

<script>
import Registration from "../components/Registration";
import $ from "jquery";
$;
export default {
  components: {
    Registration,
  },
  methods: {
    dropdownToggle() {
      $(".dropdown").slideToggle(300);
    },
    dropdownHide() {
      $(".dropdown").hide(300);
    },
  },
  mounted() {
    window.onscroll = function () {
      if (window.scrollY >= 90) {
        $(".lowerNav").css("borderBottom", "1px solid #ccc");
        $(".upperNav").slideUp();
        $(".lowerLowerNav").slideDown();
      } else {
        $(".lowerNav").css("borderBottom", "1px solid #fff");
        $(".upperNav").slideDown();
        $(".lowerLowerNav").slideUp();
      }
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/style.scss";
nav {
  position: sticky;
  top: 0;
  z-index: 99;

  .nav {
    position: relative;
    a.logo {
      position: absolute;
      top: 0;
      left: 20px;
      background: #fff;
      border: 1px solid #eee;
      padding: 8px 10px 5px;
      height: 90px;
      transition: 0.4s all ease-in-out;
      img {
        width: 120px;
        display: block;
        margin: 0 auto;
      }
      h2 {
        font-size: 15px;
        font-weight: 900;
        transform: translateY(-15px);
      }
    }
  }
  .upperNav {
    width: 100%;
    height: 25px;
    background-color: #2f4550;
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px 50px;
    .flex-item {
      padding: 0 30px;
      a {
        font-family: sans-serif;
        color: #fff;
      }
    }
  }
  .lowerNav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    height: 64px;
    background: #fff;
    border-bottom: 1px solid #fff;

    ul.main {
      margin: 0;
      padding: 10px 0;
      list-style: none;
      display: inline-flex;
      line-height: 35px;
      li {
        display: inline-block;
        padding: 0 30px;
        font-weight: bold;
      }
    }
    a {
      color: #2c3e50;
      text-decoration: none;
      &.router-link-exact-active {
        color: $primaryColor;
      }
    }
    .menu {
      display: none;
      transform: translateX(10px);
      .btn {
        background-color: #e4e4e4;
        span {
          display: block;
          width: 20px;
          height: 2px;
          background: #000;
          margin: 5px 0;
        }
        span:nth-of-type(3) {
          width: 15px;
          margin-left: auto;
        }
      }
    }
    .dropdown {
      display: none;
      position: absolute;
      top: 63px;
      left: 0;
      z-index: 9;
      overflow: hidden;
      ul {
        background: #fff;
        border-bottom: 1px solid #e4e4e4;
        margin: 0;
        padding: 0;
        left: 0;
        width: 100vw;
        display: grid;
        padding: 10px 0;
        list-style: none;
        li {
          padding: 10px 0;
          font-weight: 600;
        }
      }
    }
  }
  .lowerLowerNav {
    width: 100%;
    height: 25px;
    display: none;
    pointer-events: none;
  }
}

@media only screen and (max-width: 750px) {
  nav a {
    white-space: nowrap;
  }
  nav ul a {
    padding: 0 15px;
  }
}

@media only screen and (max-width: 780px) {
  ul.main,
  .upperNav {
    display: none !important;
  }
  .menu {
    display: block !important;
  }
  a.logo {
    height: 70px !important;
    img {
      width: 90px !important;
    }
    h2 {
      font-size: 14px !important;
    }
  }
}

.hide {
  display: none;
}
</style>

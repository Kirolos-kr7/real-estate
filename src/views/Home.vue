<template>
  <div class="home">
    <h1>Let's Find Your Next Home</h1>
    <form @submit.prevent>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          @focus="
            focusOn();
            searchResultVisibility = true;
          "
          @blur="
            focusOff();
            searchResultVisibility = false;
          "
          @keydown.esc="
            focusOff();
            searchResultVisibility = false;
          "
          @input="
            search();
            emptyChk();
            searchResultVisibility = true;
          "
          @keyup="selector"
          @keydown.up.prevent="upSearchRes"
          @keydown.down.prevent="downSearchRes"
          name="s"
          id="whereTo"
          ref="input"
          v-model="inputField"
        />
        <span id="upwego" ref="upWeGo">Where To</span>
      </div>
      <div
        class="result-container"
        v-if="inputField != '' && searchResultVisibility"
        ref="resultContainer"
      >
        <div
          class="search-item"
          @mouseenter="hoverIn"
          v-for="(res, id) in fuseResult"
          :key="id"
          @mousedown.prevent="searchResultVisibility = true"
        >
          <h3>
            <a href="/ad" @click.prevent="passId" class="anchorLink"
              >{{ res.item.city }}, {{ res.item.location }}</a
            >
          </h3>
          <div class="p-container">
            <p :order="res.item.id">
              {{ shortenDesc(res.item.description) }}
            </p>
            <a @click="lmClicked">more</a>
          </div>
        </div>
        <div class="no-res" v-if="noResState" ref="noRes">
          <b>No Results For {{ '"' + inputField + '"' }}</b>
        </div>
      </div>
      <div id="err"></div>
    </form>
    <div class="img-container">
      <img src="../assets/homeBackground.svg" alt />
    </div>
    <div class="birds-container">
      <div class="bird one">
        <img src="../assets/giphy.gif" alt="Bird" />
      </div>
      <div class="bird two">
        <img src="../assets/giphy.gif" alt="Bird" />
      </div>
      <div class="bird three">
        <img src="../assets/giphy.gif" alt="Bird" />
      </div>
      <div class="bird four">
        <img src="../assets/giphy.gif" alt="Bird" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../node_modules/axios/dist/axios";
import Fuse from "fuse.js";
export default {
  name: "Home",
  data() {
    return {
      inputField: "",
      searchResIndex: 0,
      properties: JSON,
      fuseResult: "",
      searchResultVisibility: false,
      options: {
        includeScore: true,
        includeMatches: true,
        threshold: 0.3,
        keys: ["city", "location"]
      },
      noResState: false
    };
  },
  methods: {
    focusOn() {
      let placeholder = this.$refs.upWeGo;
      placeholder.style.top = "-7px";
      placeholder.style.transform = "translateX(-315%)";
      placeholder.style.fontSize = "12px";
    },
    focusOff() {
      let placeholder = this.$refs.upWeGo;
      if (this.inputField == "") {
        placeholder.style.top = "22px";
        placeholder.style.transform = "translateX(-235%)";
        placeholder.style.fontSize = "16px";
      }
    },
    emptyChk() {
      if (this.fuseResult.length > 0) {
        this.noResState = false;
      } else {
        this.noResState = true;
      }
      if (this.inputField == "") {
        this.noResState = false;
      }
    },
    search() {
      const fuse = new Fuse(this.properties, this.options);
      this.fuseResult = fuse.search(this.inputField);
      this.searchResIndex = 0;
    },
    selector() {
      if (this.fuseResult.length > 0) {
        this.$refs.resultContainer.children.forEach(child => {
          child.style.background = "#fff";
        });
        this.$refs.resultContainer.children[
          this.searchResIndex
        ].style.background = "#eee";
        this.$refs.resultContainer.children[this.searchResIndex].scrollIntoView(
          {
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          }
        );
      }
    },
    hoverIn(e) {
      this.$refs.resultContainer.children.forEach(child => {
        child.style.background = "#fff";
      });
      e.target.style.background = "#eee";
    },
    upSearchRes() {
      if (this.searchResIndex > 0) {
        this.searchResIndex--;
      }
    },
    downSearchRes() {
      if (
        this.searchResIndex <
        this.$refs.resultContainer.children.length - 1
      ) {
        this.searchResIndex++;
      }
    },
    shortenDesc(chars) {
      if (chars.length > 60) {
        return chars.slice(0, 60) + "...";
      } else {
        return chars;
      }
    },
    lmClicked(e) {
      if (
        e.target.parentElement.parentElement.children[1].children[1]
          .textContent == "more"
      ) {
        e.target.parentElement.parentElement.children[1].children[0].textContent = this.properties[
          e.target.parentElement.parentElement.children[1].children[0].getAttribute(
            "order"
          )
        ].description;
        e.target.parentElement.parentElement.children[1].children[1].textContent =
          "less";
      } else if (
        e.target.parentElement.parentElement.children[1].children[1]
          .textContent == "less"
      ) {
        e.target.parentElement.parentElement.children[1].children[0].textContent = this.shortenDesc(
          this.properties[
            e.target.parentElement.parentElement.children[1].children[0].getAttribute(
              "order"
            )
          ].description
        );
        e.target.parentElement.parentElement.children[1].children[1].textContent =
          "more";
      }
    },
    passId(e) {
      window.location.href =
        "/ad#" +
        210 +
        e.target.parentElement.parentElement.children[1].children[0].getAttribute(
          "order"
        );
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
        this.properties = response.data;
      })
      .catch(error => {
        throw error;
      });
    let placeholder = this.$refs.upWeGo;
    if (this.inputField == "") {
      placeholder.style.top = "22px";
      placeholder.style.transform = "translateX(-200%)";
      placeholder.style.fontSize = "16px";
    }
    let input = document.getElementById("whereTo");
    input.focus();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
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
  width: 350px;
  margin: 0 auto;
  position: relative;
  .form-group {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 15px 0 0;
    outline: 0;
    margin: 1rem 0 0;
    z-index: 2;
    input {
      width: 350px;
      justify-content: center;
      border-bottom-right-radius: 0;
      border-top-left-radius: 0;
    }
    span {
      position: absolute;
      left: 50%;
      top: 22px;
      transform: translateX(-220%);
      pointer-events: none;
      transition: 0.2s top ease-in-out;
    }
  }
  .result-container {
    border: 1px solid #ccc;
    border-top-left-radius: 0.25rem;
    width: 100%;
    text-align: left;
    position: absolute;
    z-index: 3;
    background: #fff;
    overflow: auto;
    max-height: 50vh;
    display: block;
    .search-item {
      border-bottom: 1px solid #ccc;
      padding: 15px 15px 15px 15px;
      h3 {
        font-size: 24px;
        font-weight: 600;
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
        margin-bottom: 0.5rem;
      }
      a {
        cursor: pointer;
        color: #007bff;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
          color: #0056b3;
        }
      }
    }
    .no-res {
      padding: 5px 15px;
    }
  }
}
#err {
  color: red;
  transform: translateY(-20px);
  overflow: hidden;
  &::before {
    content: "!";
    border-radius: 50%;
    border: 1px solid #f00;
    width: 18px;
    height: 18px;
    font-size: 12px;
    position: absolute;
    transform: translate(-23px, 3px);
    padding: 0px 0 0 1px;
  }
}
.img-container {
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  transform: translate(-50%, -50%);
  pointer-events: none;
  filter: hue-rotate(175deg);
  img {
    width: 2000px;
  }
}
.birds-container {
  overflow: hidden;
  position: relative;
  height: 50vh;
  .bird {
    position: absolute;
    left: -5%;
    filter: invert(1);
    transform: translate(-50%, -50%);
    animation-name: fly;
    animation-iteration-count: infinite;
    z-index: 1;
    animation-timing-function: linear;
  }

  .bird.one {
    top: 50%;
    animation-duration: 12s;

    img {
      width: 40px;
    }
  }

  .bird.two {
    top: 40%;
    animation-duration: 15s;
    animation-delay: 2s;
    img {
      width: 50px;
    }
  }

  .bird.three {
    top: 60%;
    animation-duration: 13s;
    animation-delay: 5s;
    img {
      width: 15px;
    }
  }

  .bird.four {
    top: 30%;
    animation-duration: 9s;
    animation-delay: 0s;
    transform: translate(-50%, -50%) scaleX(-1);
    animation-direction: reverse;
    img {
      width: 25px;
    }
  }
}

@keyframes fly {
  0% {
    left: -10%;
  }
  100% {
    left: 110%;
  }
}

@media only screen and (max-width: 500px) {
  h1 {
    font-size: 30px !important;
  }
  .bird.one {
    animation-duration: 6s !important;
  }

  .bird.two {
    animation-duration: 7s !important;
  }

  .bird.three {
    animation-duration: 8s !important;
  }

  .bird.four {
    animation-duration: 4s !important;
  }
}

@media only screen and (max-width: 320px) {
  h1 {
    font-size: 25px !important;
  }
  form {
    width: 300px;
    .form-group span {
      left: 60%;
    }
  }
}
</style>

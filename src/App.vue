<template>
  <div class="main-loader" v-if="!isLoaded">
    <img src="./assets/oh_loader.gif" alt="spinner" class="spinner" />
  </div>
  <Nav />
  <!-- <transition
    name="router-animation"
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  > -->
  <router-view />
  <!-- </transition> -->
</template>

<script>
import Nav from "./components/Nav";
export default {
  data() {
    return {
      isLoaded: false
    };
  },
  components: { Nav },
  mounted() {
    document.onreadystatechange = () => {
      if (
        document.readyState == "complete"
          ? (this.isLoaded = true)
          : (this.isLoaded = false)
      );
    };
  }
};
</script>

<style lang="scss">
@import "../node_modules/animate.css/animate.min.css";
#app {
  font-family: "sofia-pro";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2f4550;
  background: #fff;
  min-height: 100vh;
  overflow: hidden;
}

$primaryColor: #069aac;
$secondaryColor: #b8dbd9;

.form-control:focus,
.btn-primary:focus {
  box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.25) !important;
}

::-webkit-scrollbar {
  background-color: #fff;
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #2f4550;
}

.main-loader {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 99999999999;
  pointer-events: none;
}
</style>

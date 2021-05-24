<template>
  <div class="NF">
    <div class="container">
      <div class="wrapper">
        <h1>404</h1>
        <p>The location you requested was not found</p>
        <div class="btn btn-outline-info" @click="redirect">
          Redirect To Homepage
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NF",
  methods: {
    redirect() {
      window.location.assign(location.origin);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  h1 {
    font-size: 250px;
    text-shadow: 9px 9px 1px #e4e4e4;
    margin: 0;
  }
}
</style>

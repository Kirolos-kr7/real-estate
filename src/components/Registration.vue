<template>
  <div class="registration">
    <li>
      <div class="btn btn-danger" @click="openReg">Log in</div>
    </li>
    <div class="form-container">
      <form class="form">
        <div class="logIn">
          <div class="flex-row">
            <h3>Log in</h3>
            <div class="closeReg" @click="closeReg">X</div>
          </div>
          <input type="text" placeholder="Username" class="formElement" />
          <input type="password" placeholder="Password" class="formElement" />
          <a href="" @click.prevent="forgotPassword">Forgot Password ?</a> or
          <a href="" @click.prevent="signUp">First Time ? (Sign up)</a> <br />
          <div class="btn btn-outline-secondary">LOG IN</div>
        </div>
        <div class="signUp">
          <div class="flex-row">
            <h3>Sign up</h3>
            <div class="closeReg" @click="closeReg">X</div>
          </div>
          <input type="text" placeholder="Username" class="formElement" />
          <input type="tel" placeholder="Mobile Number" class="formElement" />
          <input type="email" placeholder="E-mail" class="formElement" />
          <input type="password" placeholder="Password" class="formElement" />
          <input
            type="password"
            placeholder="Rewrite Password"
            class="formElement"
          />
          <select name="" id="" class="formElement"
            ><option value="Sell">Byer</option>
            <option value="Rent">Seller</option></select
          >
          <a href="" @click.prevent="logIn">Signed Before ? (Log in)</a> <br />
          <div class="btn btn-outline-secondary">SIGN UP</div>
        </div>
        <div class="forgotPassword">
          <div class="flex-row">
            <h3>Forgot Password</h3>
            <div class="closeReg" @click="closeReg">X</div>
          </div>
          <h6>Please enter the mobile number you signed in with.</h6>
          <input
            type="tel"
            placeholder="Mobile Number"
            id="tel"
            class="formElement"
          />
          <input
            type="text"
            maxlength="4"
            placeholder="Enter Given Code"
            id="code"
            class="formElement"
            disabled
          />
          <input
            type="password"
            placeholder="New Password"
            class="formElement pw"
            hidden
          /><input
            type="password"
            placeholder="Rewrite New Password"
            class="formElement pw"
            hidden
          />
          <a href="" @click.prevent="logIn">Remembered Password ? (Log in)</a>
          <br />
          <div class="btn btn-outline-secondary" @click.prevent="codeSent">
            Send Code
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
$;
export default {
  methods: {
    openReg() {
      $(".form-container").fadeIn(1000);
      $(".form").fadeIn(200);
      $(".logIn").fadeIn(200);
    },
    closeReg() {
      $(".form").fadeOut(200);
      $(".form-container").fadeOut(1000);
      $(".signUp").fadeOut(1000);
      $(".forgotPassword").fadeOut(1000);
      $(".forgotPassword .btn").text("Send Code");
      $("#tel").removeAttr("disabled");
      $("#code").attr("disabled", "disabled");
      $(".pw").attr("hidden", "hidden");
    },
    logIn() {
      $(".logIn").fadeIn(0);
      $(".signUp").fadeOut(0);
      $(".forgotPassword").fadeOut(0);
      $(".forgotPassword .btn").text("Send Code");
      $("#tel").removeAttr("disabled");
      $("#code").attr("disabled", "disabled");
      $(".pw").attr("hidden", "hidden");
    },
    signUp() {
      $(".signUp").fadeIn(0);
      $(".logIn").fadeOut(0);
      $(".forgotPassword").fadeOut(0);
    },
    forgotPassword() {
      $(".forgotPassword").fadeIn(0);
      $(".logIn").fadeOut(0);
      $(".signUp").fadeOut(0);
    },
    codeSent() {
      if ($(".forgotPassword .btn").html() === "Send Code") {
        $(".forgotPassword .btn").text("Recover Password");
        $("#tel").attr("disabled", "disabled");
        $("#code").removeAttr("disabled");
      } else if ($(".forgotPassword .btn").html() === "Recover Password") {
        $("#code").attr("disabled", "disabled");
        $(".pw").removeAttr("hidden");
        $(".forgotPassword .btn").text("LOG IN");
      }
    }
  },
  mounted() {
    $(".form-container").hide();
    $(".signUp").hide();
    $(".forgotPassword").hide();
    $(".forgotPassword .btn").text("Send Code");
  }
};
</script>

<style scoped lang="scss">
@import "../assets/style.scss";
.form-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #0000008f;
  display: flex;
  justify-content: center;
  align-items: center;
  .flex-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-weight: 900;
    }
    .closeReg {
      width: 35px;
      height: 35px;
      background: #ccc;
      line-height: 35px;
      border-radius: 5px;
      font-weight: 900;
      cursor: pointer;
    }
  }

  form {
    background: #e4e4e4;
    border: 1px solid #b8dbd9;
    border-radius: 15px;
    padding: 20px 50px;
    min-width: 500px;
    .formElement {
      display: block;
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 10px 0px;
    }
  }
}

.forgotPassword {
  h6 {
    margin-top: 5px;
  }
}
</style>

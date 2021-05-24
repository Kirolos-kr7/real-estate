<template>
  <div class="footer">
    <footer>
      <h2>Subscribe to our NEWSLETTER</h2>
      <h5>And get notified with new properties</h5>
      <form>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            name="s"
            id="mail"
            required
          />
          <button class="btn btn-secondary">Notify Me</button>
        </div>
      </form>
      <ul>
        <li><a href="../" @click.prevent="">About us</a></li>
        <li><a href="../" @click.prevent="">Terms &amp; Conditions</a></li>
        <li><a href="../" @click.prevent="">Privacy Policy</a></li>
        <li><a href="../" @click.prevent="">Careers</a></li>
        <li><a href="../" @click.prevent="">Company Registration</a></li>
      </ul>
      <div class="img-container">
        <a href="../" @click.prevent=""
          ><img src="../assets/googlePlay.png" alt="googlePlay"
        /></a>
        <a href="../" @click.prevent=""
          ><img src="../assets/appStore.png" alt="appStore"
        /></a>
      </div>
      <h6>Copyright &copy; 2020 PRMD Real Estate</h6>
    </footer>
  </div>
</template>

<script>
import $ from "jquery";
$;
export default {
  mounted() {}
};
</script>

<style scoped lang="scss">
@import "../assets/style.scss";
footer {
  padding: 30px;
  background: #b8dbd9;
  h2 {
    font-weight: 900;
  }
  h5 {
    font-size: 16px;
    font-weight: 300;
  }
  .form-group {
    display: flex;
    padding: 15px 30px 30px;
    width: 50vw;
    margin: 0 auto;
    border-bottom: 2px dashed #333;

    #mail {
      border-radius: 0;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border: 1px solid #fff;
    }
    .btn {
      border-radius: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      white-space: nowrap;
    }
  }
  ul {
    list-style: none;
    margin: 15px;
    padding: 0;
    li {
      display: inline-block;
      margin: 5px 10px;
      a {
        color: $main;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .img-container {
    a {
      margin: 0 15px;
      img {
        height: 40px;
        margin: 5px;
      }
    }
  }
  h6 {
    padding: 15px;
    margin-top: 5px;
  }
}

@media only screen and (max-width: 602px) {
  form .form-group {
    width: 82vw;
    flex-direction: column;
    #mail {
      border-radius: 5px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      border: 1px solid #fff;
    }
    .btn {
      border-radius: 5px;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
  }
}
</style>

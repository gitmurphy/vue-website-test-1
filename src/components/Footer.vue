<template>
    <footer class="footer mt-auto py-3 bg-light">
      <div class="row footer-row">
        <div class="col">
          <h1>Artist</h1>
        </div>
        <div class="col">
          <h4 class="footer-temp-adjust">Got a Question?</h4>
          <div class="footer-temp-adjust">
            <form name="contactForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
              <input type="text" class="form-control validate[required]" name="email" placeholder="your email..."><br>
              <input type="text" class="form-control validate[required]" name="message" placeholder="your message..."><br>
              <input type="submit" class="btn btn-dark" value="Submit">
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <span>Copyright © 2021, All Rights Reserved</span>  
      </div>
    </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  padding: 20px;
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

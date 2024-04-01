<script>
export default {
  name: "Contact",
};
</script>

<template>
  <section class="contact" id="contact">
    <h2 class="heading">Contact<span> Me</span></h2>
    <div class="container">
      <div class="icon-box" id="instagram">
        <a href="https://www.instagram.com/lurrr.1">
          <i class="fab fa-instagram"></i>
          <span class="text">lurrr.1</span>
        </a>
      </div>
      <div class="icon-box" id="linkedin">
        <a href="https://www.linkedin.com/in/fadhlur-rohman-d1012/">
          <i class="fab fa-linkedin"></i>
          <span class="text">Fadhlur Rohman</span>
        </a>
      </div>
      <div class="icon-box" id="github">
        <a href="https://github.com/Lurrr1">
          <i class="fab fa-github"></i>
          <span class="text">Lurrr1</span>
        </a>
      </div>
      <h1>You can contact me with : fadlurrohman1204@gmail.com</h1>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
}

.icon-box {
  position: relative;
  top: 5vh;
  left: 60vh;
  margin: 0 10px 0 10px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25vh;
  background-color: black;
  color: white;
}

.icon-box i {
  position: relative;
  top: 2vh;
  left: 2vh;
  font-size: 6vh;
  width: 10vh;
  height: 10vh;
}

.icon-box a {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: white;
}

.container h1 {
  position: relative;
  top: 25vh;
  right: 30vh;
  font-size: 30px;
}

.text {
  font-size: 16px;
  margin-right: 10px;
}

.contact {
  background: var(--snd-bf-color);
  padding: 20px;
}

.contact h2 {
  margin-bottom: 2rem;
}
</style>

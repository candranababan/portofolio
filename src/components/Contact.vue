<template>
  <section class="contact" id="contact">
    <h2 class="heading">Contact<span> Me</span></h2>
    <div class="container">
      <div class="icon-box" id="instagram">
        <a href="http://www.instagram.com/cndr.05">
          <i class="fab fa-instagram"></i>
          <span class="text" style="font-size: 20px">cndr.05</span>
        </a>
      </div>
      <div class="icon-box" id="github">
        <a href="https://github.com/candranababan">
          <i class="fab fa-github"></i>
          <span class="text" style="font-size: 20px">candra</span>
        </a>
      </div>
    </div>
    <div class="contact-info">
      <h1 style="margin-top: 40px">
        You can contact me with: candranababan95@gmail.com
      </h1>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center; /* Memusatkan ikon */
}

.icon-box {
  position: relative;
  top: 5vh;
  margin: 0 12.5px; /* Menambahkan jarak antara ikon */
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

.contact-info h1 {
  font-size: 30px;
  text-align: center;
}

.contact {
  background: var(--snd-bf-color);
  padding: 20px;
}

.contact h2 {
  margin-bottom: 2rem;
}
</style>

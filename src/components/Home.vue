<script>
export default {
  name: "Home",
};
</script>

<template>
  <section class="home" id="home">
    <div class="home-content">
      <h3>Halo! Saya,</h3>
      <h1>Fadhlur rohman</h1>
      <h3>Seorang Iot Developer<span class="multiple-text"></span></h3>
      <p>
        Seorang mahasiswa Teknik Informatika yang berambisi dan kompetitif,
        serta selalu sedia mempelajari hal-hal baru!
      </p>
      <a href="../assets/FadhlurRohman_CV.pdf" class="btn" target="_blank"
        >Download CV</a
      >
    </div>

    <div class="home-img">
      <img src="../assets/img/pp1.png" alt="" />
    </div>
  </section>
</template>

<style scoped>
.home {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-content h3 {
  font-size: 3.2rem;
  font-weight: 700;
}

.home-content h3:nth-of-type(2) {
  margin-bottom: 2rem;
}

span {
  color: var(--main-color);
}

.home-content h1 {
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1.3;
}

.home-img img {
  width: 30vw;
  box-sizing: border-box;
}

.home-content p {
  font-size: 1.6rem;
}

.btn {
  margin-top: 2rem;
  display: inline-block;
  padding: 1rem 2.8rem;
  background: var(--main-color);
  border-radius: 4rem;
  box-shadow: 0 0 1rem var(--main-color);
  font-size: 1.6rem;
  color: var(--bg-color);
  letter-spacing: 0.1rem;
  font-weight: 600;
  transition: 0.5s ease;
}

.btn:hover {
  box-shadow: none;
}
</style>

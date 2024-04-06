<template>
  <section class="home" id="home">
    <div class="home-img">
      <img src="../assets/img/pp1.png" alt="" />
    </div>

    <div class="home-content">
      <h3>Halo! Saya,</h3>
      <h1>Candra nababan</h1>
      <h3>Junior Web developer<span class="multiple-text"></span></h3>
      <p>
        Saya seorang mahasiswa Teknik Informatika yang penuh ambisi dan semangat
        kompetitif, serta selalu siap untuk mengeksplorasi hal-hal baru
      </p>
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

.home-content {
  text-align: left; /* Mengatur teks ke kiri */
}

.home-img {
  margin-left: auto; /* Memindahkan gambar ke kanan */
  margin-right: auto;
  margin-top: -5px; /* Menaikkan gambar sedikit ke atas */
}

.home-img img {
  width: 75vh; /* Memperbesar gambar */
  box-sizing: border-box;
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

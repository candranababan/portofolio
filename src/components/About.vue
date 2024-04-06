<template>
  <section class="about">
    <section class="about" id="about">
      <div class="about-content">
        <h2 class="heading">ABOUT <span>ME</span></h2>
        <h3>Junior Web Developer</h3>
        <p>
          Halo, nama saya Candra Nababan. Saya lahir di Pekanbaru pada 5
          September 2003, dan saat ini berusia 20 tahun. Saya seorang mahasiswa
          Teknik Informatika yang tertarik pada pengembangan website. Agama saya
          adalah Kristen, dan saya sangat antusias dalam belajar tentang
          teknologi serta bagaimana hal itu dapat digunakan untuk menciptakan
          solusi yang bermanfaat bagi masyarakat. Senang berkenalan dengan Anda!
        </p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: var(--snd-bf-color);
}

.about-content h2 {
  text-align: left;
  line-height: 1.2;
}

.about-content h3 {
  font-size: 2.6rem;
}

.about-content p {
  font-size: 1.6rem;
  margin: 2rem 0 3rem;
}
</style>

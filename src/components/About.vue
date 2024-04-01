<template>
  <section class="about">
    <section class="about" id="about">
      <div class="about-content">
        <h2 class="heading">ABOUT <span>ME</span></h2>
        <h3>Junior IoT Developer</h3>
        <p>
          Saya, Fadhlur Rohman, adalah seorang mahasiswa yang aktif di
          Universitas Islam Riau, menjalani studi di Jurusan Teknik Informatika.
          Saya sangat tertarik dalam bidang Internet of Things (IoT) dan
          robotika. Memiliki keinginan yang mendalam terhadap implementasi robot
          dalam industri pertambangan, saya juga memiliki minat yang kuat
          terhadap dinamika dunia kerja. Saya yakin bahwa dedikasi serta
          ketertarikan saya dalam bidang ini akan menjadi kontribusi yang
          berarti dalam lingkungan professional.
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

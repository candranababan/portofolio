<script>
export default {
  name: "Projects",
};
</script>

<template>
  <section class="projects" id="projects">
    <h2 class="heading">Latest<span> Projects</span></h2>
    <div class="projects-container">
      <div class="projects-box">
        <img src="../assets/img/AgroSmartProjects.png" alt="" />
        <div class="projects-layer">
          <h4>AgroSmart</h4>
          <p>
            memudahkan perkebunan dalam melaksanakan kegiatan perkebunan
            contohnya penyiraman, penyiraman disinfektan bisa mengetahui
            kesuburan tanah,kelembapan dan suhu dan juga probabilitas curah
            hujan
          </p>
          <a href="https://github.com/wagi1922/AgroSmart" target="_blank"
            ><i class="fa-solid fa-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="projects-box">
        <img id="IOT" src="../assets/img/projectIOT.png" alt="" />
        <div class="projects-layer">
          <h4>Fingerprint IoT</h4>
          <p>
            Ini adalah project IoT yang mana project ini berfungsi sebagai alat
            keamanan yang mengungakan sidik jari sebagai kunci pembuka pintu
            yang mana sidik jari harus terdaftar terlebih dahulu jika tidak
            terdaftear maka pintu tidak akan terbuka
          </p>
          <a href="https://github.com/Lurrr1" target="_blank"
            ><i class="fa-solid fa-up-right-from-square"></i
          ></a>
        </div>
      </div>
      <div class="projects-box">
        <img id="robotik" src="../assets/img/projectRobotic.png" alt="" />
        <div class="projects-layer">
          <h4>Robot control</h4>
          <p>
            Ini adalah salah satu project Robotic saya yang mana ini adalah
            sebuah prototype mobil pemadam kebakaran yang dikendalikan
            menggunakan wireless yaitu bluetooth
          </p>
          <a href="https://github.com/Lurrr1" target="_blank"
            ><i class="fa-solid fa-up-right-from-square"></i
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--bg-color);
}

.projects h2 {
  margin-bottom: 4rem;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 2.5rem;
}

.projects-container .projects-box {
  position: relative;
  border-radius: 2rem;
  box-shadow: 0 0 1rem var(--snd-bf-color);
  overflow: hidden;
  display: flex;
}

.projects-box img {
  width: 100%;
  transition: 0.5 ease;
  opacity: 0.7;
}

.projects-box:hover img {
  transform: scale(1.1);
}

.projects-box .projects-layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), var(--bg-color));
  border-radius: 2rem;
  transition: 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 4rem;
  transform: translateY(100%);
  transition: 0.5 ease;
}

.projects-box:hover .projects-layer {
  transform: translateY(0);
}

.projects-layer h4 {
  font-size: 3rem;
}

.projects-layer p {
  font-size: 1.6rem;
  margin: 0.3rem 0 1rem;
}

.projects-layer a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  background: var(--text-color);
  border-radius: 50%;
}

.projects-layer a i {
  font-size: 2rem;
  color: var(--bg-color);
}
</style>

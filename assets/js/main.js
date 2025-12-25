document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     AMBIL ELEMEN
  ========================= */

  const buttons = document.querySelectorAll(".about-buttons button");
  const modal = document.getElementById("educationModal");
  const modalTitle = document.getElementById("eduTitle");
  const modalName = document.getElementById("eduName");
  const modalContent = document.getElementById("eduContent");
  const modalClose = document.querySelector(".education-modal-close");

  const data = {

  1: {
    name: "Revina Hidayati",

    pendidikan: `
      <table class="edu-table">
        <tr><td>SD</td><td>SDN 07 Silaing Bawah</td><td>2010–2016</td></tr>
        <tr><td>SMP</td><td>SMPN 1 Padang Panjang</td><td>2016–2019</td></tr>
        <tr><td>SMA</td><td>SMAN 1 Padang Panjang</td><td>2019–2022</td></tr>
        <tr><td>Kuliah</td><td>Universitas Adzkia</td><td>2023–Sekarang</td></tr>
      </table>
    `,

    pengalaman: `
      <table class="edu-table">
        <tr><td>Organisasi</td><td>Koordinator OSIS Sekbid Kewirausahaan</td></tr>
        <tr><td>Magang</td><td>Internship Tim Screening Dokumen PCPM BI 37</td></tr>
        <tr><td>Proyek</td><td>POI Data Collection Tim ALfa Quadrant</td></tr>
        <tr><td>Organisasi</td><td>HIMA Sistem Informasi Divisi Kominfo (2024–2025)</td></tr>
        <tr><td>UKM</td><td>UK Kesenian Musik & Vocal Universitas Adzkia (2023–2025)</td></tr>
        <tr><td>Organisasi</td><td>Anggota PIK-R SMAN 1 Padang Panjang</td></tr>
      </table>
    `,

    skills: `
      <table class="edu-table">
        <tr><td>Hard Skills</td><td>Microsoft Office, Data Entri, Analisis Data, MySQL, Google Workspace, C++, StarUML</td></tr>
        <tr><td>Soft Skills</td><td>Leadership, Teamwork, Adaptif, Aktif, Inisiatif, Fast Learning, Disiplin</td></tr>
      </table>
    `
  },

  2: {
    name: "Delvina",

    pendidikan: `
      <table class="edu-table">
        <tr><td>SD</td><td>SDN 01 Sungai Beremas</td><td>2010–2016</td></tr>
        <tr><td>SMP</td><td>SMPN 1 Sungai Beremas</td><td>2017–2020</td></tr>
        <tr><td>SMA</td><td>SMAN 1 Sungai Beremas</td><td>2020–2023</td></tr>
        <tr><td>Kuliah</td><td>Universitas Adzkia</td><td>2023–Sekarang</td></tr>
      </table>
    `,

    pengalaman: `
      <table class="edu-table">
        <tr><td>Organisasi</td><td>Koor PSDM Studentlead</td></tr>
        <tr><td>Organisasi</td><td>PC IPM Pasaman Barat</td></tr>
        <tr><td>Organisasi</td><td>HIMA Sistem Informasi Divisi Kewirausahaan(2024–2025)</td></tr>
      </table>
    `,

    skills: `
      <table class="edu-table">
        <tr><td>Hard Skills</td><td>Microsoft Office, Data Entri, Analisis Data, MySQL, Google Workspace, C++, StarUML</td></tr>
        <tr><td>Soft Skills</td><td>Leadership, Teamwork, Adaptif, Aktif, Inisiatif, Fast Learning, Disiplin</td></tr>
      </table>
    `
  },

  3: {
    name: "Elka Bella",

    pendidikan: `
      <table class="edu-table">
        <tr><td>SD</td><td>SDN 220 Sekar Mengkuang</td><td>2010–2016</td></tr>
        <tr><td>SMP</td><td>SMPN 2 LLM</td><td>2017–2019</td></tr>
        <tr><td>SMA</td><td>SMKN 7 Bungo</td><td>2019–2022</td></tr>
        <tr><td>Kuliah</td><td>Universitas Adzkia</td><td>2023–Sekarang</td></tr>
      </table>
    `,

    pengalaman: `
      <table class="edu-table">
        <tr><td>Pekerjaan</td><td>PHL Polsek LLM</td></tr>
        <tr><td>Organisasi</td><td>Ketua Dewan Kerja Ranting</td></tr>
        <tr><td>Organisasi</td><td>Anggota HIMA Sistem Informasi (2024–2025)</td></tr>
      </table>
    `,

    skills: `
      <table class="edu-table">
        <tr><td>Hard Skills</td><td>Microsoft Office, Data Entri, Analisis Data, MySQL, Google Workspace, C++, StarUML</td></tr>
        <tr><td>Soft Skills</td><td>Leadership, Teamwork, Adaptif, Aktif, Inisiatif, Fast Learning, Disiplin</td></tr>
      </table>
    `
  },

  4: {
    name: "Aksioma Arora",

    pendidikan: `
      <table class="edu-table">
        <tr><td>SD</td><td>SDN 06 Sungai Geringging</td><td>2010–2016</td></tr>
        <tr><td>SMP</td><td>SMPN 2 Sungai Geringging</td><td>2017–2019</td></tr>
        <tr><td>SMA</td><td>SMAN 1 Sungai Geringging</td><td>2019–2022</td></tr>
        <tr><td>Kuliah</td><td>Universitas Adzkia</td><td>2023–Sekarang</td></tr>
      </table>
    `,

    pengalaman: `
      <table class="edu-table">
        <tr><td>Organisasi</td><td>Bendahara OSIS (2020–2021)</td></tr>
        <tr><td>Organisasi</td><td>Anggota HIMA Sistem Informasi</td></tr>
      </table>
    `,

    skills: `
      <table class="edu-table">
        <tr><td>Hard Skills</td><td>Microsoft Office, Data Entri, Analisis Data, MySQL, Google Workspace, C++, StarUML</td></tr>
        <tr><td>Soft Skills</td><td>Leadership, Teamwork, Adaptif, Aktif, Inisiatif, Fast Learning, Disiplin</td></tr>
      </table>
    `
  }

};


  /* =========================
     EVENT BUTTON
  ========================= */

  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const type = this.getAttribute("data-type");
      const id = this.getAttribute("data-id");

      if (!data[id] || !data[id][type]) return;

      // set isi modal
      modalTitle.innerText = type.toUpperCase();
      modalName.innerText = data[id].name;
      modalContent.innerHTML = data[id][type];

      // tampilkan modal
      modal.classList.add("active");
    });
  });

  /* =========================
     TUTUP MODAL
  ========================= */

  modalClose.addEventListener("click", function () {
    modal.classList.remove("active");
  });
// Smooth scroll navbar
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

});

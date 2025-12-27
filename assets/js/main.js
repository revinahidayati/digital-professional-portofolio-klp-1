document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     TYPING EFFECT
  ========================= */
  const textWelcome = " Welcome to Our Digital Portfolio";
  const typing = document.getElementById("typing");

  if (typing) {
    let i = 0;
    let hapus = false;

    function jalaninTyping() {
      if (!hapus) {
        typing.textContent = textWelcome.slice(0, i + 1);
        i++;
        if (i === textWelcome.length) {
          setTimeout(() => hapus = true, 800);
        }
      } else {
        typing.textContent = textWelcome.slice(0, i - 1);
        i--;
        if (i === 0) hapus = false;
      }
      setTimeout(jalaninTyping, hapus ? 70 : 130);
    }
    jalaninTyping();
  }

  /* =========================
     AMBIL ELEMEN MODAL
  ========================= */
  const buttons = document.querySelectorAll(".about-buttons button");
  const modal = document.getElementById("educationModal");
  const modalTitle = document.getElementById("eduTitle");
  const modalName = document.getElementById("eduName");
  const modalContent = document.getElementById("eduContent");
  const modalClose = document.querySelector(".education-modal-close");

  /* =========================
     DATA (TIDAK DIUBAH)
  ========================= */
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
          <tr><td>Organisasi</td><td>Koordinator OSIS Sekbid Kewirausahaan SMAN 1 Padang Panjang (2021-2022)</td></tr>
          <tr><td>Organisasi</td><td>Anggota PIK-R SMAN 1 Padang Panjang (2020-2022</td></tr>
          <tr><td>Organisasi</td><td>HIMA Sistem Informasi Divisi Kominfo (2024–2025)</td></tr>
          <tr><td>Organisasi</td><td>UKM Kesenian Musik & Vocal Universitas Adzkia (2023–2025)</td></tr>
          <tr><td>Magang</td><td>Internship Tim Screening Dokumen PCPM BI 37 PT INFOMEDIA NUSANTARA (2023)</td></tr>
          <tr><td>Proyek</td><td>POI Data Collection Tim Alfa TEKNOVERSA Quadrant (2024)</td></tr>
          <tr><td>Magang</td><td>Internship Dinas KOMINFO Padang Bidang E-Goverment (2025)</td></tr>
        </table>
      `,
      skills: `
        <table class="edu-table">
          <tr><td>Hard Skills</td><td>Microsoft Office, Data Entri, Analisis Data, MySQL, Google Workspace, C++, StarUML, Bahasa Inggris</td></tr>
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
          <tr><td>Organisasi</td><td>HIMA Sistem Informasi Divisi Kewirausahaan (2024–2025)</td></tr>
        </table>
      `,
      skills: `
        <table class="edu-table">
          <tr><td>Hard Skills</td><td>mampu menggunakan word , excel dan powerpoint,  mampu memasukkan , mengelola dan merapikan ,serta mampu mencari informasi dan berkomunikasi secara profesional </td></tr>
          <tr><td>Soft Skills</td><td>memiliki rasa tanggung jawab , mampu berkerja sama tim, disiplin ,mudah menyesuaikan diri serta mampu menyampaikan ide dengn jelas dan sopan</td></tr>
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
          <tr><td>Hard Skills</td><td>​Mampu mengoperasikan Microsoft Office (Word, Excel, PowerPoint) untuk pengolahan data dan laporan.​ Mampu  memasukkan, mengelola, dan merapikan data secara terstruktur. ​Mampu melakukan riset informasi digital dan berkomunikasi secara profesional.</td></tr>
          <tr><td>Soft Skills</td><td>​Memiliki rasa tanggung jawab terhadap tugas, Mampu bekerja sama dalam tim, ​Disiplin dan mudah menyesuaikan diri (adaptif), Mampu menyampaikan ide dengan jelas dan sopan.</td></tr>
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
          <tr><td>Hard Skills</td><td>mampu menggunakan word , excel dan powerpoint, coral draw dan mampu mengelola dan merapikan ,serta mampu mencari informasi dan berkomunikasi secara profesional </td></tr>
          <tr><td>Soft Skills</td><td> memiliki rasa tanggung jawab , mampu berkerja sama tim, disiplin ,mudah menyesuaikan diri serta mampu menyampaikan ide dengn jelas</td></tr>
        </table>
      `
    }
  };

  /* =========================
     TOMBOL CLOSE DI BAWAH
  ========================= */
  function tambahCloseBawah() {
    const lama = modalContent.querySelector(".dynamic-close-btn");
    if (lama) lama.remove();

    const btn = document.createElement("button");
    btn.className = "dynamic-close-btn";
    btn.textContent = "× Close";

    btn.style.marginTop = "30px";
    btn.style.padding = "12px 28px";
    btn.style.background = "#FFD000";
    btn.style.border = "none";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";
    btn.style.fontWeight = "bold";

    btn.onclick = () => modal.classList.remove("active");

    modalContent.appendChild(btn); // ⬅️ BAWAH
  }

  /* =========================
     EVENT BUTTON
  ========================= */
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const type = this.dataset.type;
      const id = this.dataset.id;

      if (!data[id] || !data[id][type]) return;

      modalTitle.innerText = type.toUpperCase();
      modalName.innerText = data[id].name;
      modalContent.innerHTML = data[id][type];

      tambahCloseBawah();
      modal.classList.add("active");
    });
  });

  /* =========================
     CLOSE MODAL
  ========================= */
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Tutup menu SAAT item diklik, tapi hamburger tetap ada
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }
});

// BLOG CATEGORY FILTER
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".category-list li");
  const cards = document.querySelectorAll(".blog-card");

  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");

      const category = filter.dataset.filter;

      cards.forEach(card => {
        card.style.display =
          category === "Semua" || card.dataset.category === category
            ? "block"
            : "none";
      });
    });
  });
});


// dark light mode
document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("Mode");
  const body = document.body;

  if (!modeToggle) return;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.remove("dark-theme");
  } else {
    body.classList.add("dark-theme"); // default dark
  }

  modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    const currentTheme = body.classList.contains("dark-theme")
      ? "dark"
      : "light";

    localStorage.setItem("theme", currentTheme);
  });
});

document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     TYPEWRITER EFFECT (HOME)
  ========================= */
  const typing = document.getElementById("typing");
  const textWelcome = " Welcome To Our Portfolio";

  if (typing) {
    let i = 0;
    let isDeleting = false;

    function typeWriter() {
      if (!isDeleting) {
        typing.textContent = textWelcome.slice(0, i + 1);
        i++;

        if (i === textWelcome.length) {
          setTimeout(() => isDeleting = true, 800);
        }
      } else {
        typing.textContent = textWelcome.slice(0, i - 1);
        i--;

        if (i === 0) {
          isDeleting = false;
        }
      }

      setTimeout(typeWriter, isDeleting ? 70 : 130);
    }

    typeWriter();
  }


  /* =========================
     BLOG CATEGORY FILTER
  ========================= */
  const categoryItems = document.querySelectorAll(".category-list li");
  const blogCards = document.querySelectorAll(".blog-card");

  if (categoryItems.length && blogCards.length) {
    categoryItems.forEach(item => {
      item.addEventListener("click", () => {

        categoryItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const filter = item.dataset.filter;

        blogCards.forEach(card => {
          const category = card.dataset.category;

          if (filter === "all" || category === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }


  /* =========================
     ABOUT MODAL (EDUCATION, EXPERIENCE, SKILLS)
  ========================= */
  const buttons = document.querySelectorAll(".about-buttons button");
  const modal = document.getElementById("educationModal");
  const modalTitle = document.getElementById("eduTitle");
  const modalName = document.getElementById("eduName");
  const modalContent = document.getElementById("eduContent");
  const modalClose = document.querySelector(".education-modal-close");

  if (buttons.length && modal) {

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
            <tr><td>Organisasi</td><td>HIMA Sistem Informasi Divisi Kominfo</td></tr>
          </table>
        `,
        skills: `
          <table class="edu-table">
            <tr><td>Hard Skills</td><td>Microsoft Office, MySQL, C++, StarUML</td></tr>
            <tr><td>Soft Skills</td><td>Leadership, Teamwork, Disiplin</td></tr>
          </table>
        `
      }
      // 🔹 Data anggota lain bisa ditambah di sini
    };

    function tambahTombolClose() {
      const lama = modalContent.querySelector(".dynamic-close-btn");
      if (lama) lama.remove();

      const btn = document.createElement("button");
      btn.textContent = "× Close";
      btn.className = "dynamic-close-btn";

      btn.style.marginTop = "30px";
      btn.style.padding = "12px 28px";
      btn.style.background = "#FFD000";
      btn.style.border = "none";
      btn.style.borderRadius = "8px";
      btn.style.cursor = "pointer";
      btn.style.fontWeight = "bold";

      btn.onclick = () => modal.classList.remove("active");

      modalContent.appendChild(btn);
    }

    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const type = this.dataset.type;
        const id = this.dataset.id;

        if (!data[id] || !data[id][type]) return;

        modalTitle.textContent = type.toUpperCase();
        modalName.textContent = data[id].name;
        modalContent.innerHTML = data[id][type];

        tambahTombolClose();
        modal.classList.add("active");
      });
    });

    if (modalClose) {
      modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
      });
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

});

// hamburger menu
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

const form = document.getElementById("contactForm");
/* =========================
   CONTACT FORM VALIDATION
========================= */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    clearError(name);
    clearError(email);
    clearError(subject);
    clearError(message);

    if (name.value.trim() === "") {
      setError(name, "Nama tidak boleh kosong");
      valid = false;
    }

    if (!validateEmail(email.value)) {
      setError(email, "Format email tidak valid");
      valid = false;
    }

    if (subject.value.trim() === "") {
      setError(subject, "Subject wajib diisi");
      valid = false;
    }

    if (message.value.trim() === "") {
      setError(message, "Pesan tidak boleh kosong");
      valid = false;
    }

    if (!valid) {
      e.preventDefault(); // ❗ hentikan submit
    }
  });
}

function setError(input, message) {
  input.classList.add("error");
  input.nextElementSibling.innerText = message;
}

function clearError(input) {
  input.classList.remove("error");
  input.nextElementSibling.innerText = "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

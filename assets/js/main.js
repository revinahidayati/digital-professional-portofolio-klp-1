const textWelcome = " Welcome To Our Portfolio";
const typing = document.getElementById("typing");

let i = 0;
let hapus = false;

function jalaninTyping() {
  
  if (!typing) return;

  if (!hapus) {
    typing.textContent = textWelcome.slice(0, i + 1);
    i++;

    if (i === textWelcome.length) {
      setTimeout(() => {
        hapus = true;
      }, 150);
    }
  } else {
    typing.textContent = textWelcome.slice(0, i - 1);
    i--;

    if (i === 0) {
      hapus = false;
    }
  }

  setTimeout(jalaninTyping, hapus ? 70 : 130);
}

// jalan saat halaman home kebuka
document.addEventListener("DOMContentLoaded", () => {
  jalaninTyping();
});

  const categoryItems = document.querySelectorAll('.category-list li');
  const blogCards = document.querySelectorAll('.blog-card');

  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      // hapus active sebelumnya
      categoryItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const filter = item.getAttribute('data-filter');

      blogCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  

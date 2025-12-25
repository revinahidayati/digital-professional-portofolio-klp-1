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
document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".about-inline-buttons button");
  const boxes = document.querySelectorAll(".detail-box");

  // ⛔ kalau bukan halaman about, hentikan JS
  if (buttons.length === 0 || boxes.length === 0) {
    return;
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;

      boxes.forEach(box => box.classList.remove("active"));

      const activeBox = document.getElementById(target);
      if (activeBox) {
        activeBox.classList.add("active");
      }
    });
  });

});

// Toggle Tampilkan/Sembunyikan Foto
const toggleButton = document.getElementById("toggleButton");
const photoCollage = document.getElementById("photo-collage");

toggleButton.addEventListener("click", () => {
  photoCollage.classList.toggle("collapsed");

  if (photoCollage.classList.contains("collapsed")) {
    toggleButton.textContent = "Lihat Semua Foto 📸";
  } else {
    toggleButton.textContent = "Sembunyikan Foto ❌";
  }
});

// Efek ketik-ketik ucapan
const text = "Semoga hari kamu seindah senyummu. Selamat ulang tahun ya, cintaku! 🎉💕";
const target = document.getElementById("typewriter");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}

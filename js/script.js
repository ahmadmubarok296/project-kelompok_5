// ===== BAGIAN UMUM:  mode gelap untuk semua halaman =====
const tombolTema = document.getElementById("tombol-tema");

if (tombolTema) {
  tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
      tombolTema.textContent = "Mode Terang";
    } else {
      tombolTema.textContent = "Mode Gelap";
    }
  });
}   

// ===== BAGIAN MAHASISWA 2 (PROFIl) =====
const jelajahi = document.getElementById("jelajahi-kegiatan");

if (jelajahi) {
  jelajahi.addEventListener("click", function () {
    alert("Yuk, intip berbagai kegiatan seru kami!");
  });
}

// ===== BAGIAN MAHASISWA 3 (KEGIATAN) =====

// ===== BAGIAN MAHASISWA 4: (PENDAFTARAN) =====

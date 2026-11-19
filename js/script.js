const soal = [
  { pertanyaan: "1. Apa bahasa Inggrisnya 'Ayah'?", pilihan: ["Father", "Mother", "Sister"], jawaban: 0 },
  { pertanyaan: "2. Apa bahasa Inggrisnya 'Ibu'?", pilihan: ["Mother", "Father", "Uncle"], jawaban: 0 },
  { pertanyaan: "3. Apa arti kata 'Book'?", pilihan: ["Buku", "Pena", "Meja"], jawaban: 0 },
  { pertanyaan: "4. Apa arti kata 'Water'?", pilihan: ["Air", "Api", "Tanah"], jawaban: 0 },
  { pertanyaan: "5. Warna langit yang cerah adalah...", pilihan: ["Blue", "Red", "Green"], jawaban: 0 },
  { pertanyaan: "6. Matahari terbit di sebelah...", pilihan: ["East", "West", "North"], jawaban: 0 },
  { pertanyaan: "7. Hewan yang berkaki empat adalah...", pilihan: ["Cat", "Bird", "Fish"], jawaban: 0 },
  { pertanyaan: "8. Buah yang kuning dan panjang adalah...", pilihan: ["Banana", "Apple", "Grape"], jawaban: 0 },
  { pertanyaan: "9. Bagian tubuh untuk melihat adalah...", pilihan: ["Eye", "Ear", "Nose"], jawaban: 0 },
  { pertanyaan: "10. Bagian tubuh untuk mendengar adalah...", pilihan: ["Ear", "Eye", "Hand"], jawaban: 0 },
  { pertanyaan: "11. Jumlah hari dalam satu minggu adalah...", pilihan: ["Seven days", "Six days", "Five days"], jawaban: 0 },
  { pertanyaan: "12. Hari pertama dalam minggu adalah...", pilihan: ["Sunday", "Monday", "Friday"], jawaban: 0 },
  { pertanyaan: "13. Apa arti kata 'Teacher'?", pilihan: ["Guru", "Dokter", "Polisi"], jawaban: 0 },
  { pertanyaan: "14. Apa arti kata 'School'?", pilihan: ["Sekolah", "Rumah", "Pasar"], jawaban: 0 },
  { pertanyaan: "15. Hewan yang bisa terbang adalah...", pilihan: ["Bird", "Dog", "Cow"], jawaban: 0 },
  { pertanyaan: "16. Hewan yang hidup di air adalah...", pilihan: ["Fish", "Cat", "Rabbit"], jawaban: 0 },
  { pertanyaan: "17. Apa arti kata 'One'?", pilihan: ["Satu", "Dua", "Tiga"], jawaban: 0 },
  { pertanyaan: "18. Apa arti kata 'Five'?", pilihan: ["Lima", "Tiga", "Empat"], jawaban: 0 },
  { pertanyaan: "19. Benda untuk menulis adalah...", pilihan: ["Pencil", "Spoon", "Broom"], jawaban: 0 },
  { pertanyaan: "20. Benda saat hujan adalah...", pilihan: ["Umbrella", "Hat", "Bag"], jawaban: 0 },
  { pertanyaan: "21. Apa arti 'Good Morning'?", pilihan: ["Selamat pagi", "Selamat malam", "Selamat siang"], jawaban: 0 },
  { pertanyaan: "22. Apa arti 'Good Bye'?", pilihan: ["Selamat tinggal", "Halo", "Terima kasih"], jawaban: 0 },
  { pertanyaan: "23. Apa arti kata 'Big'?", pilihan: ["Besar", "Kecil", "Panjang"], jawaban: 0 },
  { pertanyaan: "24. Lawan dari 'Hot' adalah...", pilihan: ["Cold", "Warm", "New"], jawaban: 0 },
  { pertanyaan: "25. Benda yang dipakai di kaki adalah...", pilihan: ["Shoes", "Hat", "Shirt"], jawaban: 0 },
  { pertanyaan: "26. Apa arti kata 'Eat'?", pilihan: ["Makan", "Minum", "Tidur"], jawaban: 0 },
  { pertanyaan: "27. Apa arti kata 'Drink'?", pilihan: ["Minum", "Makan", "Lari"], jawaban: 0 },
  { pertanyaan: "28. Bagian tumbuhan yang hijau adalah...", pilihan: ["Leaf", "Root", "Flower"], jawaban: 0 },
  { pertanyaan: "29. Bagian tumbuhan di dalam tanah adalah...", pilihan: ["Root", "Leaf", "Fruit"], jawaban: 0 },
  { pertanyaan: "30. Benda terang di malam hari adalah...", pilihan: ["Moon", "Sun", "Star"], jawaban: 0 },
  { pertanyaan: "31. Apa arti kata 'Happy'?", pilihan: ["Senang", "Sedih", "Marah"], jawaban: 0 },
  { pertanyaan: "32. Apa arti kata 'Sad'?", pilihan: ["Sedih", "Senang", "Ceria"], jawaban: 0 },
  { pertanyaan: "33. Hewan berbelalai panjang adalah...", pilihan: ["Elephant", "Tiger", "Lion"], jawaban: 0 },
  { pertanyaan: "34. Buah berwarna oranye adalah...", pilihan: ["Orange", "Grape", "Apple"], jawaban: 0 },
  { pertanyaan: "35. Apa arti kata 'Table'?", pilihan: ["Meja", "Kursi", "Pintu"], jawaban: 0 },
  { pertanyaan: "36. Apa arti kata 'Chair'?", pilihan: ["Kursi", "Meja", "Jendela"], jawaban: 0 },
  { pertanyaan: "37. Hasil dari 2 + 3 adalah...", pilihan: ["Five", "Four", "Six"], jawaban: 0 },
  { pertanyaan: "38. Hasil dari 10 - 2 adalah...", pilihan: ["Eight", "Seven", "Nine"], jawaban: 0 },
  { pertanyaan: "39. Apa arti kata 'Run'?", pilihan: ["Lari", "Jalan", "Duduk"], jawaban: 0 },
  { pertanyaan: "40. Apa arti kata 'Sleep'?", pilihan: ["Tidur", "Bangun", "Makan"], jawaban: 0 },
  { pertanyaan: "41. Bahasa Inggris 'Meja' adalah...", pilihan: ["Table", "Chair", "Door"], jawaban: 0 },
  { pertanyaan: "42. Bahasa Inggris 'Kursi' adalah...", pilihan: ["Chair", "Table", "Floor"], jawaban: 0 },
  { pertanyaan: "43. Hewan yang berkicau adalah...", pilihan: ["Bird", "Fish", "Frog"], jawaban: 0 },
  { pertanyaan: "44. Bagian tubuh untuk berjalan adalah...", pilihan: ["Leg", "Hand", "Head"], jawaban: 0 },
  { pertanyaan: "45. Apa arti kata 'White'?", pilihan: ["Putih", "Hitam", "Merah"], jawaban: 0 },
  { pertanyaan: "46. Apa arti kata 'Black'?", pilihan: ["Hitam", "Putih", "Biru"], jawaban: 0 },
  { pertanyaan: "47. Benda untuk menerangi malam adalah...", pilihan: ["Lamp", "Book", "Clock"], jawaban: 0 },
  { pertanyaan: "48. Benda untuk melihat waktu adalah...", pilihan: ["Clock", "Lamp", "Door"], jawaban: 0 },
  { pertanyaan: "49. Apa arti 'Thank You'?", pilihan: ["Terima kasih", "Halo", "Maaf"], jawaban: 0 },
  { pertanyaan: "50. Jawaban 'Terima kasih' adalah...", pilihan: ["You are welcome", "Sorry", "Hello"], jawaban: 0 }
];

let nomorSekarang = 0;
let skor = 0;
let sudahJawab = false;

const tombolMulai = document.getElementById('mulai');
const teksSoal = document.getElementById('teksSoal');
const wadahPilihan = document.getElementById('pilihanJawaban');
const tombolLanjut = document.getElementById('lanjut');
const tampilSkor = document.getElementById('skor');
const tampilNomor = document.getElementById('nomor');
const wadahSoal = document.getElementById('wadahSoal');
const wadahHasil = document.getElementById('hasil');
const skorAkhir = document.getElementById('skorAkhir');
const pesanHasil = document.getElementById('pesan');
const tombolUlangi = document.getElementById('ulangi');
const tombolMode = document.getElementById('tombolMode');

function tampilkanSoal() {
  sudahJawab = false;
  const s = soal[nomorSekarang];
  teksSoal.textContent = s.pertanyaan;
  wadahPilihan.innerHTML = '';
  tombolLanjut.style.display = 'none';
  tampilNomor.textContent = nomorSekarang + 1;

  s.pilihan.forEach((pilih, indeks) => {
    const tombol = document.createElement('button');
    tombol.classList.add('pilihan');
    tombol.textContent = pilih;
    tombol.onclick = function() { pilihJawaban(indeks); };
    wadahPilihan.appendChild(tombol);
  });
}

function pilihJawaban(pilihanPengguna) {
  if (sudahJawab) return;
  sudahJawab = true;

  const jawabanBenar = soal[nomorSekarang].jawaban;
  const semuaPilihan = document.querySelectorAll('.pilihan');

  semuaPilihan.forEach((tombol, indeks) => {
    tombol.disabled = true;
    if (indeks === jawabanBenar) {
      tombol.classList.add('benar');
    } else if (indeks === pilihanPengguna) {
      tombol.classList.add('salah');
    }
  });

  if (pilihanPengguna === jawabanBenar) {
    skor = skor + 1;
    tampilSkor.textContent = skor;
  }
  tombolLanjut.style.display = 'block';
}

function tampilkanHasil() {
  wadahSoal.style.display = 'none';
  wadahHasil.style.display = 'block';
  skorAkhir.textContent = skor;

  if (skor >= 40) {
    pesanHasil.textContent = "🌟 Luar biasa! Kamu sangat pintar!";
  } else if (skor >= 30) {
    pesanHasil.textContent = "👍 Bagus sekali! Pertahankan ya!";
  } else if (skor >= 20) {
    pesanHasil.textContent = "😊 Coba lagi, pasti lebih baik!";
  } else {
    pesanHasil.textContent = "💪 Jangan menyerah, semangat belajarnya!";
  }
}

function mulaiUlang() {
  nomorSekarang = 0;
  skor = 0;
  tampilSkor.textContent = 0;
  wadahHasil.style.display = 'none';
  wadahSoal.style.display = 'block';
  tampilkanSoal();
}

tombolMode.onclick = function() {
  document.body.classList.toggle('mode-gelap');
};

tombolMulai.onclick = function() {
  document.getElementById('kuis').scrollIntoView({ behavior: 'smooth' });
  tampilkanSoal();
};

tombolLanjut.onclick = function() {
  nomorSekarang = nomorSekarang + 1;
  if (nomorSekarang < soal.length) {
    tampilkanSoal();
  } else {
    tampilkanHasil();
  }
};

tombolUlangi.onclick = function() {
  mulaiUlang();
};

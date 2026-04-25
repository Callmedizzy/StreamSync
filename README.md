# 🎬 StreamSync - Streaming Platform

StreamSync adalah platform streaming video berbasis web yang dirancang sebagai alternatif modern dari Netflix, Disney+, Amazon Prime, dan kompetitor lainnya. Dibangun menggunakan pure HTML, CSS, dan JavaScript (Vanilla JS) tanpa framework, database, atau backend. Seluruh data disimpan secara lokal menggunakan `localStorage`, menjadikannya aplikasi yang sangat ringan dan independen.

## 🔗 Link Penting

- **🌐 Live Website:** [https://callmedizzy.github.io/StreamSync](https://stream-sync-five.vercel.app)
- **📁 Repository:** [https://github.com/Callmedizzy/StreamSync](https://github.com/Callmedizzy/StreamSync)

---

## ✨ Fitur Utama

- **UI/UX Modern ala Netflix** — Desain antarmuka gelap yang responsif dengan smooth horizontal scrolling dan tombol navigasi pada baris film.
- **Register & Login** — Autentikasi pengguna sepenuhnya berjalan di sisi klien (menggunakan localStorage).
- **Cari Konten & Filter** — Pencarian film & series yang cepat dengan filter berdasarkan genre.
- **Tonton Konten** — Halaman detail film dilengkapi dengan pemutar video embed YouTube yang aktif.
- **Beranda Terpersonalisasi** — Menampilkan "Trending Now" dan "✨ AI Rekomendasi" (masing-masing 10 item).
- **Watch Party** — Fitur nonton bareng real-time (simulasi room & kode).
- **Paket Langganan** — Pilihan paket Gratis, Basic, dan Premium.
- **Polling Film** — Voting film favorit dengan hasil persentase real-time.
- **Download Offline** — Simulasi fitur download konten.
- **Komunitas Lokal** — Fitur komentar dan diskusi pada setiap halaman film.
- **Admin Panel** — Antarmuka khusus untuk mengelola daftar konten, pengguna, dan konfigurasi platform secara langsung.

---

## 🛠️ Teknologi

| Teknologi | Keterangan |
|-----------|------------|
| HTML5 | Struktur halaman utama (`index.html`) |
| CSS3 | Styling modern, animasi, & layout responsif (`style.css`) |
| JavaScript (Vanilla) | Logika utama, DOM manipulation, & state management (`script.js`) |
| localStorage | Penyimpanan seluruh data persisten (akun, film, komentar) |
| YouTube API | Video embed player untuk trailer film |
| GitHub Pages | Hosting & deployment |

---

## 🚀 Cara Menjalankan

### Online
Akses langsung melalui link berikut:
👉 [https://callmedizzy.github.io/StreamSync](https://callmedizzy.github.io/StreamSync)

### Lokal
Karena aplikasi ini 100% Client-Side dan tidak membutuhkan backend atau dependensi Node.js, Anda dapat menjalankannya dengan sangat mudah:

```bash
git clone https://github.com/Callmedizzy/StreamSync.git
cd StreamSync/StreamSync
# Buka file index.html di browser Anda
```
> Tidak perlu `npm install` atau konfigurasi database. Cukup klik ganda (double-click) pada `index.html`.

---

## 👤 Akun Default untuk Testing

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@streamsync.com | admin |
| User | user@streamsync.com | user |

---

## 🧪 Tabel Pengujian

### Pengujian Fungsionalitas (Functionality)

| No | Fitur | Skenario Pengujian | Expected Result | Hasil |
|----|-------|--------------------|-----------------|-------|
| 1 | Register | Input nama, email, password, genre lalu klik Daftar | Akun berhasil dibuat & langsung login | ✅ Berhasil |
| 2 | Login | Input email & password yang valid | Berhasil masuk & nama muncul di navbar | ✅ Berhasil |
| 3 | Login Gagal | Input email/password salah | Muncul pesan "Email atau password salah" | ✅ Berhasil |
| 4 | Layout Beranda| Buka halaman utama setelah login | Menampilkan 2 baris: Trending Now & AI Rekomendasi | ✅ Berhasil |
| 5 | Horizontal Scroll | Klik panah navigasi pada baris film | Konten bergeser secara mulus (smooth scroll) | ✅ Berhasil |
| 6 | Cari Konten | Ketik judul film di search bar | Film yang sesuai muncul di grid | ✅ Berhasil |
| 7 | Tonton Konten | Klik card film | Halaman detail + video embed YouTube muncul dan dapat diputar | ✅ Berhasil |
| 8 | Watch Party | Klik "Buat Room Baru" | Kode room unik berhasil dibuat | ✅ Berhasil |
| 9 | AI Rekomendasi | Login dengan genre favorit tertentu | Film sesuai genre favorit muncul di beranda | ✅ Berhasil |
| 10 | Polling Film | Pilih film & klik Vote | Hasil polling bertambah & bar update | ✅ Berhasil |
| 11 | Komunitas Lokal | Tulis komentar & klik Kirim | Komentar muncul di bawah film | ✅ Berhasil |
| 12 | Admin Panel | Login admin, buka dashboard | Dapat menambah/menghapus film dan mengatur konfigurasi AI | ✅ Berhasil |

---

### Pengujian Kualitas Sistem

| No | Aspek | Indikator | Hasil |
|----|-------|-----------|-------|
| 1 | **Functionality** | Semua interaksi UI (scroll, modal, navigasi) berjalan tanpa error | ✅ Terpenuhi |
| 2 | **Usability** | Desain Netflix-inspired, tombol jelas, animasi mulus, dark mode | ✅ Terpenuhi |
| 3 | **Performance** | Loading sangat cepat karena menggunakan Vanilla JS dan tanpa request ke server | ✅ Terpenuhi |
| 4 | **Reliability** | Perubahan state & penambahan film via Admin tersimpan aman di localStorage | ✅ Terpenuhi |
| 5 | **Independence** | Dapat berjalan offline tanpa server database maupun Node.js ecosystem | ✅ Terpenuhi |

---

## 📁 Struktur Project

```text
StreamSync/
├── StreamSync/
│   ├── index.html     # Kerangka utama halaman web
│   ├── style.css      # Gaya desain Netflix-inspired, grid, & utilitas animasi
│   └── script.js      # Core logic, manipulasi DOM, state localStorage, & routing simulasi
├── .gitignore         # File pengecualian Git
└── README.md          # Dokumentasi proyek
```

# 🎬 StreamSync - Streaming Platform

StreamSync adalah platform streaming video berbasis web yang dirancang sebagai alternatif modern dari Netflix, Disney+, Amazon Prime, dan kompetitor lainnya. Dibangun menggunakan pure HTML, CSS, dan JavaScript (Vanilla JS) tanpa framework atau backend.

## 🔗 Link Penting

- **🌐 Live Website:** [https://callmedizzy.github.io/StreamSync](https://callmedizzy.github.io/StreamSync)
- **📁 Repository:** [https://github.com/Callmedizzy/StreamSync](https://github.com/Callmedizzy/StreamSync)

---

## ✨ Fitur Utama

- **Register & Login** — Autentikasi pengguna menggunakan localStorage
- **Cari Konten** — Pencarian film & series dengan filter genre
- **Tonton Konten** — Detail film dengan video embed YouTube
- **Watch Party** — Fitur nonton bareng real-time (simulasi room & kode)
- **AI Rekomendasi** — Rekomendasi film berdasarkan genre favorit pengguna
- **Paket Langganan** — Pilihan paket Gratis, Basic, dan Premium mingguan
- **Polling Film** — Voting film favorit dengan hasil persentase real-time
- **Download Offline** — Simulasi download konten untuk ditonton offline
- **Komunitas Lokal** — Komentar dan diskusi per film
- **Admin Panel** — Kelola konten, pengguna, dan konfigurasi AI

---

## 🛠️ Teknologi

| Teknologi | Keterangan |
|-----------|------------|
| HTML5 | Struktur halaman |
| CSS3 | Styling & animasi |
| JavaScript (Vanilla) | Logika aplikasi |
| localStorage | Penyimpanan data lokal |
| YouTube Embed | Video player placeholder |
| GitHub Pages | Hosting & deployment |

---

## 🚀 Cara Menjalankan

### Online
Akses langsung melalui link berikut:
👉 [https://callmedizzy.github.io/StreamSync](https://callmedizzy.github.io/StreamSync)

### Lokal
```bash
git clone https://github.com/Callmedizzy/StreamSync.git
cd StreamSync
# Buka file index.html di browser
```
> Tidak perlu install apapun. Cukup buka `index.html` di browser.

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
| 4 | Cari Konten | Ketik judul film di search bar | Film yang sesuai muncul di grid | ✅ Berhasil |
| 5 | Filter Genre | Pilih genre dari dropdown | Hanya film genre tersebut yang tampil | ✅ Berhasil |
| 6 | Tonton Konten | Klik card film | Halaman detail + video YouTube muncul | ✅ Berhasil |
| 7 | Watch Party | Klik "Buat Room Baru" | Kode room unik berhasil dibuat | ✅ Berhasil |
| 8 | Gabung Watch Party | Input kode room & klik Gabung | Notifikasi berhasil bergabung muncul | ✅ Berhasil |
| 9 | AI Rekomendasi | Login dengan genre favorit tertentu | Film sesuai genre favorit muncul di beranda | ✅ Berhasil |
| 10 | Paket Langganan | Klik "Pilih Paket" salah satu paket | Notifikasi berlangganan berhasil | ✅ Berhasil |
| 11 | Polling Film | Pilih film & klik Vote | Hasil polling bertambah & bar update | ✅ Berhasil |
| 12 | Download Offline | Klik tombol Download di detail film | Notifikasi simulasi download muncul | ✅ Berhasil |
| 13 | Komunitas Lokal | Tulis komentar & klik Kirim | Komentar muncul di bawah film | ✅ Berhasil |
| 14 | Admin - Hapus Film | Login admin, klik Hapus di tabel film | Film terhapus dari daftar | ✅ Berhasil |
| 15 | Admin - Konfigurasi AI | Ubah mode AI & klik Simpan | Mode AI tersimpan & beranda berubah | ✅ Berhasil |
| 16 | Logout | Klik tombol Logout | Sesi berakhir & kembali ke tampilan guest | ✅ Berhasil |

---

### Pengujian Kualitas Sistem

| No | Aspek | Indikator | Hasil |
|----|-------|-----------|-------|
| 1 | **Functionality** | Semua fitur use case berjalan sesuai diagram | ✅ Terpenuhi |
| 2 | **Usability** | Navigasi intuitif, tombol jelas, dark mode nyaman | ✅ Terpenuhi |
| 3 | **Performance** | Halaman load < 2 detik (single file, no framework) | ✅ Terpenuhi |
| 4 | **Reliability** | Data tersimpan di localStorage, tidak hilang saat refresh | ✅ Terpenuhi |
| 5 | **Security** | Validasi input form (email format, field tidak boleh kosong) | ✅ Terpenuhi |

---

## 📁 Struktur Project
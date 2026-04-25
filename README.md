# StreamSync

StreamSync adalah platform streaming video inovatif yang dirancang dengan antarmuka modern yang sangat responsif, dikembangkan khusus untuk bersaing dengan layanan streaming besar masa kini. Proyek ini dibangun sepenuhnya menggunakan **Vanilla HTML, CSS, dan JavaScript murni** dalam satu file statis (`index.html`), menjadikannya sangat cepat, ringan, dan **tidak bergantung pada server (*backend*) atau *database* eksternal**.

Semua *state* dan manajemen data disimpan secara otomatis di *Local Storage* browser Anda.

## 🚀 Fitur Utama

1. **Autentikasi (Simulasi)**: Daftar dan masuk ke dalam sistem. Data kredensial disimpan aman di *Local Storage*.
2. **Katalog & Pencarian Pintar**: Mencari judul film/series dan melakukan filter berdasarkan *genre* secara dinamis dan *real-time*.
3. **AI Rekomendasi Pintar**: Rekomendasi film di beranda yang disesuaikan berdasarkan genre preferensi spesifik yang dipilih pengguna saat mendaftar.
4. **Detail & Pemutar Konten**: Antarmuka pemutar video (menggunakan YouTube *embed placeholder*) dilengkapi informasi rating, tahun, sinopsis, dsb.
5. **Watch Party**: Simulasi fungsional pembuatan dan penggabungan *room code* unik untuk pengalaman nonton bareng.
6. **Paket Hemat Mingguan**: Halaman pilihan langganan interaktif dengan opsi Gratis, Basic, dan Premium.
7. **Polling Komunitas**: Fitur interaktif dinamis untuk mem-voting film selanjutnya (dengan persentase *bar chart* yang berjalan *real-time*).
8. **Komunitas Lokal (Diskusi)**: Setiap film memiliki kolom komentar independen yang tersimpan khusus pada masing-masing halaman.
9. **Admin Dashboard**: Tampilan tersembunyi khusus untuk akun "Admin" guna mengelola konten, akun pengguna, dan sistem AI.

## 💻 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+).
- **Database/Storage**: `localStorage` API (Browser).
- **Styling**: Vanilla CSS (*Pure CSS*) dengan implementasi *CSS Variables*, Flexbox/Grid layout, efek *Glassmorphism*, dan animasi transisi modern (tanpa Tailwind/Bootstrap).
- **Dependencies**: Tidak ada sama sekali (0 dependencies).

## 📂 Struktur Proyek

Karena sifat proyek ini yang statis dan ditujukan untuk menjadi file tunggal (*Single File Application*), seluruh fungsionalitas dan logika (*styling* dan *script*) telah disatukan:

```text
StreamSync/
├─ StreamSync/
│  └─ index.html
├─ README.md
└─ .gitignore
```

## 🛠️ Cara Menjalankan Aplikasi

Proyek ini **sangat praktis**. Anda **tidak memerlukan** instalasi Node.js, Vercel, `npm install`, atau konfigurasi server/database apa pun. 

Langkah-langkah:
1. Unduh atau *Clone* repositori ini ke komputer Anda.
2. Buka direktori/folder `StreamSync`.
3. Klik ganda pada file `index.html` untuk membukanya secara langsung di peramban (browser) modern favorit Anda (seperti Google Chrome, Opera GX, Microsoft Edge, atau Firefox).
4. Aplikasi siap digunakan untuk keperluan demonstrasi penuh!

## 🔑 Akun Default (Admin)

Sistem secara otomatis akan menginjeksikan data dasar saat Anda pertama kali membuka file tersebut. Untuk melihat **Admin Dashboard** (di menu navigasi), Anda dapat melakukan login menggunakan kredensial Admin berikut:

- **Email**: `admin@streamsync.com`
- **Password**: `admin`

## 📊 Tabel Pengujian Fungsional

Aplikasi ini sudah dipastikan berjalan dengan mulus dalam ekosistem browser.

| No | Fitur | Skenario Uji | Hasil Aktual | Status |
|----|------|--------------|--------------|--------|
| 1 | **Sistem Navigasi (*SPA*)** | Berpindah *tab* menu tanpa reload. | Berpindah *view* secara instan. | PASS ✅ |
| 2 | **Autentikasi (Daftar/Login)** | Buat pengguna baru lalu *login*. | UI memperbarui status Navbar & menyapa user. | PASS ✅ |
| 3 | **Filter & Pencarian** | Mengubah kategori/mengetik teks. | Daftar *grid* film memfilter judul dengan tepat. | PASS ✅ |
| 4 | **Komunitas Lokal (Komentar)** | Menambahkan ulasan ke suatu film. | Data komentar persisten, dan hanya muncul di film terkait. | PASS ✅ |
| 5 | **Polling Film** | Melakukan *voting* pada form. | Persentase bar kalkulasi terupdate otomatis. | PASS ✅ |
| 6 | **Aksi Dinamis (Watch Party & Download)** | Mengklik simulasi *event*. | Muncul notifikasi popup/modal interaktif yang dinamis. | PASS ✅ |
| 7 | **Akses Admin** | Mengelola (menghapus) daftar film. | Katalog diperbarui secara global di localStorage. | PASS ✅ |

---

*Catatan: Semua data yang diproses dan dimanipulasi di dalam proyek ini mengandalkan `localStorage`. Jika Anda membersihkan memori Cache/History Browser, maka konfigurasi data (pengguna baru, komentar, data rating polling) akan mereset ulang kembali ke data statis semula (default dummy data).*

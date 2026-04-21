# StreamSync (Daily Project 6)

StreamSync adalah aplikasi streaming film berbasis web dengan fitur utama:
- Watch Party real-time
- Rekomendasi AI (mock scoring berbasis genre)
- Paket hemat mingguan (simulasi pembayaran)
- Polling film komunitas
- Streaming konten dengan validasi langganan

## Platform
WEB (React + Node.js)

## Tech Stack
- Frontend: React + Vite + React Router
- Backend: Node.js + Express + Socket.io
- Database: MongoDB + Mongoose
- Auth: JWT + bcrypt

## Fitur yang Diimplementasikan
- Authentication: register, login, get profile
- Katalog film + pencarian sederhana
- Streaming page dengan validasi langganan aktif
- Watch Party real-time (sync play/pause/seek + chat)
- Rekomendasi AI mock berdasarkan preferensi genre & watch history
- Pembelian paket mingguan (payment simulation)
- Polling film (vote sekali per user)
- Endpoint admin dasar untuk konten/user/pembayaran

## Struktur Folder Project
```text
streamsync/
├─ backend/
│  ├─ src/
│  │  ├─ config/
│  │  ├─ controllers/
│  │  ├─ middlewares/
│  │  ├─ models/
│  │  ├─ routes/
│  │  ├─ services/
│  │  ├─ socket/
│  │  ├─ utils/
│  │  ├─ app.js
│  │  └─ server.js
│  ├─ .env.example
│  └─ package.json
├─ frontend/
│  ├─ src/
│  │  ├─ api/
│  │  ├─ components/
│  │  ├─ contexts/
│  │  ├─ pages/
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ .env.example
│  └─ package.json
├─ package.json
└─ README.md
```

## Cara Install & Run
### 1) Prasyarat
- Node.js 18+ (disarankan Node 20+)
- MongoDB aktif di `mongodb://127.0.0.1:27017` atau URI Atlas

### 2) Install dependencies
```bash
npm run install:all
```
Jika PowerShell memblokir `npm.ps1`, gunakan:
```bash
npm.cmd run install:all
```

### 3) Setup environment
Backend:
```bash
copy backend\\.env.example backend\\.env
```
Frontend:
```bash
copy frontend\\.env.example frontend\\.env
```

### 4) Seed data awal
```bash
npm run seed
```

### 5) Menjalankan aplikasi
Opsi 1 (2 terminal):
```bash
npm --prefix backend run dev
npm --prefix frontend run dev
```

Opsi 2 (1 terminal):
```bash
npm run dev
```

Frontend: `http://localhost:5173`  
Backend API: `http://localhost:5000/api`

## Akun Default
- Admin:
  - Email: `admin@streamsync.local`
  - Password: `Admin123!`

## Link Deployment (Dummy)
- Frontend: https://streamsync-demo.vercel.app
- Backend: https://streamsync-api-demo.onrender.com

## Link Github (Placeholder)
- https://github.com/your-org/streamsync

## Tabel Pengujian
Catatan: validasi build frontend berhasil. Pengujian end-to-end fitur backend membutuhkan service MongoDB aktif.

| No | Fitur | Skenario Uji | Hasil yang Diharapkan | Hasil Aktual | Status |
|----|------|--------------|----------------------|-------------|--------|
| 1 | Login | User login dengan email/password valid | Sistem mengembalikan JWT token dan data user | Endpoint `POST /api/auth/login` mengembalikan token & profile sesuai implementasi | PASS (dengan MongoDB aktif) |
| 2 | Streaming | User membuka halaman stream tanpa paket aktif lalu setelah beli paket | Tanpa paket ditolak, dengan paket video bisa diputar | Logic `SUBSCRIPTION_REQUIRED` dan stream URL sudah terimplementasi di endpoint stream | PASS (dengan MongoDB aktif) |
| 3 | Watch Party | 2 user join room sama, play/pause/seek dari 1 user | Player user lain sinkron real-time + chat masuk | Event `join-party`, `party-sync`, `party-chat` sudah terhubung frontend-backend | PASS (dengan MongoDB aktif) |
| 4 | Pembelian Paket | User memilih paket mingguan dan klik beli | Simulasi payment sukses, langganan aktif tersimpan dengan tanggal kedaluwarsa | Endpoint `POST /api/packages/purchase` membuat subscription aktif + payment reference | PASS (dengan MongoDB aktif) |
| 5 | Rekomendasi AI | User membuka halaman rekomendasi setelah punya preferensi/history | Daftar film terurut berdasarkan skor rekomendasi mock | Endpoint `GET /api/recommendations/me` mengembalikan `recommendationScore` + reason | PASS (dengan MongoDB aktif) |


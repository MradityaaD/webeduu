# 🌐 WebEdu — Belajar Web Developer dari Nol

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-selesai-brightgreen)

**WebEdu** adalah website edukasi berisi artikel pengantar untuk pemula yang ingin menjadi *web developer*. Materinya dirangkum dengan bahasa yang sederhana dan analogi sehari-hari (misalnya HTML sebagai rangka rumah, CSS sebagai cat dan dekorasi, JavaScript sebagai instalasi listrik), supaya mudah dipahami oleh siapa saja yang baru pertama kali menyentuh *coding*.

Proyek ini dibuat sebagai tugas sekolah dan dibangun **tanpa framework**, hanya dengan HTML, CSS, dan JavaScript murni.

<!--
Tambahkan screenshot di sini setelah kamu simpan gambarnya, misalnya di folder docs/:
![Tampilan Beranda](docs/beranda.png)
-->

---

## 📑 Daftar Isi

- [Fitur](#-fitur)
- [Isi Materi](#-isi-materi)
- [Halaman Website](#-halaman-website)
- [Teknologi](#-teknologi)
- [Struktur Folder](#-struktur-folder)
- [Cara Menjalankan](#-cara-menjalankan)
- [Deploy ke GitHub Pages](#-deploy-ke-github-pages)
- [Rencana Pengembangan](#-rencana-pengembangan)
- [Pembuat](#-pembuat)

---

## ✨ Fitur

- **Mode Gelap / Terang**: tombol di navbar mengganti tema seluruh halaman (warna aksen berubah dari oranye ke biru toska). Pilihan tema tetap dipakai saat berpindah halaman selama tab yang sama masih terbuka.
- **Pencarian Kategori**: kotak pencarian di halaman Kategori menyaring kartu materi secara langsung saat mengetik, lengkap dengan saran kata kunci (`<datalist>`) dan pesan khusus jika materi tidak ditemukan.
- **Navbar Menempel (*sticky*)**: menu tetap terlihat saat halaman di-scroll.
- **6 Artikel Edukasi** dengan blok contoh kode yang mudah dibaca.
- **Galeri Visi & Tujuan** berbentuk grid foto dengan efek *zoom* saat kursor diarahkan.
- **Formulir Kontak** dengan validasi bawaan HTML5 (tampilan saja, belum terhubung ke server).
- **Responsif**: tampilan menyesuaikan layar desktop, tablet (≤ 992px), dan HP (≤ 768px dan ≤ 480px).
- **Kode terstruktur**: satu file CSS dan satu file JS dipakai bersama oleh semua halaman, dengan komentar berbahasa Indonesia di dalam kodenya.

## 📚 Isi Materi

| Artikel | Topik | File |
| --- | --- | --- |
| Mengenal Struktur Dasar HTML5 | Struktur dokumen dan tag penting | `artikel_html.html` |
| Mempercantik Web dengan CSS | Menghubungkan CSS, selector, dan aturan dasar | `artikel_css.html` |
| Membuat Web Interaktif dengan JavaScript | Cara memasukkan JS dan manipulasi DOM | `artikel_js.html` |
| Setup VS Code & DevTools | Ekstensi wajib dan Inspect Element | `artikel_vscode.html` |
| Mengenal PHP: Backend untuk Pemula | Sintaks dasar dan mengolah data form | `artikel_php.html` |
| Mengenal GitHub: Tempat Kolaborasi Developer | Git vs GitHub dan perintah dasar | `artikel_github.html` |

## 🗂️ Halaman Website

| Halaman | File | Keterangan |
| --- | --- | --- |
| Beranda | `index.html` | Hero dan 2 artikel pilihan |
| Kategori | `kategori.html` | 6 kartu materi + fitur pencarian |
| Galeri | `galeri.html` | Tujuan dan visi WebEdu dalam bentuk foto |
| Tentang Kami | `tantang.html` | Cerita di balik WebEdu, visi, dan misi |
| Kontak | `kontak.html` | Informasi kontak dan formulir pesan |
| Detail Artikel | `artikel_*.html` | 6 halaman bacaan materi |

## 🛠️ Teknologi

- **HTML5**: struktur semantik (`nav`, `header`, `main`, `article`, `section`, `footer`)
- **CSS3**: CSS Variables (untuk tema gelap/terang), Flexbox, Grid, transisi, dan *media query*
- **JavaScript (Vanilla)**: manipulasi DOM, *event listener*, dan filter pencarian
- **[Devicon](https://devicon.dev/)** (via CDN jsDelivr): logo teknologi
- **[Unsplash](https://unsplash.com/)**: foto untuk halaman galeri

> ⚠️ Logo dan foto dimuat dari internet, jadi tampilan gambar membutuhkan koneksi internet.

## 📁 Struktur Folder

```
webedu/
├── index.html            # Beranda
├── kategori.html         # Daftar kategori + pencarian
├── galeri.html           # Galeri visi & tujuan
├── tantang.html          # Tentang Kami
├── kontak.html           # Kontak & formulir
├── artikel_html.html     # Artikel HTML
├── artikel_css.html      # Artikel CSS
├── artikel_js.html       # Artikel JavaScript
├── artikel_vscode.html   # Artikel VS Code & DevTools
├── artikel_php.html      # Artikel PHP
├── artikel_github.html   # Artikel GitHub
├── style.css             # Seluruh gaya (tema, layout, responsif)
├── animasi.js            # Mode terang/gelap + pencarian kategori
└── README.md
```

## 🚀 Cara Menjalankan

Tidak perlu instalasi apa pun.

**Cara 1 — Langsung buka**
1. Unduh atau *clone* repositori ini.
2. Buka file `index.html` dengan browser (Chrome, Edge, Firefox, dll).

**Cara 2 — Dengan Live Server (disarankan)**
1. Buka folder proyek di **VS Code**.
2. Pasang ekstensi **Live Server**.
3. Klik kanan `index.html`, lalu pilih **Open with Live Server**.

```bash
# Clone repositori
git clone https://github.com/USERNAME/NAMA-REPO.git

# Masuk ke folder proyek
cd NAMA-REPO
```

> Ganti `USERNAME` dan `NAMA-REPO` dengan username GitHub dan nama repositorimu.

## 🌍 Deploy ke GitHub Pages

1. Buka repositori di GitHub, lalu masuk ke **Settings → Pages**.
2. Pada bagian **Build and deployment**, pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
4. Tunggu beberapa menit. Website bisa diakses di:

```
https://USERNAME.github.io/NAMA-REPO/
```

## 🧭 Rencana Pengembangan

- [ ] Menghubungkan formulir kontak ke *backend* (misalnya PHP atau layanan form)
- [ ] Menyimpan pilihan tema secara permanen dengan `localStorage`
- [ ] Menambah artikel baru (misalnya MySQL dan Responsive Design)
- [ ] Mengisi halaman Syarat & Ketentuan dan Kebijakan Privasi
- [ ] Menyimpan gambar secara lokal agar bisa dibuka tanpa internet

## 👨‍💻 Pembuat

**Muhammad Raditya Duta Pratama** — Kelas X PPLG 1

---

<p align="center">Dibuat dengan ☕ dan banyak <i>error</i> yang akhirnya berhasil diperbaiki.<br>© 2026 WebEdu</p>

# 🚀 Portfolio Web — Rizky Pratama

Website portofolio pribadi interaktif dibangun dengan **ReactJS + Vite**, menggunakan CSS Murni (tanpa library UI).

---

## 📁 Struktur Folder

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigasi sticky + hamburger mobile
│   │   ├── Footer.jsx        # Footer dengan copyright
│   │   └── ProjectCard.jsx   # Kartu project individual
│   ├── data/
│   │   ├── projects.js       # Array data 7 project
│   │   └── skills.js         # Array data 8 skill
│   ├── pages/
│   │   ├── Home.jsx          # Halaman utama (hero section)
│   │   ├── About.jsx         # Profil, pendidikan, skill
│   │   ├── Project.jsx       # Daftar project + filter
│   │   └── Contact.jsx       # Form + Guest Book localStorage
│   ├── styles/
│   │   ├── global.css        # CSS variables, reset, utilities
│   │   ├── navbar.css        # Styles navbar
│   │   ├── home.css          # Styles home page
│   │   ├── about.css         # Styles about page
│   │   ├── project.css       # Styles project page
│   │   ├── contact.css       # Styles contact page
│   │   └── footer.css        # Styles footer
│   ├── App.jsx               # Root komponen + Router
│   └── main.jsx              # Entry point React
├── index.html
├── package.json
├── vite.config.js
└── vercel.json               # Config untuk deploy SPA di Vercel
```

---

## ⚡ Instalasi & Menjalankan Project

### 1. Clone atau download project ini

```bash
# Jika menggunakan git
git clone https://github.com/username/portfolio.git
cd portfolio

# Atau ekstrak ZIP dan masuk ke folder
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

> Perintah ini akan menginstall: `react`, `react-dom`, `react-router-dom`, `vite`, dan `@vitejs/plugin-react`

### 3. Jalankan development server

```bash
npm run dev
```

Buka browser di: **http://localhost:5173**

### 4. Build untuk production

```bash
npm run build
```

Output ada di folder `dist/`.

### 5. Preview build hasil production

```bash
npm run preview
```

---

## 🌐 Deploy ke Vercel

### Cara 1: Via Vercel Dashboard (Termudah)

1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com) → Login/Register
3. Klik **"New Project"**
4. Import repository GitHub kamu
5. Settings otomatis terdeteksi (Vite):
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Klik **Deploy** → Selesai! 🎉

### Cara 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy dari folder project
vercel

# Deploy ke production
vercel --prod
```

> File `vercel.json` sudah dikonfigurasi untuk SPA routing agar halaman seperti `/about`, `/project`, `/contact` tidak 404 saat diakses langsung.

---

## 🛠 Teknologi yang Digunakan

| Teknologi | Fungsi |
|-----------|--------|
| ReactJS 18 | UI library utama |
| Vite 5 | Build tool & dev server |
| React Router DOM v6 | Client-side routing (SPA) |
| Vanilla CSS | Styling tanpa library |
| localStorage | Persistensi data Guest Book |

---

## 📋 Fitur

- ✅ Single Page Application dengan React Router DOM
- ✅ Navbar sticky dengan hamburger menu responsif
- ✅ Hero section dengan profil dan statistik
- ✅ Halaman About dengan skill cards (dirender via `.map()`)
- ✅ Halaman Project dengan filter semester
- ✅ Guest Book dengan `useState` + `localStorage`
- ✅ Validasi form input
- ✅ Responsive untuk mobile & desktop
- ✅ Dark mode profesional
- ✅ Animasi CSS (fade in, slide, float)
- ✅ Siap deploy ke Vercel

---

## 💡 Cara Kustomisasi

### Ganti Data Pribadi
Edit file berikut:
- `src/pages/Home.jsx` — nama, bio, profesi
- `src/pages/About.jsx` — profil lengkap, pendidikan, pengalaman
- `src/data/projects.js` — tambah/edit project
- `src/data/skills.js` — tambah/edit skill
- `src/components/Footer.jsx` — nama di footer

### Ganti Foto Profil
Di `src/pages/Home.jsx`, ganti `<div className="profile-img-placeholder">` dengan:
```jsx
<img src="/foto-profil.jpg" alt="Foto Profil" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'var(--radius-lg)' }} />
```
Lalu letakkan foto di folder `public/`.

### Ganti Warna Tema
Edit variabel di `src/styles/global.css`:
```css
:root {
  --accent-primary: #6ee7b7;   /* warna utama */
  --accent-secondary: #818cf8; /* warna sekunder */
  --bg-primary: #0a0a0f;       /* background utama */
}
```

---

*Built with ❤️ menggunakan ReactJS + Vite*

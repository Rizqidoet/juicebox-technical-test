# Juicebox 2024 - Technical Assessment

This is a Next.js project using custom fonts, Lottie animations, and Swiper.js to deliver a dynamic multi-step form interface based on Juicebox design.

---

## 🔧 Tech Stack

| Tool        | Version     |
|-------------|-------------|
| Node.js     | 22.14.0     |
| npm         | 10.9.2      |
| Next.js     | 15.3.5      |
| React       | 19.0.0      |
| TailwindCSS | 3.4.17      |

---

## 🚀 Getting Started

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal:

### 1. Clone repository ini
```bash
git clone https://github.com/Rizqidoet/juicebox-technical-test.git
```

### 2. Masuk ke folder project
```bash
cd juicebox-technical-test
```

### 3. Install dependencies
```bash
npm install
```

### 4. Jalankan project
```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`.

---

## 📁 Struktur Folder

```
.
├── public/
│   ├── fonts/          # Custom fonts (Graphik, Sohne, etc)
│   ├── lottie/         # JSON animation files
│   └── ...
├── src/
│   ├── app/            # Next.js app directory (layout, pages)
│   ├── components/     # Reusable UI components
│   ├── styles/         # Global styles (Tailwind + fonts)
│   └── ...
├── tailwind.config.ts
├── README.md
└── package.json
```

---

## ✨ Fitur

- ✅ Custom font dengan `@font-face`
- ✅ Lottie animation menggunakan `lottie-react`
- ✅ Swiper untuk walkthrough step
- ✅ Responsive layout dengan TailwindCSS
- ✅ Mobile-first design sesuai Figma

---

## 🧠 Catatan Tambahan

- Semua font diletakkan di `/public/fonts` agar mudah diakses oleh global styles.
- File animasi `.json` diletakkan di `/public/lottie` dan diakses via `fetch`.
- Proyek ini menggunakan **App Router (Next.js 13+)**, bukan `pages`.

---
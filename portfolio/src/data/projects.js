// src/data/projects.js
// Data semua project yang dikerjakan selama kelas XI

const projects = [
  {
    id: 1,
    name: "Landing Page Sekolah",
    description:
      "Website landing page resmi sekolah yang menampilkan informasi umum, visi misi, fasilitas, dan kontak. Dibangun dengan layout responsif agar dapat diakses dari berbagai perangkat.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    semester: "Semester 1",
    icon: "🏫",
    color: "#4f46e5",
  },
  {
    id: 2,
    name: "Website Biodata",
    description:
      "Halaman biodata pribadi berbasis web yang memuat informasi diri, foto profil, hobi, dan cita-cita. Menggunakan CSS Grid dan Flexbox untuk layout yang rapi.",
    technologies: ["HTML5", "CSS3"],
    semester: "Semester 1",
    icon: "👤",
    color: "#0891b2",
  },
  {
    id: 3,
    name: "Kalkulator Sederhana",
    description:
      "Aplikasi kalkulator berbasis web dengan operasi aritmatika dasar (tambah, kurang, kali, bagi). Mengimplementasikan logika JavaScript murni tanpa library tambahan.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    semester: "Semester 1",
    icon: "🧮",
    color: "#059669",
  },
  {
    id: 4,
    name: "To Do List",
    description:
      "Aplikasi manajemen tugas interaktif yang memungkinkan pengguna menambah, menyelesaikan, dan menghapus tugas. Data disimpan menggunakan localStorage agar tidak hilang saat halaman direfresh.",
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    semester: "Semester 1",
    icon: "✅",
    color: "#d97706",
  },
  {
    id: 5,
    name: "Website Vocab Inggris",
    description:
      "Platform belajar kosakata Bahasa Inggris interaktif dengan fitur flashcard, quiz pilihan ganda, dan riwayat skor. Membantu siswa belajar dengan cara yang menyenangkan.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    semester: "Semester 2",
    icon: "📚",
    color: "#7c3aed",
  },
  {
    id: 6,
    name: "Web Portofolio",
    description:
      "Website portofolio pribadi ini — dibangun menggunakan ReactJS dengan Vite sebagai build tool. Menampilkan semua project, skill, dan informasi kontak dengan desain modern dan responsif.",
    technologies: ["ReactJS", "Vite", "React Router", "CSS3"],
    semester: "Semester 2",
    icon: "💼",
    color: "#db2777",
  },
  {
    id: 7,
    name: "Toko Online Mini",
    description:
      "Simulasi halaman toko online sederhana dengan katalog produk, fitur pencarian, dan keranjang belanja. Menggunakan array JavaScript untuk menyimpan data produk secara lokal.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    semester: "Semester 2",
    icon: "🛒",
    color: "#ea580c",
  },
]

export default projects

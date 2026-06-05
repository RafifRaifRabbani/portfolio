# Jurnal Vibecoding & Rekayasa Perangkat Lunak

## Nama Proyek

Website Portofolio Personal ReactJS

---

# 1. Definisi Stack & Arsitektur

Pada proyek ini saya menggunakan beberapa teknologi utama yaitu:

* ReactJS sebagai library untuk membangun antarmuka pengguna.
* Vite sebagai build tool karena proses inisialisasi dan development lebih cepat dibandingkan Create React App.
* React Router DOM untuk mengatur perpindahan halaman dalam konsep Single Page Application (SPA).
* CSS Murni (Vanilla CSS) untuk styling sesuai ketentuan tugas.
* LocalStorage untuk menyimpan data pesan pada halaman Contact.

Struktur folder saya pisahkan berdasarkan fungsi masing-masing agar kode lebih mudah dikelola dan dikembangkan.

Struktur folder:

src/
├── components/
├── pages/
├── data/
├── styles/
├── App.jsx
└── main.jsx

Alasan pemisahan:

* Folder components digunakan untuk komponen yang dapat digunakan kembali seperti Navbar, Footer, dan ProjectCard.
* Folder pages digunakan untuk halaman utama seperti Home, About, Project, dan Contact.
* Folder data digunakan untuk menyimpan data statis berupa Array dan Object JavaScript.
* Folder styles digunakan untuk memisahkan file CSS berdasarkan halaman agar lebih terorganisir.

Dengan struktur ini, setiap bagian aplikasi memiliki tanggung jawab yang jelas sehingga memudahkan proses maintenance dan debugging.

---

# 2. Strategi Prompting

Selama pengembangan proyek, saya menggunakan AI sebagai asisten pemrograman untuk membantu menghasilkan struktur kode dan menyelesaikan beberapa fitur.

Contoh Prompt 1:

"Bertindaklah sebagai Senior React Developer. Buatkan website portofolio menggunakan ReactJS dengan Vite dan React Router DOM. Gunakan CSS murni tanpa framework. Pisahkan kode ke dalam folder components, pages, data, dan styles. Pastikan halaman Project menggunakan metode .map() untuk merender data dari Array of Objects."

Tujuan prompt ini adalah untuk menghasilkan struktur proyek yang sesuai dengan arsitektur yang saya rencanakan.

Contoh Prompt 2:

"Buatkan fitur Contact menggunakan useState dan localStorage. Data nama, email, dan pesan harus tetap tersimpan meskipun halaman direfresh. Tampilkan juga daftar pesan yang tersimpan sebagai Guest Book."

Tujuan prompt ini adalah untuk membantu merancang logika penyimpanan data lokal menggunakan React Hooks dan localStorage.

---

# 3. Log Problem Solving

Salah satu masalah yang saya temui adalah data pada halaman Contact tidak tersimpan setelah halaman direfresh.

Awalnya saya hanya menggunakan useState untuk menyimpan data form. Setelah pengguna merefresh halaman, seluruh data kembali kosong karena state React hanya tersimpan selama aplikasi berjalan.

Saya kemudian menganalisis bahwa diperlukan media penyimpanan yang dapat mempertahankan data di browser. Oleh karena itu saya memutuskan menggunakan localStorage.

Saya meminta bantuan AI untuk menjelaskan cara menghubungkan useState dengan localStorage. Setelah memahami penjelasannya, saya menerapkan useEffect untuk:

1. Membaca data dari localStorage saat aplikasi pertama kali dimuat.
2. Menyimpan perubahan data ke localStorage setiap kali data guest book berubah.

Dari permasalahan ini saya memahami bahwa state React bersifat sementara, sedangkan localStorage dapat digunakan untuk mempertahankan data meskipun halaman direfresh atau browser ditutup.

Dengan solusi tersebut, fitur Contact dapat bekerja sesuai kebutuhan tugas dan pengalaman pengguna menjadi lebih baik.

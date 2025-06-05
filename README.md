Anggota Kelompok:
- Shofia Nurul Huda (2208107010015)
- Nisa Rianti (2208107010018)
- Jihan Nabilah (2208107010035)

# 🎉 Buku Tamu Pesta Ulang Tahun

Aplikasi web sederhana yang memungkinkan pengguna mengisi data tamu (nama, email, dan pesan ucapan) secara langsung ke dalam sistem. Aplikasi ini dibuat menggunakan Node.js, Express, dan SQLite dengan tampilan minimalis berbasis EJS. Data yang dimasukkan akan disimpan dalam database SQLite secara sementara di memori, cocok untuk keperluan demo atau testing.

---

Aplikasi ini memiliki fitur utama berupa form input tamu yang mencakup nama, email, dan pesan ucapan. Setiap isian divalidasi agar tidak kosong. Setelah tamu mengisi form, data disimpan ke database SQLite dan pengguna akan menerima notifikasi berupa flash message sebagai konfirmasi keberhasilan pengisian. Selain itu, terdapat halaman daftar tamu yang menampilkan seluruh data tamu dalam bentuk tabel HTML secara real-time.

Dari sisi teknologi, proyek ini menggunakan Node.js sebagai runtime JavaScript, Express.js sebagai web framework, dan SQLite sebagai database ringan berbasis file atau in-memory. Template engine yang digunakan adalah EJS (Embedded JavaScript) yang memungkinkan pembuatan halaman dinamis. Untuk menyimpan sesi dan menampilkan notifikasi, digunakan library tambahan seperti `express-session` dan `connect-flash`.

Untuk menjalankan aplikasi ini, ikuti langkah-langkah berikut:

1. **Clone repositori**:

   ```bash
   git clone https://github.com/Nisarianti2218/Tugas_6_LABPPL_Kel3.git
   cd Tugas_6_LABPPL_Kel3

2. **Install dependens**:
   npm install

3. **Jalankan server**:
   node app.js

4. **Buka di browser**:
   http://localhost:3000

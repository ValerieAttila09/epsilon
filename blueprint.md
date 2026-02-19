# Blueprint Aplikasi Kanji

## Ikhtisar

Aplikasi ini adalah situs web e-commerce modern yang dibuat dengan Next.js, menampilkan berbagai produk. Aplikasi ini memiliki navbar interaktif dengan menu dropdown beranimasi dan akan menampilkan berbagai bagian konten di halaman utama.

## Fitur & Desain yang Diimplementasikan

*   **Framework**: Next.js dengan App Router
*   **Styling**: Tailwind CSS
*   **Animasi**: GSAP
*   **Fitur Utama**:
    *   **Navbar Interaktif**:
        *   Navbar tetap di bagian atas dengan logo, tautan navigasi, dan ikon pengguna.
        *   Efek hover pada tautan navigasi menampilkan submenu yang relevan.
        *   Animasi GSAP yang halus untuk membuka/menutup dan mengubah ukuran wadah submenu.
        *   Animasi fade-in dan slide-up untuk konten submenu saat muncul.
        *   Animasi yang kuat yang menangani interaksi cepat tanpa bug.
    *   **Keamanan Tipe**: Kode dasar diketik sepenuhnya menggunakan TypeScript, dengan semua antarmuka utama didefinisikan dalam `types/interfaces.ts`.
    *   **Bagian Hero**: Bagian hero yang menarik secara visual dengan gambar latar belakang, hamparan teks, dan ajakan bertindak.
    *   **Bagian Berita & Acara**: Bagian untuk menampilkan berita dan acara terbaru, masing-masing dengan data dari sumber terpisah.

## Rencana Saat Ini: Selesai

Struktur data telah disederhanakan sesuai permintaan, dan semua komponen utama telah dibuat dan diintegrasikan ke dalam halaman utama.

import "./globals.css";
import Navbar from "../component/Navbar"; // pastikan penulisan 'components', bukan 'component'
import Footer from "../component/Footer";

export const metadata = {
  title: "Tugas.In",
  description: "Layanan pembuatan tugas kuliah, tugas sekolah, dan konsultasi akademik terpercaya.",
  other: {
    "google-site-verification": "kode_verifikasi_anda"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        {/* Pastikan Navbar bersifat client component */}
        <Navbar />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

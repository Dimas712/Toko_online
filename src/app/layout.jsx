import "./globals.css";
import Navbar from "../component/Navbar"; // pastikan penulisan 'components', bukan 'component'
import Footer from "../component/Footer";

export const metadata = {
  title: "Tugas.In",
  description: "Platform jasa tugas dan skripsi",
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

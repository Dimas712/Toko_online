import "./globals.css";
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

export const metadata = {
  title: "Buitenzorg Shoes",
  description: "Contoh navbar Shopee dengan Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

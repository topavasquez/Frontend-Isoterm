import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Isoterm Chile',
  description: "Sitio web de Isoterm Chile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

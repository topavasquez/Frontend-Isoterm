import "./globals.css";
import Header from './components/Header'

export const metadata = {
  title: 'Isoterm Chile',
  description: "Sitio web de Isoterm Chile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <>{children}</>
      </body>
    </html>
  );
}

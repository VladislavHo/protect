import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Protekt",
  description: "Best and safe VPN",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        <main>
           {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

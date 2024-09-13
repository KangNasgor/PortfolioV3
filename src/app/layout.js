import { Inter, Lato, Montserrat, Oswald, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lato",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montserrat",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-oswald"
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
export const metadata = {
  title: "W-Portfolio",
  description: "NUH UH",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${montserrat.variable} ${oswald.variable} ${poppins.variable}`}>
      <div className="flex h-screen absolute md:fixed flex-col md:flex-row -z-30 text-center md:justify-center w-full items-center">
          <div className="text-9xl md:text-11xl md:text-normal text-stroke text-black opacity-95 md:opacity-50">L</div>
          <div className="text-9xl md:text-11xl md:text-normal text-stroke text-black opacity-95 md:opacity-50">E</div>
          <div className="text-9xl md:text-11xl md:text-normal text-stroke text-black opacity-95 md:opacity-50">O</div>
          <div className="text-9xl md:text-11xl md:text-normal text-stroke text-black opacity-95 md:opacity-50">N</div>
          <div className="text-9xl md:text-11xl md:text-normal text-stroke text-black opacity-95 md:opacity-50">A</div>
          <div className="text-9xl md:text-11xl md:text-normal text-stroke text-black opacity-95 md:opacity-50">R</div>
          <div className="text-9xl md:text-11xl md:text-normal text-stroke text-black opacity-95 md:opacity-50">D</div>
        </div>
        <Navbar />
        <div className="relative z-20 min-h-screen flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

import { Inter, Lato, Montserrat, Oswald } from "next/font/google";
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
export const metadata = {
  title: "W-Portfolio",
  description: "NUH UH",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${montserrat.variable} ${oswald.variable}`}>
      <div className="flex h-screen absolute md:fixed flex-col md:flex-row -z-30 text-center md:justify-center w-full items-center">
          <div className="text-10xl md:text-normal text-stroke text-black opacity-50">L</div>
          <div className="text-10xl md:text-normal text-stroke text-black opacity-50">E</div>
          <div className="text-10xl md:text-normal text-stroke text-black opacity-50">O</div>
          <div className="text-10xl md:text-normal text-stroke text-black opacity-50">N</div>
          <div className="text-10xl md:text-normal text-stroke text-black opacity-50">A</div>
          <div className="text-10xl md:text-normal text-stroke text-black opacity-50">R</div>
          <div className="text-10xl md:text-normal text-stroke text-black opacity-50">D</div>
        </div>
        <Navbar />
        <div className="relative z-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

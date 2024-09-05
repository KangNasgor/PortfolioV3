import { Inter, Lato, Montserrat } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
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
export const metadata = {
  title: "W-Portfolio",
  description: "NUH UH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${montserrat.variable}`}>
        <div className="w-full fixed h-screen flex justify-center  items-center z-0">
          <h1 className="text-10xl text-stroke text-black opacity-50">LEONARD</h1>
        </div>
        <Navbar />
        <div className="relative z-20">{children}</div>
      </body>
    </html>
  );
}

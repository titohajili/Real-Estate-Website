import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import RespomsiveNav from "@/components/Home/Navbar/RespomsiveNav";
import Footer from "../components/Home/Footer/Fotter"
import ScrollTop from "@/components/Helper/ScrollTop";

const font = Roboto({
  weight: ["100", "300","400","500", "700", "900"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Real Estate Project | Next.js",
  description: "Real Estate Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} >
        <RespomsiveNav/>
        {children}
        <Footer/>
        <ScrollTop/>
      </body>
    </html>
  );
} 
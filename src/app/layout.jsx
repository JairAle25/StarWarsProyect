import { Montserrat } from "next/font/google";
import Header from "./header";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Star Wars Proyect",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} overflow-x-hidden`}>
        <Header></Header>
        {children}
        </body>
    </html>
  );
}

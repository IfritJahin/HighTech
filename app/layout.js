import { Inter } from "next/font/google";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./bootstrap_component/BootstrapClient";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "High Tech IT",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}

"use client";

import Image from "next/image";
import Home_page from "@/components/business_home/Home";
import Footer from "@/components/business_footer/Footer";
import Header from "@/components/business_header/Header";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Home_page />
      <Footer />
    </main>
  );
}

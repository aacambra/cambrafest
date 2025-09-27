"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const element = document.getElementById("cambrafest");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div id="cambrafest">
        <Image
          src={`/board_2.jpeg`}
          alt="Cambrafest Background"
          width={500}
          height={750}
          priority
        />
      </div>
      <Footer />
    </div>
  );
}

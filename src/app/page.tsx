"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { use, useEffect } from "react";
import Image from "next/image";

const repoName = "cambrafest";
const assetPrefix = process.env.NODE_ENV === "production" ? `/${repoName}` : "";

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
          src={`${assetPrefix}/board_2.jpeg`}
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

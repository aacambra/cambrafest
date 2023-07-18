"use client";

import styles from "./page.module.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    const element = document.getElementById("cambrafest");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleBOLClick = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = "https://cambrafest.bol.pt/";
    link.click();
  };

  return (
    <>
      <Head>
        <title>Cambrafest - Are You Ready?</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <main id="cambrafest" className={` ${styles.blur}`} />
        <div onClick={handleBOLClick} className={styles.bolDiv} />
        <Footer />
      </div>
    </>
  );
}

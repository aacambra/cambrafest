"use client";

import { useEffect } from "react";

export default function Info() {
  useEffect(() => {
    window.location.href = "https://linktr.ee/cambrafest";
  }, []);

  return <p>Redirecionando para o link do site...</p>;
}

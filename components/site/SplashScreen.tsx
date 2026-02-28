"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function SplashScreen() {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("splashPlayed")) return;
    setShow(true);

    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const hideTimer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("splashPlayed", "true");
    }, 2700); // 2s display + 700ms fade-out

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-charcoal ${
        fadeOut ? "animate-fade-out" : ""
      }`}
    >
      <Image
        src="/logo.png"
        alt="Montana Medical Courier"
        width={480}
        height={480}
        priority
        className="w-64 max-w-md animate-fade-in-scale md:w-auto md:max-w-xl"
      />
    </div>
  );
}

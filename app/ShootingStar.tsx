"use client";

import { useEffect, useState } from "react";

export default function ShootingStar() {
  const [shooting, setShooting] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setShooting(true);
      hideTimer = setTimeout(() => setShooting(false), 1800);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!shooting) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      <div className="shooting-star" />
    </div>
  );
}

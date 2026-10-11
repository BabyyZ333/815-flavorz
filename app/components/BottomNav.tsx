"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname === "/login") return null;

  const items = [
    { name: "Home", icon: "⌂", href: "/" },
    { name: "Categories", icon: "▦", href: "/collection" },
  ];

  return (
    <>
      <div style={{ height: 85 }} />

      <nav
        aria-label="Bottom navigation"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          display: "flex",
          background: "#101015",
          borderTop: "1px solid #D4AF3755",
          padding: "12px 8px",
          paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
        }}
      >
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              textDecoration: "none",
              color: pathname === item.href ? "#D4AF37" : "#FFFFFF",
              fontSize: 12,
            }}
          >
            <span style={{ fontSize: 25 }}>{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
}

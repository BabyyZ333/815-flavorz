"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function BottomNav() {
  const pathname = usePathname();
  const [showFavorites, setShowFavorites] = useState(false);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    display: "flex",
    justifyContent: "space-around",
    background: "rgba(15, 15, 22, 0.96)",
    borderTop: "1px solid #ffffff30",
    backdropFilter: "blur(18px)",
    padding: "12px 5px",
    paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
  };

  const itemStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    flex: 1,
    textAlign: "center",
    fontSize: 11,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  };

  return (
    <>
      <div style={{ height: 80 }} />

      <nav style={navStyle} aria-label="Main navigation">
        <Link href="/" style={{
          ...itemStyle,
          color: pathname === "/" ? "#aaa7ff" : "white"
        }}>
          <span style={{ fontSize: 25 }}>⌂</span>
          Home
        </Link>

        <Link href="/collection" style={itemStyle}>
          <span style={{ fontSize: 25 }}>▦</span>
          Categories
        </Link>

        <button
          type="button"
          onClick={() => setShowFavorites(true)}
          style={{ ...itemStyle, background: "none", border: 0 }}
        >
          <span style={{ fontSize: 25 }}>♡</span>
          Favorites
        </button>

        <Link href="/login" style={itemStyle}>
          <span style={{ fontSize: 25 }}>♛</span>
          VIP
        </Link>
      </nav>

      {showFavorites && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Favorites"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "#000c",
            display: "grid",
            placeItems: "center",
            padding: 24,
          }}
        >
          <div style={{
            background: "#191923",
            color: "white",
            borderRadius: 22,
            padding: 30,
            textAlign: "center",
            width: "100%",
            maxWidth: 340,
          }}>
            <h2 style={{ fontSize: 24 }}>♡ Favorites</h2>
            <p style={{ marginTop: 12 }}>
              Favorites are coming soon!
            </p>
            <button
              onClick={() => setShowFavorites(false)}
              style={{
                marginTop: 20,
                padding: "12px 28px",
                borderRadius: 12,
                background: "#7775ff",
                color: "white",
                border: 0,
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

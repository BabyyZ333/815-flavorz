"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.replace("/");
        router.refresh();
      } else {
        setError("Incorrect password. Try again.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url('/password-bg.png') center center / cover no-repeat",
        padding: "20px",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: "380px",
          padding: "35px 25px",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.72)",
          border: "2px solid #D4AF37",
          borderRadius: "20px",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          815 FLAVORZ
        </h1>

        <p style={{ marginBottom: "25px" }}>
          🔒 Enter Password to Access
        </p>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: 14,
            borderRadius: 10,
            fontSize: 16,
            boxSizing: "border-box",
          }}
        />

        {error && <p style={{ color: "#ff9ab8" }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            marginTop: 20,
            padding: 14,
            border: "none",
            borderRadius: 10,
            background: "#D4AF37",
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {loading ? "Checking..." : "ENTER WEBSITE"}
        </button>
      </form>
    </main>
  );
}

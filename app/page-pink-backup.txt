"use client";

import { useState } from "react";

const categories = [
  { name: "Pre-Rolls", left: "1.5%", top: "0%" },
  { name: "Flower", left: "34%", top: "0%" },
  { name: "Disposables & Cartridges", left: "66.5%", top: "0%" },
  { name: "Edibles", left: "1.5%", top: "51%" },
  { name: "Moonrocks", left: "34%", top: "51%" },
  { name: "Snowcaps", left: "66.5%", top: "51%" },
];

const flowerPrices = {
  Originals: [
    ["3.5g", "$20"],
    ["7g", "$40"],
    ["14g", "$60"],
    ["28g ZIP", "$100"],
  ],
  Exotics: [
    ["3.5g", "$30"],
    ["7g", "$50"],
    ["14g", "$80"],
    ["28g ZIP", "$130"],
  ],
};

export default function Home() {
  const [selected, setSelected] = useState("");
  const [flowerType, setFlowerType] =
    useState<"Originals" | "Exotics" | "">("");

  function close() {
    setSelected("");
    setFlowerType("");
  }

  return (
    <main style={{ minHeight: "100vh", background: "#050005" }}>
      <div
        style={{
          position: "relative",
          maxWidth: 1536,
          margin: "auto",
        }}
      >
        <img
          src="/815flavorz-homepage.png"
          alt="815 Flavorz tropical sunset homepage"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />

        <button
          aria-label="Explore collections"
          onClick={() =>
            document.getElementById("categories")?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
          style={{
            position: "absolute",
            left: "29%",
            top: "46%",
            width: "20%",
            height: "7%",
            opacity: 0,
            cursor: "pointer",
          }}
        />

        <div
          id="categories"
          style={{
            position: "absolute",
            top: "55%",
            left: 0,
            width: "100%",
            height: "38%",
          }}
        >
          {categories.map((category) => (
            <button
              key={category.name}
              aria-label={`Explore ${category.name}`}
              onClick={() => {
                setSelected(category.name);
                setFlowerType("");
              }}
              style={{
                position: "absolute",
                left: category.left,
                top: category.top,
                width: "32%",
                height: "47%",
                opacity: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected}
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            display: "grid",
            placeItems: "center",
            padding: 16,
            zIndex: 100,
            overflowY: "auto",
          }}
        >
          <section
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "min(480px, 100%)",
              border: "2px solid #ff4ba7",
              borderRadius: 22,
              background: "#16051b",
              boxShadow: "0 0 35px #ff149366",
              padding: 28,
              textAlign: "center",
              color: "white",
            }}
          >
            <button
              onClick={close}
              aria-label="Close"
              style={{
                float: "right",
                color: "#ff7fc1",
                fontSize: 26,
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <h2
              style={{
                fontSize: 30,
                fontWeight: 900,
                color: "#ff69b4",
                marginBottom: 24,
                textShadow: "0 0 12px #ff1493",
              }}
            >
              {selected}
            </h2>

            {selected === "Flower" ? (
              <>
                {!flowerType ? (
                  <div style={{ display: "grid", gap: 14 }}>
                    {(["Originals", "Exotics"] as const).map(
                      (type) => (
                        <button
                          key={type}
                          onClick={() => setFlowerType(type)}
                          style={{
                            padding: 20,
                            border: "1px solid #ff69b4",
                            borderRadius: 14,
                            background: "#320c29",
                            color: "#ff9bd0",
                            fontSize: 22,
                            fontWeight: 800,
                            cursor: "pointer",
                          }}
                        >
                          {type} →
                        </button>
                      )
                    )}
                  </div>
                ) : (
                  <>
                    <h3
                      style={{
                        fontSize: 24,
                        color: "#ff9bd0",
                        marginBottom: 18,
                      }}
                    >
                      {flowerType}
                    </h3>

                    {flowerPrices[flowerType].map(([size, price]) => (
                      <div
                        key={size}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "14px 8px",
                          borderBottom: "1px solid #ff69b455",
                          fontSize: 19,
                        }}
                      >
                        <span>{size}</span>
                        <strong style={{ color: "#ff9bd0" }}>
                          {price}
                        </strong>
                      </div>
                    ))}

                    <button
                      onClick={() => setFlowerType("")}
                      style={{
                        marginTop: 22,
                        color: "#ff9bd0",
                        cursor: "pointer",
                      }}
                    >
                      ← Back to Flower
                    </button>
                  </>
                )}
              </>
            ) : (
              <p
                style={{
                  fontSize: 23,
                  color: "#ffb1da",
                  padding: "30px 0",
                }}
              >
                COMING SOON
              </p>
            )}

            <button
              onClick={close}
              style={{
                display: "block",
                width: "100%",
                marginTop: 28,
                padding: 14,
                borderRadius: 12,
                background: "#ff4ba7",
                color: "#16051b",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              BACK TO HOME
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

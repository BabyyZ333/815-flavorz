"use client";

import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const playerRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = playerRef.current;
    if (!iframe) return;

    iframe.src =
      "https://www.youtube.com/embed/wjDtTv0n0Fw" +
      "?autoplay=1" +
      "&mute=0" +
      "&loop=1" +
      "&playlist=wjDtTv0n0Fw,4biLAPKXVls,D49adOjVNcs" +
      "&playsinline=1";
  }, []);

  return (
    <iframe
      ref={playerRef}
      title="815 Flavorz Background Music"
      allow="autoplay; encrypted-media"
      tabIndex={-1}
      aria-hidden="true"
      style={{
        position: "fixed",
        width: "1px",
        height: "1px",
        opacity: 0,
        pointerEvents: "none",
        border: 0,
      }}
    />
  );
}

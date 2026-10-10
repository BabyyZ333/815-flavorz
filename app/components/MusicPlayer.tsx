"use client";

import { useState } from "react";

const songs = [
  "wjDtTv0n0Fw",
  "4biLAPKXVls",
  "D49adOjVNcs",
];

export default function MusicPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="mb-3 w-[min(340px,calc(100vw-32px))] overflow-hidden rounded-xl border border-[#D4AF37] bg-black p-3 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-bold text-[#D4AF37]">
              🎵 815 MUSIC
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-white"
              aria-label="Minimize music player"
            >
              ✕
            </button>
          </div>

          <iframe
            title="815 Flavorz YouTube Playlist"
            width="100%"
            height="190"
            src={`https://www.youtube.com/embed/${songs[0]}?playlist=${songs.join(",")}&loop=1`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />

          <p className="mt-2 text-center text-xs text-gray-400">
            Press play to listen • 3 songs
          </p>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="rounded-full border border-[#D4AF37] bg-black px-5 py-3 font-bold text-[#D4AF37] shadow-xl"
      >
        🎵 {open ? "HIDE MUSIC" : "PLAY MUSIC"}
      </button>
    </div>
  );
}

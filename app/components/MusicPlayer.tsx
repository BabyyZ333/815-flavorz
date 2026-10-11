"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT?: {
      Player: new (
        id: string,
        options: Record<string, unknown>
      ) => YouTubePlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

type YouTubePlayer = {
  cuePlaylist: (options: Record<string, unknown>) => void;
  playVideoAt: (index: number) => void;
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getPlaylist: () => string[];
  getPlaylistIndex: () => number;
  destroy: () => void;
};

const PLAYLIST_ID = "PLRBbZL7jXdoPVZGGznE2Zgmr1cwUKE5lz";
const CLIP_SECONDS = 16;

// Add verified first-verse timestamps here later.
// Example: "videoId": 23
const verseStarts: Record<string, number> = {};

export default function MusicPlayer() {
  const player = useRef<YouTubePlayer | null>(null);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let seeking = false;

    const startClip = () => {
      if (!player.current || cancelled) return;

      const playlist = player.current.getPlaylist() || [];
      const index = player.current.getPlaylistIndex();
      const videoId = playlist[index];

      if (!videoId) return;

      seeking = true;
      player.current.seekTo(verseStarts[videoId] ?? 0, true);

      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        if (!player.current || cancelled) return;

        const count = player.current.getPlaylist()?.length || 0;
        if (!count) return;

        const next = (player.current.getPlaylistIndex() + 1) % count;
        player.current.playVideoAt(next);
      }, CLIP_SECONDS * 1000);
    };

    const initialize = () => {
      if (cancelled || !window.YT || player.current) return;

      player.current = new window.YT.Player("815-youtube-player", {
        width: 200,
        height: 200,
        playerVars: {
          autoplay: 1,
          controls: 0,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: { target: YouTubePlayer }) => {
            event.target.cuePlaylist({
              listType: "playlist",
              list: PLAYLIST_ID,
              index: 0,
            });
            event.target.playVideo();
          },
          onStateChange: (event: { data: number }) => {
            if (event.data === 1) {
              if (seeking) {
                seeking = false;
              } else {
                startClip();
              }
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      initialize();
    } else {
      window.onYouTubeIframeAPIReady = initialize;

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      player.current?.destroy();
      player.current = null;
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: "-300px",
        top: "-300px",
        width: "200px",
        height: "200px",
        pointerEvents: "none",
      }}
    >
      <div id="815-youtube-player" />
    </div>
  );
}

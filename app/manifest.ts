import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "815 FLAVORZ",
    short_name: "815",
    description: "Welcome to 815 FLAVORZ",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
  };
}

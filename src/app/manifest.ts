import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Witty",
    short_name: "Witty",
    description: "Fun, Game, and the stuff. All in one",
    start_url: "/",
    background_color: "#fff",
    theme_color: "#fff",
    display: "standalone",
    orientation: "portrait",
    categories: ["social", "entertainment"],
    icons: [
      {
        src: "/favicon.ico",
        type: "image/x-icon",
        sizes: "any"
      }
    ],
  };
}

import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Witty",
    short_name: "Witty",
    description: "Fun, entertainment and addiction. You want it, you have it.",
    start_url: "/",
    background_color: "#fff",
    theme_color: "#fff",
    display: "standalone",
    orientation: "portrait",
    categories: ["social", "entertainment", "fun", "addiction"],
    icons: [
      {
        src: "/favicon.ico",
        type: "image/x-icon",
        sizes: "any"
      }
    ],
  };
}

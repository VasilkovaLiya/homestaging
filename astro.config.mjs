// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { SITE } from "./src/consts";

import sitemap from "@astrojs/sitemap";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: SITE.CANONICAL_URL,
  base: "/homestaging",
  output: "static",

  build: {
    inlineStylesheets: "always",
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/montserrat-v31-cyrillic_latin-regular.woff2"],
            weight: "400",
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/montserrat-v31-cyrillic_latin-500.woff2"],
            weight: "500",
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/montserrat-v31-cyrillic_latin-800.woff2"],
            weight: "800",
            style: "normal",
            display: "swap",
          },
         
        ],
      },
    },   
    {
      provider: fontProviders.local(),
      name: "Unbounded",
      cssVariable: "--font-unbounded",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/unbounded-v12-cyrillic_latin-500.woff2"],
            weight: "500",
            style: "normal",
            display: "swap",
          },
        ],
      },
    }
  ],

  integrations: [sitemap(), favicons()],

  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "object-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "img-src 'self' https://res.cloudinary.com/dellp9a4z/ data:",
        "media-src 'self' https://res.cloudinary.com/dellp9a4z/",
        "font-src 'self' data:",
        "frame-src 'self' https://www.google.com/",
        "worker-src 'self'",
        "manifest-src 'none'",
        "form-action 'self'",
      ],
      styleDirective: {
        resources: ["'self'", "'unsafe-hashes'"],
        hashes: [
          "sha256-WUDfWmQP7MHmJVPG87eP2N5ZE7RjDV9+6B/uKHMlSAE=",
          "sha256-P+wlFJoxzaX+ilJ24YqyBBK/sG4spb5yZWdYMQspG1I=",
          "sha256-UI6m4fBliGqfCKOZ9qe8Jk7vapco4kY9asvtzmDNHtI=",
          "sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
          "sha256-kdaXPEOwTw3zyiuCzGv1vpohcW9SqOWq8k6gy2OWgtI=",
        ],
      },
    },
  },
});

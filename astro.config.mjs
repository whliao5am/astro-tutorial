import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://whliao5am.github.io",
  base: "/astro-tutorial",
  integrations: [preact()]
});
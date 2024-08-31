import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        icon({
            include: {
                // Include only three `mdi` icons in the bundle
                mdi: ["account", "account-plus", "account-minus"],
                // Include all `uis` icons
                uis: ["*"],
            },
        }),
    ],
});

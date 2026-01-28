import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
    accessToken: process.env.STORYBLOK_TOKEN || "YOUR_STORYBLOK_TOKEN",
    use: [apiPlugin],
    components: {
        // Add components here
    },
});

export const storyblokConfig = {
    // any extra config
};

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { BlogPost } from "@/components/BlogPost";
import { Page } from "@/components/Page";

storyblokInit({
    accessToken: process.env.STORYBLOK_TOKEN || "YOUR_STORYBLOK_TOKEN",
    use: [apiPlugin],
    components: {
        blog: BlogPost,
        "blog-post": BlogPost,
        page: Page,
    },
});

export const storyblokConfig = {
    // any extra config
};

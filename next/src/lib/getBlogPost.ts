import { getStoryblokApi } from "@storyblok/react";

export async function getBlogPost(slug: string) {
    try {
        const storyblokApi = getStoryblokApi();
        // Fetch the Space version to get the latest CV (Cache Version)
        const space = await storyblokApi.get("cdn/spaces/me", {});
        const cv = space.data.space.version;

        const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
            version: "published",
            cv,
        });
        return data.story;
    } catch (e) {
        console.log("Error fetching story", e);
        return null;
    }
}

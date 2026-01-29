import { getStoryblokApi } from "@storyblok/react";

export async function getBlogPost(slug: string) {
    try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
            version: "published",
        });
        return data.story;
    } catch (e) {
        console.log("Error fetching story", e);
        return null;
    }
}

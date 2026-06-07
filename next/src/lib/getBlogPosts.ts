import { getStoryblokApi } from "@storyblok/react";

export type BlogPostSummary = {
    slug: string;
    lastModified: Date;
};

export async function getAllBlogPosts(): Promise<BlogPostSummary[]> {
    try {
        const storyblokApi = getStoryblokApi();
        const space = await storyblokApi.get("cdn/spaces/me", {});
        const cv = space.data.space.version;

        const posts: BlogPostSummary[] = [];
        let page = 1;
        const perPage = 100;

        while (true) {
            const { data, headers } = await storyblokApi.get("cdn/stories", {
                version: "published",
                starts_with: "blog/",
                is_startpage: false,
                page,
                per_page: perPage,
                cv,
            });

            for (const story of data.stories) {
                posts.push({
                    slug: story.slug,
                    lastModified: new Date(
                        story.published_at || story.updated_at || story.first_published_at,
                    ),
                });
            }

            const total = Number((headers as { total?: string }).total || 0);
            if (page * perPage >= total) break;
            page++;
        }

        return posts;
    } catch (e) {
        console.error("Error fetching blog posts for sitemap", e);
        return [];
    }
}

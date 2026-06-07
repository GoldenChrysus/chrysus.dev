import type { MetadataRoute } from "next";
import "@/lib/storyblok";
import { getAllBlogPosts } from "@/lib/getBlogPosts";

const siteUrl = "https://chrysus.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogPosts = await getAllBlogPosts();

    const latestPostDate = blogPosts.reduce<Date | undefined>((latest, post) => {
        if (!latest || post.lastModified > latest) return post.lastModified;
        return latest;
    }, undefined);

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: latestPostDate ?? new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: latestPostDate ?? new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: post.lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
}

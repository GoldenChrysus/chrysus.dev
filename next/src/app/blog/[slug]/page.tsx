import { getStoryblokApi } from "@storyblok/react";
import "@/lib/storyblok";
import { Container, Title } from '@mantine/core';
import { Header } from '@/components/Header';
import { StoryblokStory } from "@storyblok/react/rsc";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let story = null;

    try {
        const storyblokApi = getStoryblokApi();
        const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
            version: "draft",
        });
        story = data.story;
    } catch (e) {
        console.log("Error fetching story", e);
    }

    if (!story) {
        return (
            <Container mt={100}>
                <Header />
                <Title>Post not found</Title>
            </Container>
        )
    }

    return (
        <main>
            <Header />
            <Container size="md" py="xl" mt={100}>
                <Title order={1} mb="md">{story.name || "Untitled"}</Title>
                <StoryblokStory story={story} />
            </Container>
        </main>
    );
}

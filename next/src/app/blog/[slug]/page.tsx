import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import "@/lib/storyblok";
import { Container, Title, Text, Box } from '@mantine/core';
import { Header } from '@/components/Header';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let story = null;

    try {
        const storyblokApi = getStoryblokApi();
        if (storyblokApi) {
            const { data } = await storyblokApi.get(`cdn/stories/blog/${slug}`, {
                version: "draft",
            });
            story = data.story;
        }
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
                <StoryblokComponent blok={story.content} />
            </Container>
        </main>
    );
}

import { getStoryblokApi } from "@storyblok/react";
import "@/lib/storyblok";
import { Container, Title } from '@mantine/core';
import { Header } from '@/components/Header';
import { StoryblokStory } from "@storyblok/react/rsc";
import { DateDisplay } from '@/components/DateDisplay';

import { getBlogPost } from '@/lib/getBlogPost';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const story = await getBlogPost(slug);

    if (!story) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: story.name,
        description: story.content.summary || story.content.teaser || 'A blog post by Patrick Golden.',
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const story = await getBlogPost(slug);

    if (!story) {
        return (
            <main>
                <Header />
                <Container size="md" py="xl" mt={100}>
                    <Title>Post not found</Title>
                </Container>
            </main>
        )
    }

    return (
        <main>
            <Header />
            <Container size="md" py="xl" mt={100}>
                <Title order={1} mb="xs">{story.name || "Untitled"}</Title>
                <DateDisplay dateString={story.first_published_at} />
                <StoryblokStory story={story} />
            </Container>
        </main>
    );
}

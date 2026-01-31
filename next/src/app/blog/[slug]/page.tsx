import "@/lib/storyblok";
import { Container, Stack, Title } from '@mantine/core';
import { Header } from '@/components/Header';
import { StoryblokStory } from "@storyblok/react/rsc";
import { DateDisplay } from '@/components/DateDisplay';

import { getBlogPost } from '@/lib/getBlogPost';
import { Metadata } from 'next';
import CommentBox from '@/components/CommentBox';
import { Trans } from '@lingui/react/macro';
import { initI18n } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    await initI18n();

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
                <Container size="md" mt={75}>
                    <Title>Post not found</Title>
                </Container>
            </main>
        )
    }

    return (
        <main>
            <Header />
            <Container size="md" mt={75}>
                <Title order={1} mb="xs">{story.name || "Untitled"}</Title>
                <DateDisplay dateString={story.first_published_at} />
                <Stack gap="xl">
                    <StoryblokStory story={story} />
                    <Stack gap={0}>
                        <Title order={2}><Trans>Leave a Comment</Trans></Title>
                        <CommentBox />
                    </Stack>
                </Stack>
            </Container>
        </main>
    );
}

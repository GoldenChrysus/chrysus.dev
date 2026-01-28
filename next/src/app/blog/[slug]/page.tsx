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
                <Title order={1} mb="lg">{story.name}</Title>
                {/* Render richer content here usually with a rich text renderer */}
                <Box>
                    <Text>{story.content.body ? "Content loaded (rich text rendering to be implemented)" : "No content"}</Text>
                    {/* 
                Ideally use @storyblok/rich-text-react-renderer or similar.
                For now just dumping content or placeholder.
            */}
                    <pre style={{ whiteSpace: 'pre-wrap', background: '#f0f0f0', padding: 20, borderRadius: 8, color: 'black' }}>
                        {JSON.stringify(story.content, null, 2)}
                    </pre>
                </Box>
            </Container>
        </main>
    );
}

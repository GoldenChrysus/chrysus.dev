import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import "@/lib/storyblok";
import { Container, Title, SimpleGrid, Card, Image, Text, Button, Group, CardSection } from '@mantine/core';
import { Header } from '@/components/Header';

export default async function Blog() {
    let stories = [];
    try {
        const storyblokApi = getStoryblokApi();
        if (storyblokApi) {
            const { data } = await storyblokApi.get("cdn/stories", {
                version: "draft", // or 'published'
                starts_with: "blog/",
                is_startpage: false,
            });
            stories = data.stories;
        }
    } catch (e) {
        console.log("Storyblok not configured or error fetching", e);
    }

    return (
        <main>
            <Header />
            <Container size="lg" py="xl" mt={100}>
                <Title order={1} mb="xl">Blog</Title>
                {stories.length === 0 ? (
                    <Text>No posts found or Storyblok not connected.</Text>
                ) : (
                    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
                        {stories.map((story: any) => (
                            <Card key={story.uuid} shadow="sm" padding="lg" radius="md" withBorder>
                                <CardSection>
                                    <Image
                                        src={story.content.image?.filename || "https://placehold.co/600x400?text=No+Image"}
                                        height={160}
                                        alt={story.name}
                                    />
                                </CardSection>
                                <Group justify="space-between" mt="md" mb="xs">
                                    <Text fw={500}>{story.name}</Text>
                                </Group>
                                <Text size="sm" c="dimmed" lineClamp={3}>
                                    {story.content.teaser || "No summary available"}
                                </Text>
                                <Button component="a" href={`/blog/${story.slug}`} color="violet" fullWidth mt="md" radius="md">
                                    Read more
                                </Button>
                            </Card>
                        ))}
                    </SimpleGrid>
                )}
            </Container>
        </main>
    );
}

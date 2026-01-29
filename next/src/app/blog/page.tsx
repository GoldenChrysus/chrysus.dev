import { getStoryblokApi } from "@storyblok/react";
import "@/lib/storyblok";
import { Container, Title, SimpleGrid, Card, Text, Button, Group } from '@mantine/core';
import { Header } from '@/components/Header';
import { DateDisplay } from '@/components/DateDisplay';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read the latest thoughts and tutorials from Patrick Golden.',
};

const POSTS_PER_PAGE = 9;

export default async function Blog({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const { page } = await searchParams;
    const currentPage = Number(page) || 1;
    let stories = [];
    let total = 0;

    try {
        const storyblokApi = getStoryblokApi();
        if (storyblokApi) {
            // Fetch the Space version to get the latest CV (Cache Version)
            const space = await storyblokApi.get("cdn/spaces/me", {});
            const cv = space.data.space.version;

            const { data, headers } = await storyblokApi.get("cdn/stories", {
                version: "published",
                starts_with: "blog/",
                is_startpage: false,
                page: currentPage,
                per_page: POSTS_PER_PAGE,
                cv,
            });
            stories = data.stories;
            total = Number((headers as any)['total'] || 0);
        }
    } catch (e) {
        console.error("Storyblok not configured or error fetching", e);
    }

    const totalPages = Math.ceil(total / POSTS_PER_PAGE);

    return (
        <main>
            <Header />
            <Container size="lg" py="xl" mt={100}>
                <Title order={1} mb="xl">Blog</Title>
                {stories.length === 0 ? (
                    <Text>No posts found.</Text>
                ) : (
                    <>
                        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} mb="xl">
                            {stories.map((story: any) => (
                                <Card key={story.uuid} shadow="sm" padding="lg" radius="md" withBorder>
                                    <DateDisplay dateString={story.first_published_at} />
                                    <Text fw={700} size="lg" mb="sm" lineClamp={2} style={{ minHeight: '3.5rem' }}>
                                        {story.name}
                                    </Text>
                                    <Text size="sm" c="dimmed" lineClamp={3} mb="md" style={{ flexGrow: 1 }}>
                                        {story.content.summary || "No summary available"}
                                    </Text>
                                    <Button component="a" href={`/blog/${story.slug}`} color="violet" fullWidth radius="md">
                                        Read more
                                    </Button>
                                </Card>
                            ))}
                        </SimpleGrid>

                        <Group justify="center" gap="md">
                            <Button
                                component="a"
                                href={`/blog?page=${currentPage - 1}`}
                                disabled={currentPage <= 1}
                                variant="default"
                            >
                                Previous
                            </Button>
                            <Text size="sm">Page {currentPage} of {totalPages || 1}</Text>
                            <Button
                                component="a"
                                href={`/blog?page=${currentPage + 1}`}
                                disabled={currentPage >= totalPages}
                                variant="default"
                            >
                                Next
                            </Button>
                        </Group>
                    </>
                )}
            </Container>
        </main>
    );
}

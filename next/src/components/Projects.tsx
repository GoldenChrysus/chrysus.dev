"use client";

import { Container, Text, Card, Group, Badge, Image, Grid, Box, ActionIcon, Paper, Code } from '@mantine/core';
import { SectionDivider } from './SectionDivider';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "invoiced_ai",
        name: "Invoiced.ai",
        type: "Website",
        url: "https://invoiced.ai",
        repo: "https://github.com/GoldenChrysus/invoiced",
        tech: ["Rust", "Next.js", "PostgreSQL", "Stripe", "Caddy", "AWS"],
        description: "Invoiced.ai empowers small businesses to manage accounts payable, accounts receivable, inventory, and billable time. Easy-to-understand UI but powerful like a proper ERP. Offers automations like recurring invoices and auto-billing of client invoices."
    },
    {
        title: "karutasrs",
        name: "Karuta SRS",
        type: "Website",
        url: "https://karutasrs.com",
        repo: "https://github.com/GoldenChrysus/KarutaSRS",
        tech: ["Ember.js", "Ruby on Rails", "PostgreSQL", "JSON:API"],
        description: "A spaced repetition system where English speakers can memorize the Ogura Hyakunin Isshu for playing competition karuta."
    },
    {
        title: "chesshq",
        name: "Chess HQ",
        type: "Website",
        url: "https://chesshq.com",
        repo: "https://github.com/GoldenChrysus/srschess",
        tech: ["React", "TypeScript", "Ruby on Rails", "Python", "PostgreSQL", "GraphQL", "Stripe"],
        description: "A spaced repetition system where chess players can memorize opening repertoires from both white and black players' perspectives. Users can also search a database of millions of chess games, including granular search by move order, player names, and date."
    },
    {
        title: "ember_overlay",
        name: "Ember Overlay",
        type: "Web App",
        url: "https://goldenchrysus.github.io/ffxiv/ember-overlay",
        repo: "https://github.com/GoldenChrysus/ffxiv-ember-overlay",
        tech: ["React", "Python", "C#"],
        description: "An in-game overlay for Final Fantasy 14 that provides real-time processing of combat data with robust customization options. One of the most popular overlays at 32,000 monthly active users."
    }
];

export function Projects() {
    return (
        <Box id="projects" py={50}>
            <Container size="lg">
                <SectionDivider title="projects" />

                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Grid mb={80} align="center">
                            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
                                <Box style={{ textAlign: 'right' }}>
                                    <Code c="green.2" bg="transparent" fz="sm">
                                        {project.type.toLowerCase()} $
                                    </Code>
                                    <Group justify="end" gap="xs" mb="xs">
                                        {project.repo && (
                                            <ActionIcon component="a" href={project.repo} target="_blank" variant="subtle" color="gray">
                                                <IconBrandGithub size={20} />
                                            </ActionIcon>
                                        )}
                                        <ActionIcon component="a" href={project.url} target="_blank" variant="subtle" color="gray">
                                            <IconExternalLink size={20} />
                                        </ActionIcon>
                                        <Text c="violet.4" fz="2rem" fw="bold" lh={1}>
                                            {project.name}
                                        </Text>
                                    </Group>


                                    <Paper shadow="sm" p="md" bg="dark.7" withBorder mb="md">
                                        <Text size="md" c="dimmed">
                                            {project.description}
                                        </Text>
                                    </Paper>

                                    <Group justify="end" gap="xs">
                                        {project.tech.map(tech => (
                                            <Badge key={tech} variant="light" color="gray">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </Group>
                                </Box>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
                                <Image
                                    src={`/images/projects/${project.title}.png`}
                                    alt={project.name}
                                    radius="md"
                                    // Fallback in case image is missing or named differently
                                    fallbackSrc="https://placehold.co/600x400?text=Project+Image"
                                />
                            </Grid.Col>
                        </Grid>
                    </motion.div>
                ))}
            </Container>
        </Box>
    );
}


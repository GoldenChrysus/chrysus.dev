"use client";

import { Container, Text, Card, Group, Badge, Image, SimpleGrid, Box, ActionIcon, Title, AspectRatio, CardSection } from '@mantine/core';
import { SectionDivider } from './SectionDivider';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import classes from './Projects.module.css';
import { useLingui } from "@lingui/react/macro";
import { useMemo } from 'react';

export function Projects() {
    const { t } = useLingui();
    const projects = useMemo(() => ([
        {
            title: "invoiced_ai",
            name: "Invoiced.ai",
            type: t`Website`,
            url: "https://invoiced.ai",
            repo: "https://github.com/GoldenChrysus/invoiced",
            tech: ["Rust", "Next.js", "PostgreSQL", "Stripe", "Caddy", "AWS"],
            description: t`Invoiced.ai empowers small businesses to manage accounts payable and receivable.`
        },
        {
            title: "karutasrs",
            name: "Karuta SRS",
            type: t`Website`,
            url: "https://karutasrs.com",
            repo: "https://github.com/GoldenChrysus/KarutaSRS",
            tech: ["Ember.js", "Ruby on Rails", "PostgreSQL", "JSON:API"],
            description: t`A spaced repetition system to memorize the Ogura Hyakunin Isshu for competition karuta.`
        },
        {
            title: "chesshq",
            name: "Chess HQ",
            type: t`Website`,
            url: "https://chesshq.com",
            repo: "https://github.com/GoldenChrysus/srschess",
            tech: ["React", "TypeScript", "Rails", "PostgreSQL", "GraphQL"],
            description: t`Spaced repetition for chess openings and a searchable database of millions of games.`
        },
        {
            title: "ember_overlay",
            name: "Ember Overlay",
            type: t`Web App`,
            url: "https://goldenchrysus.github.io/ffxiv/ember-overlay",
            repo: "https://github.com/GoldenChrysus/ffxiv-ember-overlay",
            tech: ["React", "Python", "C#"],
            description: t`Popular FFXIV overlay with real-time combat data processing and robust customization.`
        }
    ]), [t]);

    return (
        <Box id="projects" py={50}>
            <Container size="lg">
                <SectionDivider title={t`projects`} />

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
                                <CardSection className={classes.imageSection}>
                                    <AspectRatio ratio={16 / 9}>
                                        <Image
                                            src={`/images/projects/${project.title}.png`}
                                            alt={project.name}
                                            fallbackSrc="https://placehold.co/600x400?text=Project+Image"
                                        />
                                    </AspectRatio>
                                    {/* Hover Overlay for Links */}
                                    <div className={classes.overlay}>
                                        <Group justify="center" gap="md">
                                            {project.repo && (
                                                <ActionIcon component="a" href={project.repo} target="_blank" variant="filled" color="dark" size="xl" radius="xl">
                                                    <IconBrandGithub size={28} />
                                                </ActionIcon>
                                            )}
                                            <ActionIcon component="a" href={project.url} target="_blank" variant="filled" color="violet" size="xl" radius="xl">
                                                <IconExternalLink size={28} />
                                            </ActionIcon>
                                        </Group>
                                    </div>
                                </CardSection>

                                <Box mt="md">
                                    <Group justify="space-between" mb="xs" align="start">
                                        <Title order={3} size="h4">{project.name}</Title>
                                        {/* Mobile Links */}
                                        <Group gap="xs" className={classes.mobileLinks}>
                                            {project.repo && (
                                                <ActionIcon component="a" href={project.repo} target="_blank" variant="subtle" color="gray">
                                                    <IconBrandGithub size={20} />
                                                </ActionIcon>
                                            )}
                                            <ActionIcon component="a" href={project.url} target="_blank" variant="subtle" color="violet">
                                                <IconExternalLink size={20} />
                                            </ActionIcon>
                                        </Group>
                                    </Group>

                                    <Text size="sm" c="dimmed" mb="md" style={{ minHeight: '3rem' }}>
                                        {project.description}
                                    </Text>

                                    <Group gap={6}>
                                        {project.tech.map(t => (
                                            <Badge key={t} size="sm" variant="outline" color="gray" style={{ textTransform: 'none' }}>
                                                {t}
                                            </Badge>
                                        ))}
                                    </Group>
                                </Box>
                            </Card>
                        </motion.div>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

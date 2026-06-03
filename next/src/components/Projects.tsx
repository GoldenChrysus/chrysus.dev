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
      title: "live_crypto_alerts",
      name: "Live Crypto Alerts",
      type: t`Mobile App`,
      url: "https://livecryptoalerts.app",
      repo: "https://github.com/GoldenChrysus/cryptoalerts",
      tech: ["Rust", "Java", "PostgreSQL", "Flutter", "Dart", "TanStack", "AWS", "Flink", "Kafka", "Vert.x", "Drools"],
      description: t`A sophisticated crypto alerting app with a deceptively simple UI. Users specify combinations of technical alerts like "RSI > 70" and "5m Price > 5m Bollinger Upper" to create trading signals. The backend system processes live tick data from various crypto exchanges, enriches the data in Flink to calculate indicators, and evaluates user rules in Drools to determine when an alert has been satisfied. Notifications are delivered via push, email, Discord, or Telegram, with automated trading coming soon.`
    },
    {
      title: "invoiced_ai",
      name: "Invoiced.ai",
      type: t`Website`,
      url: "https://invoiced.ai",
      repo: "https://github.com/GoldenChrysus/invoiced",
      tech: ["Rust", "Next.js", "PostgreSQL", "Stripe", "Caddy", "AWS", "Playwright", "Python", "TypeScript"],
      description: t`Invoiced.ai empowers small businesses to manage accounts payable and receivable. Business owners can track time, import time from ClickUp/Asana/Monday, configure recurring or auto-billing AR invoices, track inventory, dynamically mark up products based on weighted vendor costs, visualize their financials with customizable graphs, accept online payments with Stripe, offer their clients a management portal, and many other features to help small businesses manage finances smoothly.`
    },
    {
      title: "karutasrs",
      name: "Karuta SRS",
      type: t`Website`,
      url: "https://karutasrs.com",
      repo: "https://github.com/GoldenChrysus/KarutaSRS",
      tech: ["Ember.js", "Ruby on Rails", "PostgreSQL", "JSON:API"],
      description: t`A spaced repetition system to memorize the Ogura Hyakunin Isshu for competition karuta. The website offers a fun interface for memorizing the cards with characters appearing on the cards as you type them, professional audio clips during the review process, translations and historical information about poems, practice tools for rapid recall of cards, and stats about best- and worst-performing cards.`
    },
    {
      title: "chesshq",
      name: "Chess HQ",
      type: t`Website`,
      url: "https://chesshq.com",
      repo: "https://github.com/GoldenChrysus/srschess",
      tech: ["React", "TypeScript", "Rails", "PostgreSQL", "GraphQL"],
      description: t`Spaced repetition for chess openings and a searchable database of millions of games. The repertoire creator offers highly flexible multi-line opening creation, and the SRS engine traverses the line graph to determine which positions the user needs to review. Integrates with Chess.com and Lichess to allow users to import their games into game collections. Offers a sophisticated openings explorer powered by an interactive chess board to find openings that relate to a given position or sequence of moves with support for transpositions.`
    },
    {
      title: "ember_overlay",
      name: "Ember Overlay",
      type: t`Web App`,
      url: "https://goldenchrysus.github.io/ffxiv/ember-overlay",
      repo: "https://github.com/GoldenChrysus/ffxiv-ember-overlay",
      tech: ["React", "Python", "C#"],
      description: t`Popular FFXIV overlay with real-time combat data processing and robust customization. Has 30,000 monthly users and is the only one of its kind to offer highly flexible data customizations including a detailed player view with performance graphs. Offers a spell timer feature which can be used alongside the data overlay to alert users when important spells will soon be ready to use, with the data necessary for this extracted and compiled with C# and Python programs.`
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

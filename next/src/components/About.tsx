"use client";

import { Container, Text, Paper, Badge, Group, SimpleGrid, Box } from '@mantine/core';
import { SectionDivider } from './SectionDivider';
import { motion } from 'framer-motion';
import { Trans, useLingui } from '@lingui/react/macro';

const skills = [
    { name: "PHP", level: 100, background: "#7377ad", color: "white" },
    { name: "JavaScript", level: 100, background: "#efd81d", color: "black" },
    { name: "TypeScript", level: 100, background: "#2f74c0", color: "white" },
    { name: "PostgreSQL", level: 100, background: "#31648c", color: "white" },
    { name: "SQL Server", level: 100, background: "#e14b46", color: "white" },
    { name: "Ruby", level: 85, background: "#e01520", color: "white" },
    { name: "Python", level: 85, background: "#f1cd43", color: "black" },
    { name: "MySQL", level: 75, background: "#d88700", color: "white" },
    { name: "C#", level: 60, background: "#260063", color: "white" },
    { name: "AWS", level: 60, background: "#f28f00", color: "white" },
    { name: "Next.js", level: 60, background: "#000000", color: "white" },
    { name: "Docker", level: 60, background: "#228fe1", color: "white" },
    { name: "Google Cloud", level: 50, background: "#de4032", color: "white" },
    { name: "Rust", level: 50, background: "#f74b00", color: "white" },
    { name: "GraphQL", level: 50, background: "#d932a2", color: "white" },
    { name: "Java", level: 40, background: "#e01e23", color: "white" },
];

export function About() {
    const { t } = useLingui();

    return (
        <Box id="about" py={50}>
            <Container size="lg">
                <SectionDivider title={t`about`} />

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Paper shadow="xs" p="xl" withBorder mb={50}>
                        <Text size="xl" c="dimmed">
                            <Trans>I enjoy trying out new technologies to discover interesting ways to approach problems and design solutions. You can find me frequently creating projects on GitHub in a variety of languages and technology stacks.</Trans>
                        </Text>
                    </Paper>
                </motion.div>

                <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="lg">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <Badge
                                fullWidth
                                size="xl"
                                py="lg"
                                style={{
                                    backgroundColor: skill.background,
                                    color: skill.color,
                                    border: 'none',
                                    fontSize: '1rem'
                                }}
                            >
                                {skill.name}
                            </Badge>
                        </motion.div>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

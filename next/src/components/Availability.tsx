"use client";

import { Container, Text, Card, SimpleGrid, Box } from '@mantine/core';
import { SectionDivider } from './SectionDivider';
import { motion } from 'framer-motion';
import { useLingui } from "@lingui/react/macro";
import { useMemo } from 'react';

export function Availability() {
    const { t } = useLingui();

    const items = useMemo(() => ([
        {
            key: "employment",
            title: t`Employment opportunities`,
            info: t`I am not currently looking for employment.`,
            emoji: "❌",
            direction: "left"
        },
        {
            key: "freelance",
            title: t`Freelance opportunities`,
            info: t`I am not currently accepting new clients.`,
            emoji: "❌",
            direction: "right"
        }
    ]), [t]);

    return (
        <Box id="availability" py={50} pb={100}>
            <Container size="lg">
                <SectionDivider title={t`availability`} />

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.key}
                            initial={{ opacity: 0, x: item.direction === 'left' ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card shadow="sm" p="xl" radius="md" withBorder>
                                <Text fz="1.5rem" fw="bold" c="green.2" mb="sm">
                                    {item.emoji} {item.title}
                                </Text>
                                <Text size="lg" c="dimmed">
                                    {item.info}
                                </Text>
                            </Card>
                        </motion.div>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

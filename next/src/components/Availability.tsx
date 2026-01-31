"use client";

import { Container, Text, Card, SimpleGrid, Box, Group } from '@mantine/core';
import { SectionDivider } from './SectionDivider';
import { motion } from 'framer-motion';
import { useLingui } from "@lingui/react/macro";
import { useMemo } from 'react';
import { IconSquareXFilled, IconTriangleFilled } from '@tabler/icons-react';

export function Availability() {
    const { t } = useLingui();

    const items = useMemo(() => ([
        {
            key: "employment",
            title: t`Employment opportunities`,
            info: t`Recruiters may reach out for roles within Japan or worldwide remote roles.`,
            icon: <IconTriangleFilled color="var(--mantine-color-yellow-filled)" />,
            direction: "left"
        },
        {
            key: "freelance",
            title: t`Freelance opportunities`,
            info: t`I am not currently accepting new clients.`,
            icon: <IconSquareXFilled color="var(--mantine-color-red-filled)" />,
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
                            initial={{ opacity: 0, x: item.direction === 'left' ? -50 : 50, display: 'flex' }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card shadow="sm" p="xl" radius="md" withBorder flex={1}>
                                <Group mb="sm" align="center">
                                    {item.icon}
                                    <Text fz="1.5rem" fw="bold" c="green.5">
                                        {item.title}
                                    </Text>
                                </Group>
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

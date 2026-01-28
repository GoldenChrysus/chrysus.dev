"use client";

import { Container, Title, Text, Box, Code } from '@mantine/core';
import { Socials } from './Socials';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <Box
            id="hero"
            h="100vh"
            display="flex"
            style={{ alignItems: 'center' }}
            bg="var(--mantine-color-body)"
        >
            <Container size="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Code c="green.3" fz="sm" mb="xs" bg="transparent" p={0}>
                        introducing $
                    </Code>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Title order={1} size="4rem" fw={900} lh={1.1} mb="xs">
                        Patrick Golden
                    </Title>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Text size="2.5rem" fw={700} c="violet" lh={1.2} mb="md">
                        Full-stack engineer
                    </Text>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Text size="xl" c="dimmed" maw={600} mb="xl">
                        I create solutions for the apps and partnerships ecosystem at Beacon Platform.
                    </Text>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Socials />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Text size="sm" c="dimmed" mt="xl">
                        Based in Tokyo, Japan
                    </Text>
                </motion.div>
            </Container>
        </Box>
    );
}

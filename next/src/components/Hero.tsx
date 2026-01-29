"use client";

import { Container, Title, Text, Box, Code } from '@mantine/core';
import { Socials } from './Socials';
import { motion } from 'framer-motion';
import { Trans } from '@lingui/react/macro';
import classes from './Hero.module.css';

export function Hero() {
    return (
        <Box
            id="hero"
            h="100vh"
            display="flex"
            className={classes.hero}
            bg="var(--mantine-color-body)"
        >
            <Container size="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Code c="green.5" fz="sm" mb="xs" bg="transparent" p={0}>
                        <Trans>introducing $</Trans>
                    </Code>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Title order={1} size="4rem" fw={900} lh={1.1} mb="xs">
                        <Trans>Patrick Golden</Trans>
                    </Title>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Text size="2.5rem" fw={700} c="violet" lh={1.2} mb="md">
                        <Trans>Full-stack engineer</Trans>
                    </Text>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Text size="xl" c="dimmed" maw={600} mb="xl">
                        <Trans>I lead solutions for financial SaaS, education platforms, and AI initiatives.</Trans>
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
                        <Trans>Based in Tokyo, Japan</Trans>
                    </Text>
                </motion.div>
            </Container>
        </Box>
    );
}

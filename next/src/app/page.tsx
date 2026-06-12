import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Availability } from '@/components/Availability';
import { Box } from '@mantine/core';

import classes from './page.module.css';

export const metadata: Metadata = {
    alternates: {
        canonical: '/',
    },
};

export default function Home() {
    return (
        <main style={{ overflowX: 'hidden' }}>
            <Header />
            <Hero />
            <Box className={classes.sectionWrapper}>
                <About />
                <Projects />
                <Availability />
            </Box>
        </main>
    );
}

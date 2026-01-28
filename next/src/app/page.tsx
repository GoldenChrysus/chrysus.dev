import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Availability } from '@/components/Availability';
import { Box } from '@mantine/core';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Box bg="dark.8">
        <About />
        <Projects />
        <Availability />
      </Box>
    </main>
  );
}

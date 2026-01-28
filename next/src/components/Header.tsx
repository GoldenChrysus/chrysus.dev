"use client";

import { Group, Button, Container, Box } from '@mantine/core';
import { IconUser, IconDeviceDesktop, IconCalendar, IconMail } from '@tabler/icons-react';

const items = [
    { label: 'About', icon: IconUser, id: 'about' },
    { label: 'Projects', icon: IconDeviceDesktop, id: 'projects' },
    { label: 'Blog', icon: IconDeviceDesktop, link: '/blog' },
    { label: 'Availability', icon: IconCalendar, id: 'availability' },
    { label: 'Email Me', icon: IconMail, link: 'mailto:public@chrysus.dev' },
];

export function Header() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box component="header" py="md" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
            <Container size="lg">
                <Group justify="center">
                    {items.map((item) => (
                        <Button
                            key={item.label}
                            variant="subtle"
                            color="gray"
                            leftSection={<item.icon size={16} />}
                            onClick={() => item.link ? window.location.href = item.link : scrollTo(item.id!)}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Group>
            </Container>
        </Box>
    );
}

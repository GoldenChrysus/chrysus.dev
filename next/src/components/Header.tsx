"use client";

import { Group, Button, Container, Box, Burger, Drawer, Stack, useMatches } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconUser, IconDeviceDesktop, IconCalendar, IconMail } from '@tabler/icons-react';
import { usePathname, useRouter } from 'next/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLingui } from '@lingui/react/macro'

export function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const { t, i18n } = useLingui();
    const [opened, { toggle, close }] = useDisclosure(false);

    const items = [
        { label: t`About`, icon: IconUser, id: 'about' },
        { label: t`Projects`, icon: IconDeviceDesktop, id: 'projects' },
        { label: t`Blog`, icon: IconDeviceDesktop, link: '/blog' },
        { label: t`Availability`, icon: IconCalendar, id: 'availability' },
        { label: t`Email Me`, icon: IconMail, link: 'mailto:public@chrysus.dev' },
    ];

    const handleNavigation = (item: typeof items[0]) => {
        close();
        if (item.link) {
            window.location.href = item.link;
            return;
        }

        if (item.id) {
            if (pathname === '/') {
                const element = document.getElementById(item.id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                router.push(`/#${item.id}`);
            }
        }
    };

    return (
        <Box bg="var(--mantine-color-body)" component="header" py="md" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
            <Container size="lg">
                <Group justify="center">
                    {/* Desktop Navigation */}
                    <Group gap="xs" visibleFrom="sm">
                        {items.map((item) => (
                            <Button
                                key={item.id || item.link}
                                variant="subtle"
                                color="gray"
                                leftSection={<item.icon size={16} />}
                                onClick={() => handleNavigation(item)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Group>

                    {/* Mobile Navigation Toggle */}
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" aria-label="Toggle navigation" flex={1} />

                    <LanguageSwitcher currentLocale={i18n.locale} />
                </Group>

                <Drawer opened={opened} onClose={close} size="md" title={t`Menu`} padding="md">
                    <Stack gap="sm">
                        {items.map((item) => (
                            <Button
                                key={item.id || item.link}
                                variant="subtle"
                                color="gray"
                                fullWidth
                                justify="start"
                                leftSection={<item.icon size={16} />}
                                onClick={() => handleNavigation(item)}
                                size="lg"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Stack>
                </Drawer>
            </Container>
        </Box>
    );
}

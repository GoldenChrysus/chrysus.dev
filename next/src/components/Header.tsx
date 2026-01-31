"use client";

import { Group, Button, Container, Box, Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconUser, IconDeviceDesktop, IconCalendar, IconMail } from '@tabler/icons-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLingui } from '@lingui/react/macro'
import Link from 'next/link';

export function Header() {
    const { t, i18n } = useLingui();
    const [opened, { toggle, close }] = useDisclosure(false);

    const items = [
        { label: t`About`, icon: IconUser, link: '/#about' },
        { label: t`Projects`, icon: IconDeviceDesktop, link: '/#projects' },
        { label: t`Blog`, icon: IconDeviceDesktop, link: '/blog' },
        { label: t`Availability`, icon: IconCalendar, link: '/#availability' },
        { label: t`Email Me`, icon: IconMail, link: 'mailto:public@chrysus.dev' },
    ];

    return (
        <Box bg="var(--mantine-color-body)" component="header" py="md" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
            <Container size="lg">
                <Group justify="center">
                    {/* Desktop Navigation */}
                    <Group gap="xs" visibleFrom="sm">
                        {items.map((item) => (
                            <Link key={item.link} href={item.link} scroll style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Button
                                    variant="subtle"
                                    color="gray"
                                    leftSection={<item.icon size={16} />}
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                    </Group>

                    {/* Mobile Navigation Toggle */}
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" aria-label="Toggle navigation" flex={1} />

                    <LanguageSwitcher currentLocale={i18n.locale} />
                </Group>

                <Drawer opened={opened} onClose={close} size="md" title={t`Menu`} padding="md">
                    <Stack gap="sm">
                        {items.map((item) => (
                            <Link
                                key={item.link}
                                href={item.link}
                                scroll
                                style={{ textDecoration: 'none', color: 'inherit' }}
                                onClick={close}
                            >
                                <Button
                                    variant="subtle"
                                    color="gray"
                                    fullWidth
                                    justify="start"
                                    leftSection={<item.icon size={16} />}
                                    size="lg"
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                    </Stack>
                </Drawer>
            </Container>
        </Box>
    );
}

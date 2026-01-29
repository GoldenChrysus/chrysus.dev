"use client";

import { ActionIcon, Menu, Group, Text } from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
    const router = useRouter();

    const switchLanguage = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
        // Force reload to apply language change
        window.location.reload();
    };

    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <ActionIcon variant="transparent" size="lg" aria-label="Change language">
                    <IconLanguage style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item onClick={() => switchLanguage('en-US')} bg={currentLocale === 'en-US' ? 'var(--mantine-color-gray-1)' : undefined}>
                    <Group gap="xs">
                        <Text size="sm">English</Text>
                    </Group>
                </Menu.Item>
                <Menu.Item onClick={() => switchLanguage('ja-JP')} bg={currentLocale === 'ja-JP' ? 'var(--mantine-color-gray-1)' : undefined}>
                    <Group gap="xs">
                        <Text size="sm">日本語</Text>
                    </Group>
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

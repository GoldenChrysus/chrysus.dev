import { Group, ActionIcon, Tooltip } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconId } from '@tabler/icons-react';

const RESUME_PATH = "/assets/files/Patrick_Golden_public_resume.pdf";

const socials = [
    { icon: IconBrandGithub, url: 'https://github.com/GoldenChrysus/', label: 'GitHub' },
    { icon: IconBrandLinkedin, url: 'https://www.linkedin.com/in/goldenpatrick/', label: 'LinkedIn' },
    { icon: IconMail, url: 'mailto:public@chrysus.dev', label: 'Email' },
    { icon: IconId, url: RESUME_PATH, label: 'Resume' },
];

export function Socials() {
    return (
        <Group gap="md">
            {socials.map((social) => (
                <Tooltip key={social.label} label={social.label}>
                    <ActionIcon
                        component="a"
                        href={social.url}
                        target={social.url.startsWith('mailto') ? undefined : '_blank'}
                        size="lg"
                        color="gray"
                        variant="transparent"
                    >
                        <social.icon size={28} />
                    </ActionIcon>
                </Tooltip>
            ))}
        </Group>
    );
}

"use client";

import { Divider, Code } from '@mantine/core';

interface SectionDividerProps {
    title: string;
}

export function SectionDivider({ title }: SectionDividerProps) {
    return (
        <Divider
            my="xl"
            label={
                <Code c="blue.6" fz="1.5rem" fw="bold" bg="transparent">
                    {title.toLowerCase()} $
                </Code>
            }
            labelPosition="center"
        />
    );
}

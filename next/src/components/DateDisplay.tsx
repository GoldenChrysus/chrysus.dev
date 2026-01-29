"use client";

import { Text } from '@mantine/core';
import { useMemo } from 'react';

interface DateDisplayProps {
    dateString: string;
}

export function DateDisplay({ dateString }: DateDisplayProps) {
    const formattedDate = useMemo(() => (
        new Date(dateString).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    ), [dateString]);

    return (
        <Text c="dimmed" size="sm" mb="md">
            {formattedDate}
        </Text>
    );
}

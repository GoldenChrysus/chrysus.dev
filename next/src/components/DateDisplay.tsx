"use client";

import { Text } from '@mantine/core';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

interface DateDisplayProps {
    dateString?: string;
}

export function DateDisplay({ dateString }: DateDisplayProps) {
    const [formattedDate, setFormattedDate] = useState<string>('');

    useEffect(() => {
        if (dateString) {
            // Use standard JS Date for locale string to respect user's browser settings perfectly
            // OR use dayjs for more control. The user asked for "user's locale format (toLocaleDateString, etc.)"
            // so we'll stick to native Date for the most authentic "local" feel, but cleaner.
            setFormattedDate(new Date(dateString).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }));
        }
    }, [dateString]);

    if (!dateString) return null;

    // Render a server-safe fallback initially to avoid hydration mismatch, then update on client
    return (
        <Text c="dimmed" size="sm" mb="md">
            {formattedDate || dayjs(dateString).format('MMMM D, YYYY h:mm A')}
        </Text>
    );
}

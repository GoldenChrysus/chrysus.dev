'use client';

import { useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { FastCommentsCommentWidget } from 'fastcomments-react';
import { useMemo } from 'react';

export default function CommentBox() {
    const theme = useMantineTheme();
    const { colorScheme: mantine_scheme } = useMantineColorScheme();
    const browser_scheme = useColorScheme();
    const scheme = useMemo(() => (mantine_scheme === 'auto') ? browser_scheme : mantine_scheme, [mantine_scheme, browser_scheme]);
    const input_bg = (scheme === 'dark') ? theme.colors.dark[6] : 'white';
    const input_border = (scheme === 'dark') ? theme.colors.dark[4] : theme.colors.gray[4];
    const placeholder_color = (scheme === 'dark') ? theme.colors.dark[3] : theme.colors.gray[5];
    const default_button_hover = (scheme === 'dark') ? theme.colors.dark[5] : theme.colors.gray[0];

    return (
        <FastCommentsCommentWidget
            tenantId={process.env.NEXT_PUBLIC_FASTCOMMENTS_TENANT_ID}
            customCSS={`
        form.comment-reply {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }

        input, textarea, .horizontal-border-wrapper, .horizontal-border {
          background-color: ${input_bg} !important;
          border-color: ${input_border} !important;
        }

        .horizontal-border-wrapper {
          height: 30px !important;
          positive: relative;
          border: 1px solid ${input_border};
          border-top: 0;
        }

        .horizontal-border.horizontal-border-left,
        .horizontal-border.horizontal-border-right,
        .horizontal-border.horizontal-border-bottom-left,
        .horizontal-border.horizontal-border-bottom-right {
          display: none !important;
        }

        .horizontal-border.horizontal-border-top-right {
          background-color: initial !important;
        }

        input::placeholder, textarea::placeholder {
          color: ${placeholder_color} !important;
        }

        input:focus,
        textarea:focus,
        textarea:focus ~ .horizontal-border-wrapper,
        textarea:focus ~ .horizontal-border-wrapper .horizontal-border {
          border-color: ${theme.colors.violet['8']} !important;
        }

        .horizontal-border.horizontal-border-left {
          height: 30px !important;
          width: 100% !important;
          border-radius: 8px! important;
        }

        input {
          border-radius: 8px !important;
        }

        textarea {
          border-radius: 8px 8px 0 0 !important;
        }

        .horizontal-border-wrapper {
          border-radius: 0 0 8px 8px !important;
        }

        button.fast-comments-reply {
          border: 0;
          background-color: ${theme.colors.violet['8']} !important;
          border-radius: 8px !important;
        }

        button.fast-comments-reply, button.fast-comments-reply .icon {
          color: white !important;
        }

        .icon.bubble {
          background: url('https://cdn.fastcomments.com/images/svg/v2/text_bubble_${scheme}.svg') no-repeat center;
        }

        button.fast-comments-reply:hover {
          background-color: ${theme.colors.violet['9']} !important
        }

        button:active {
          transform: matrix(1, 0, 0, 1, 0, 1);
        }

        button.fast-comments-reply-cancel {
          border-color: ${input_border} !important;
          background-color: ${input_bg} !important;
        }

        button.fast-comments-reply-cancel:hover {
          background-color: ${default_button_hover} !important
        }
      `}
        />
    );
}

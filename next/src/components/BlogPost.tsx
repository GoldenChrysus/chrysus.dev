import { storyblokEditable, StoryblokRichTextResolvers } from "@storyblok/react";
import { renderRichText } from "@storyblok/react";
import { Image, Box, Typography } from '@mantine/core';
import { useMemo } from 'react';

export const BlogPost = ({ blok }: any) => {
    const resolvers: StoryblokRichTextResolvers<string | TrustedHTML> = useMemo(() => ({
        table: ({ children }) => {
            return (
                `<div class="storyblok-table-wrapper">
                    <table>${(Array.isArray(children)) ? children.join('') : children}</table>
                </div>`
            );
        }
    }), []);
    return (
        <Box p={0} {...storyblokEditable(blok)}>
            <Box mb="xl">
                {blok.image?.filename && (
                    <Image
                        src={blok.image.filename}
                        alt={blok.image.alt || blok.title}
                        radius="md"
                        mb="lg"
                    />
                )}
            </Box>
            <Typography style={{ overflowWrap: "anywhere" }}>
                <div dangerouslySetInnerHTML={{ __html: renderRichText(blok.body, { resolvers }) || "" }} />
            </Typography>
        </Box>
    );
};

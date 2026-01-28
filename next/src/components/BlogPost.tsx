import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { renderRichText } from "@storyblok/react";
import { Container, Title, Image, Box, TypographyStylesProvider } from '@mantine/core';

export const BlogPost = ({ blok }: any) => {
    return (
        <Container size="md" {...storyblokEditable(blok)}>
            <Box mb="xl">
                <Title order={1} mb="md">{blok.title || "Untitled"}</Title>
                {blok.image?.filename && (
                    <Image
                        src={blok.image.filename}
                        alt={blok.image.alt || blok.title}
                        radius="md"
                        mb="lg"
                    />
                )}
            </Box>
            <TypographyStylesProvider>
                <div dangerouslySetInnerHTML={{ __html: renderRichText(blok.body) || "" }} />
            </TypographyStylesProvider>
        </Container>
    );
};

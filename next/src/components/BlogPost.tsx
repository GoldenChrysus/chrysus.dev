import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { renderRichText } from "@storyblok/react";
import { Container, Title, Image, Box, Typography } from '@mantine/core';

export const BlogPost = ({ blok }: any) => {
    return (
        <Container size="md" p={0} {...storyblokEditable(blok)}>
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
            <Typography>
                <div dangerouslySetInnerHTML={{ __html: renderRichText(blok.body) || "" }} />
            </Typography>
        </Container>
    );
};

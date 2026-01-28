import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export const Page = ({ blok }: any) => (
    <main {...storyblokEditable(blok)}>
        {blok.body
            ? blok.body.map((nestedBlok: any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))
            : null}
    </main>
);

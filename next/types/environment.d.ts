declare global {
    namespace NodeJS {
        interface ProcessEnv {
            STORYBLOK_TOKEN: string;
            NEXT_PUBLIC_FASTCOMMENTS_TENANT_ID: string;
        }
    }
}

export { };

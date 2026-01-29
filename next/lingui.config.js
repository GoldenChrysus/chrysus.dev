/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    sourceLocale: 'en-US',
    locales: ['en-US', 'ja-JP'],
    catalogs: [
        {
            path: "<rootDir>/src/locales/{locale}/messages",
            include: ["src"],
        },
    ],
    format: "po",
};

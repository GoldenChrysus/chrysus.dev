import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import stylistic from '@stylistic/eslint-plugin';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    globalIgnores([
    // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
    {
        plugins: {
            'no-relative-import-paths': noRelativeImportPaths,
            '@stylistic': stylistic,
        },
        rules: {
            'no-relative-import-paths/no-relative-import-paths': [
                'error',
                {
                    allowSameFolder: true,
                    prefix: '@',
                },
            ],
            '@stylistic/indent': ['error', 4],
        },
    },
]);

export default eslintConfig;

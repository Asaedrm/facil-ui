import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],

    source: {
        entry: {
            index: './src/index.tsx',
        },
        tsconfigPath: './tsconfig.json',
    },

    lib: [
        {
            format: 'esm',
            syntax: 'es2022',
            dts: true,
        },
    ],

    output: {
        target: 'web',
    },
});
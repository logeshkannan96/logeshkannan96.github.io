/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog, { PrerenderContentFile } from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      content: {
        highlighter: 'shiki',
        shikiOptions: {
          highlight: {
            theme: 'github-dark-dimmed'
          },
          highlighter: {
            langs: [
              'json',
              'sh',
              'ts',
              'cs',
              'python',
              'makefile',
              'js',
              'yaml',
              'html',
              'css',
              'angular-html',
              'angular-ts',
            ],
            themes: ['github-dark-dimmed']
          }
        },
      },
      prerender: {
        routes: async () => [
          '/',
          '/resume',
          '/projects',
          '/projects/still',
          '/learnings',
          {
            contentDir: 'src/content/learnings',
            transform: (file: PrerenderContentFile) => {
              console.log(file)
              // do not include files marked as draft in frontmatter
              if (file.attributes['draft']) {
                return false;
              }
              // use the slug from frontmatter if defined, otherwise use the files basename
              const slug = file.attributes['slug'] || file.name;
              return `/learnings/${slug}`;
            },
          },
        ],
        sitemap: {
          host: 'https://logesh.space',
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));


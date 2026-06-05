import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.gray.100'),
            '--tw-prose-links': theme('colors.blue.400'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-quotes': theme('colors.gray.400'),
            '--tw-prose-quote-borders': theme('colors.blue.500'),
            maxWidth: 'none',
            p: { marginTop: '1.25em', marginBottom: '1.25em', lineHeight: '1.75' },
            'p.lead': {
              fontSize: '1.25rem',
              lineHeight: '1.6',
              marginTop: '0',
              marginBottom: '1.5em',
            },
            a: {
              color: theme('colors.blue.400'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': { color: theme('colors.blue.300') },
            },
            h2: {
              marginTop: '2.5em',
              marginBottom: '0.75em',
              fontSize: '1.75rem',
              fontWeight: '700',
              backgroundImage: `linear-gradient(to right, ${theme('colors.blue.300')}, ${theme('colors.blue.500')})`,
              backgroundClip: 'text',
              color: 'transparent',
            },
            h3: { color: theme('colors.blue.300'), fontWeight: '600' },
            ul: { marginTop: '1em', marginBottom: '1em' },
            li: { marginTop: '0.35em', marginBottom: '0.35em' },
          },
        },
      }),
    },
  },
  plugins: [typography],
  darkMode: 'class',
};
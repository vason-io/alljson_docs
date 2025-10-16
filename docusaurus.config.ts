import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: 'Alljson',
  tagline: 'Visualize & Analyze JSON',
  favicon: 'img/favicon.ico',

  url: 'https://alljson.com',
  baseUrl: '/docs/',

  organizationName: 'vason-io',
  projectName: 'vason-io',

  onBrokenLinks: 'throw',

  // новая настройка для битых markdown ссылок
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn', // или 'throw'
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // под /docs/ из baseUrl
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Alljson logo',
        src: 'img/logo.svg',
        href: 'https://alljson.com',
        target: '_self',
      },
      items: [
        {
          href: 'https://alljson.com',
          sidebarId: 'home_alljson',
          position: 'left',
          label: 'Open Alljson',
          target: '_self',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guide',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'support',
          position: 'left',
          label: 'Support',
        },
        {
          href: 'https://vason.io',
          sidebarId: 'home_alljson',
          position: 'right',
          label: 'Developed by Vason',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © 2020-${new Date().getFullYear()} Alljson.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: 'img',
      config: {
        margin: 70,
        scrollOffset: 300,
        container: '',
        template: '',
      },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    './src/plugins/themed-zoom/index.ts',
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-GQQPHF9PX4',
        anonymizeIP: true,
      },
    ],
  ],
} satisfies Config;

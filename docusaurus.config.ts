// See: https://docusaurus.io/docs/api/docusaurus-config
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: 'Alljson',
  tagline: 'Visualize & Analyze JSON',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://alljson.com',
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vason-io', // Usually your GitHub org/username.
  projectName: 'vason-io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
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
        }
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
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        margin: 70,
        scrollOffset: 300,
        container: '', // '#__docusaurus', //'[class*=docRoot_]',
        template: '', //'#zoom-template',
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

import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const isPreview = true;

const config: Config = {
  title: 'Cronica IT&C',
  tagline: 'O încercare de reconstituire și prezervare pe termen lung a istoriei IT&C (preview)',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cronica-it.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: isPreview ? '/preview/' : '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cronica-it', // Usually your GitHub org/user name.
  projectName: isPreview ? 'preview' : 'cronica-it.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro'],
  },

  plugins: [
    [
      // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'events-blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'events',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './events',
        authorsMapPath: '../authors.yml',
        exclude: [ '**/README.md' ],
        showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          isPreview ? 'https://github.com/cronica-it/preview/edit/master/website/' : 'https://github.com/cronica-it/cronica-it.github.io/edit/master/website/',
        blogSidebarTitle: 'Evenimente',
        blogSidebarCount: 'ALL',
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            isPreview ? 'https://github.com/cronica-it/preview/edit/master/website/' : 'https://github.com/cronica-it/cronica-it.github.io/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            isPreview ? 'https://github.com/cronica-it/preview/edit/master/website/' : 'https://github.com/cronica-it/cronica-it.github.io/edit/master/website/',
          blogSidebarTitle: 'Articole',
          blogSidebarCount: 'ALL',
          authorsMapPath: '../authors.yml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Cronica IT&C',
      logo: {
        alt: 'Felix_C-256',
        src: 'img/Felix_C-256_computer.jpg',
      },
      items: [
        // {to: '/events', label: 'Evenimente', position: 'left'},
        {
          type: 'dropdown',
          label: 'Evenimente',
          position: 'left',
          items: [
            {
              label: 'Toate',
              to: '/events'
            },
            {
              label: 'Arhiva',
              to: '/events/archive'
            },
            {
              label: 'Tags',
              to: '/events/tags'
            }
          ]
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'dropdown',
          label: 'Amintiri',
          position: 'left',
          items: [
            {
              label: 'Toate',
              to: '/blog'
            },
            {
              label: 'Arhiva',
              to: '/blog/archive'
            },
            {
              label: 'Tags',
              to: '/blog/tags'
            }
          ]
        },
        {
          label: 'Despre',
          to: '/despre',
          position: 'right'
        },
        {
          label: 'Docu',
          type: 'docSidebar',
          sidebarId: 'docuSidebar',
          position: 'right',
        },
        {
          label: 'Arhiva',
          href: 'https://cronica-it.github.io/arhiva/',
          position: 'right',
        },
        {
          label: 'GitHub',
          href: isPreview ? 'https://github.com/cronica-it/preview' : 'https://github.com/cronica-it/cronica-it.github.io',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/cronica-it/preview',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cronica IT&C. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

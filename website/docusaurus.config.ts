import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// import logger from '@docusaurus/logger'

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
      '@docusaurus/plugin-content-docs',
      {
        sidebarPath: './sidebars.ts',
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          isPreview ? 'https://github.com/cronica-it/preview/edit/master/website/' : 'https://github.com/cronica-it/cronica-it.github.io/edit/master/website/',
          showLastUpdateTime: true,
      },
    ],
    [
      // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
      '@xpack/docusaurus-plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'memories-blog',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './amintiri',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'amintiri',
        archiveBasePath: 'arhiva',
        tagsBasePath: 'categorii',
        authorsBasePath: 'autori',
        pageBasePath: 'pagina',
        showReadingTime: true,
        showLastUpdateTime: true,

        blogAuthorsListComponent: '@site/src/theme/BlogAuthorsListPage',
        blogAuthorsPostsComponent: '@site/src/theme/BlogAuthorsPostsPage',

        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          isPreview ? 'https://github.com/cronica-it/preview/edit/master/website/' : 'https://github.com/cronica-it/cronica-it.github.io/edit/master/website/',
        blogSidebarTitle: 'Amintiri',
        blogSidebarCount: 'ALL',
        authorsMapPath: '../authors.yml',
      },
    ],
    [
      // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
      '@xpack/docusaurus-plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'events-blog',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './evenimente',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'evenimente',
        archiveBasePath: 'arhiva',
        tagsBasePath: 'categorii',
        authorsBasePath: 'autori',
        pageBasePath: 'pagina',

        authorsMapPath: '../authors.yml',
        exclude: ['**/README.md'],
        showReadingTime: true,
        showLastUpdateTime: true,

        blogAuthorsListComponent: '@site/src/theme/BlogAuthorsListPage',
        blogAuthorsPostsComponent: '@site/src/theme/BlogAuthorsPostsPage',

        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          isPreview ? 'https://github.com/cronica-it/preview/edit/master/website/' : 'https://github.com/cronica-it/cronica-it.github.io/edit/master/website/',
        blogSidebarTitle: 'Evenimente',
        blogSidebarCount: 'ALL',
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {}
    ],
    [
      // https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-client-redirects#redirects
      '@docusaurus/plugin-client-redirects',
      {
        // fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        // toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        // redirects: [
        //   // /docs/oldDoc -> /docs/newDoc
        //   {
        //     to: '/docs/newDoc',
        //     from: '/docs/oldDoc',
        //   },
        //   // Redirect from multiple old paths to the new path
        //   {
        //     to: '/docs/newDoc2',
        //     from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
        //   },
        // ],
        createRedirects(existingPath) {
          // logger.info(existingPath);
          if (existingPath.includes('/evenimente')) {
            // logger.info(`to ${existingPath} from ${existingPath.replace('/evenimente', '/events')}`);
            // Redirect from /events/X to /evenimente/X
            return [
              existingPath.replace('/evenimente', '/events')
            ];
          } else if (existingPath.includes('/amintiri')) {
            // logger.info(`to ${existingPath} from ${existingPath.replace('/amintiri', '/blog')}`);
            // Redirect from /blog/Z to /amintiri/X
            return [
              existingPath.replace('/amintiri', '/blog')
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],

  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: './src/css/custom.css',
      }
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Cronica IT&C',
      logo: {
        alt: 'Felix_C-256',
        src: 'img/logo-felix-c-256-computer.jpg',
      },
      items: [
        // {to: '/evenimente', label: 'Evenimente', position: 'left'},
        {
          type: 'dropdown',
          label: 'Evenimente',
          to: '/evenimente/arhiva',
          position: 'left',
          items: [
            {
              label: 'Arhiva',
              to: '/evenimente/arhiva'
            },
            {
              label: 'Categorii',
              to: '/evenimente/categorii'
            },
            {
              label: 'Autori',
              to: '/evenimente/autori'
            },
            {
              label: 'Toate',
              to: '/evenimente'
            }
          ]
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'dropdown',
          label: 'Amintiri',
          to: '/amintiri/arhiva',
          position: 'left',
          items: [
            {
              label: 'Arhiva',
              to: '/amintiri/arhiva'
            },
            {
              label: 'Categorii',
              to: '/amintiri/categorii'
            },
            {
              label: 'Autori',
              to: '/amintiri/autori'
            },
            {
              label: 'Toate',
              to: '/amintiri'
            },
          ]
        },
        {
          label: 'Arhiva',
          to: '/arhiva',
          position: 'left'
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
          label: 'GitHub',
          href: isPreview ? 'https://github.com/cronica-it/preview' : 'https://github.com/cronica-it/cronica-it.github.io',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © 2023-${new Date().getFullYear()} Cronica IT&C. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

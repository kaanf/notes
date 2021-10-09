const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Personal notes',
  tagline: 'Dinosaurs are cool',
  url: 'https://kaanf.github.io',
  baseUrl: '/notes/',
  onBrokenLinks: 'ignore',
  themes: ['@docusaurus/theme-live-codeblock'],
  noIndex: true,
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'kaanf', // Usually your GitHub org/user name.
  projectName: 'notes', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'notes',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kaanf/personal-notes/edit/main/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsDir: 'notes',
        docsRouteBasePath: '/',
        language: ['en', 'zh'],
        hashed: true,
      },
      
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      respectPrefersColorScheme: true,
      navbar: {
        title: 'homepage',
        logo: {
          src: 'img/party-corgi-large.gif',
        },
        hideOnScroll: true,
        items: [
          {
            to: '/README',
            label: '📓 notes',
            position: 'left',
            activeBasePath: '/README',
          },
          {
            href: 'https://kaanf.github.io/notes/Portfolio.pdf',
            label: 'portfolio',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'links',
            position: 'right',
            items: [
              {
                label: 'github',
                href: 'https://github.com/kaanf',
              },
              {
                label: 'twitter',
                href: 'https://twitter.com/w3irdf1shes',
              },
              {
                label: 'email',
                href: 'mailto:frtpkaan@gmail.com',
              },
            ],
          },
          {
            href: 'https://github.com/kaanf?tab=repositories',
            label: 'repositories',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Kaan Fırat`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'cmake',
          'csharp',
          'csv',
          'docker',
          'haskell',
          'http',
          'java',
          'kotlin',
          'latex',
          'lisp',
          'lua',
          'matlab',
          'perl',
          'php',
          'regex',
          'ruby',
          'scala',
          'scheme',
          'swift',
          'tcl',
          'verilog',
          'vhdl',
          'vim',
        ],
      },
    }),
});

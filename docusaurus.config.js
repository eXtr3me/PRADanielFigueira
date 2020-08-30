module.exports = {
  title: 'Portfólio Reflexivo de Aprendizagem',
  tagline: 'EFA NS Técnico Comercial',
  url: 'https://eXtr3me.github.io',
  baseUrl: '/PRADanielFigueira/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'eXtr3me', // Usually your GitHub org/user name.
  projectName: 'PRADanielFigueira', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PRA Daniel Figueira',
      logo: {
        alt: 'PRA Daniel Figueira',
        src: 'img/iefp.gif',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'UFCDs',
          position: 'left',
        },
        { to: 'blog', label: 'Testemunhos', position: 'right' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /* {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        }, */
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/dmfigueira/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/dmfigueira/',
            },
          ],
        },
        {
          title: 'Mais',
          items: [
            {
              label: 'Testemunhos',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Figueira.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'int',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/eXtr3me/PRADanielFigueira/blob/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/eXtr3me/PRADanielFigueira/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fluent CI/CD",
  tagline: "CI/CD Pipeline as Code",
  favicon: "img/fluentci-logo.png",

  // Set the production url of your site here
  url: "https://docs.fluentci.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "facebook", // Usually your GitHub org/user name.
  // projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/fluent-ci-templates/fluentci-docs/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Fluent CI",
        logo: {
          alt: "Fluent CI Logo",
          src: "img/fluentci-logo.png",
        },
        items: [
          {
            href: "https://github.com/fluentci-io",
            className: "header-github-link",
            position: "right",
          },
          {
            href: "https://discord.gg/H7M28d9dRk",
            className: "header-discord-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Cookbook",
                to: "/category/cookbook",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/fluentci",
              },
              {
                label: "Discord",
                href: "https://discord.gg/H7M28d9dRk",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/fluentci_io",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/fluent-ci-templates",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fluent CI.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ["bash", "typescript", "rust", "json", "yaml"],
      },
    }),
};

module.exports = config;

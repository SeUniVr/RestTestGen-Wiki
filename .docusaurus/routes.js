import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '755'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd50'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '53d'),
            routes: [
              {
                path: '/docs/category/rtg-components',
                component: ComponentCreator('/docs/category/rtg-components', 'daa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tool-overview',
                component: ComponentCreator('/docs/category/tool-overview', 'bc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-components/fuzzer',
                component: ComponentCreator('/docs/rtg-components/fuzzer', '5a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-components/interaction-processor',
                component: ComponentCreator('/docs/rtg-components/interaction-processor', '083'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-components/mutator',
                component: ComponentCreator('/docs/rtg-components/mutator', '98f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-components/operation-sorter',
                component: ComponentCreator('/docs/rtg-components/operation-sorter', 'af2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-components/oracle',
                component: ComponentCreator('/docs/rtg-components/oracle', 'e1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-components/parameters',
                component: ComponentCreator('/docs/rtg-components/parameters', 'a5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-components/pvp',
                component: ComponentCreator('/docs/rtg-components/pvp', '45f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-components/strategy',
                component: ComponentCreator('/docs/rtg-components/strategy', '221'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-components/writer',
                component: ComponentCreator('/docs/rtg-components/writer', 'b52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-overview/core-components/core',
                component: ComponentCreator('/docs/rtg-overview/core-components/core', 'f5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-overview/extensible-components/extensible',
                component: ComponentCreator('/docs/rtg-overview/extensible-components/extensible', 'b33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-overview/main',
                component: ComponentCreator('/docs/rtg-overview/main', '073'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

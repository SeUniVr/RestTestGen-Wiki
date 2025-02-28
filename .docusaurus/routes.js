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
    component: ComponentCreator('/docs', 'fc1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4df'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7f6'),
            routes: [
              {
                path: '/docs/automated-testing',
                component: ComponentCreator('/docs/automated-testing', 'e5a'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/docs/category/core-components',
                component: ComponentCreator('/docs/category/core-components', 'eef'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/category/extensible-components',
                component: ComponentCreator('/docs/category/extensible-components', '004'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/category/functional-testing-strategies',
                component: ComponentCreator('/docs/category/functional-testing-strategies', '3a1'),
                exact: true,
                sidebar: "strategiesSidebar"
              },
              {
                path: '/docs/category/other-strategies',
                component: ComponentCreator('/docs/category/other-strategies', '16d'),
                exact: true,
                sidebar: "strategiesSidebar"
              },
              {
                path: '/docs/category/security-testing-strategies',
                component: ComponentCreator('/docs/category/security-testing-strategies', '99f'),
                exact: true,
                sidebar: "strategiesSidebar"
              },
              {
                path: '/docs/rtg',
                component: ComponentCreator('/docs/rtg', 'd2d'),
                exact: true,
                sidebar: "overviewSidebar"
              },
              {
                path: '/docs/rtg-framework/components/core-extensibile-description',
                component: ComponentCreator('/docs/rtg-framework/components/core-extensibile-description', '85a'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/datatype/operation',
                component: ComponentCreator('/docs/rtg-framework/datatype/operation', 'e1d'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/datatype/parameters',
                component: ComponentCreator('/docs/rtg-framework/datatype/parameters', '10d'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/datatype/test-sequence-interaction-runner',
                component: ComponentCreator('/docs/rtg-framework/datatype/test-sequence-interaction-runner', '4fd'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/fuzzer/',
                component: ComponentCreator('/docs/rtg-framework/fuzzer/', '897'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/interaction-processor/',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/', '48a'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/mutator/',
                component: ComponentCreator('/docs/rtg-framework/mutator/', '12c'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/odg/',
                component: ComponentCreator('/docs/rtg-framework/odg/', '84f'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/operation-sorter/',
                component: ComponentCreator('/docs/rtg-framework/operation-sorter/', 'f9d'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/oracle/',
                component: ComponentCreator('/docs/rtg-framework/oracle/', 'ad0'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/parser/',
                component: ComponentCreator('/docs/rtg-framework/parser/', 'bfc'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/',
                component: ComponentCreator('/docs/rtg-framework/pvp/', '90c'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/strategy/',
                component: ComponentCreator('/docs/rtg-framework/strategy/', 'ee3'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/writer/',
                component: ComponentCreator('/docs/rtg-framework/writer/', 'fb5'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-tool/strategy/',
                component: ComponentCreator('/docs/rtg-tool/strategy/', '64b'),
                exact: true
              },
              {
                path: '/docs/rtg-tool/strategy/introduction',
                component: ComponentCreator('/docs/rtg-tool/strategy/introduction', '148'),
                exact: true,
                sidebar: "strategiesSidebar"
              },
              {
                path: '/docs/rtg-tool/strategy/mass-assignment-strategy',
                component: ComponentCreator('/docs/rtg-tool/strategy/mass-assignment-strategy', 'ae0'),
                exact: true,
                sidebar: "strategiesSidebar"
              },
              {
                path: '/docs/rtg-tool/strategy/nlp-strategy',
                component: ComponentCreator('/docs/rtg-tool/strategy/nlp-strategy', 'f9e'),
                exact: true,
                sidebar: "strategiesSidebar"
              },
              {
                path: '/docs/rtg-tool/strategy/nominal-error-strategy',
                component: ComponentCreator('/docs/rtg-tool/strategy/nominal-error-strategy', '7cd'),
                exact: true,
                sidebar: "strategiesSidebar"
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

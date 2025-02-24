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
    component: ComponentCreator('/docs', '653'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '951'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f7f'),
            routes: [
              {
                path: '/docs/automated-testing',
                component: ComponentCreator('/docs/automated-testing', 'd85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/datatype',
                component: ComponentCreator('/docs/category/datatype', '35b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/dynamic-operation-sorter',
                component: ComponentCreator('/docs/category/dynamic-operation-sorter', 'bcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/fuzzer',
                component: ComponentCreator('/docs/category/fuzzer', '35d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/interaction-processor',
                component: ComponentCreator('/docs/category/interaction-processor', '9d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/mutator',
                component: ComponentCreator('/docs/category/mutator', '490'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/operation-mutator',
                component: ComponentCreator('/docs/category/operation-mutator', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/operation-sorter',
                component: ComponentCreator('/docs/category/operation-sorter', 'd5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/oracle',
                component: ComponentCreator('/docs/category/oracle', 'e74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/parameter-mutator',
                component: ComponentCreator('/docs/category/parameter-mutator', '7ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/parameter-value-provider',
                component: ComponentCreator('/docs/category/parameter-value-provider', '8bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/rtg-as-framework',
                component: ComponentCreator('/docs/category/rtg-as-framework', '4f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/static-operation-sorter',
                component: ComponentCreator('/docs/category/static-operation-sorter', '96d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/strategy',
                component: ComponentCreator('/docs/category/strategy', '10a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/writer',
                component: ComponentCreator('/docs/category/writer', '6b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg',
                component: ComponentCreator('/docs/rtg', '5f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/datatype/operation',
                component: ComponentCreator('/docs/rtg-framework/datatype/operation', 'e8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/datatype/parameters',
                component: ComponentCreator('/docs/rtg-framework/datatype/parameters', '292'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/fuzzer/',
                component: ComponentCreator('/docs/rtg-framework/fuzzer/', '1e7'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/fuzzer/error-fuzzer',
                component: ComponentCreator('/docs/rtg-framework/fuzzer/error-fuzzer', '9c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/fuzzer/mass-assignment-fuzzer',
                component: ComponentCreator('/docs/rtg-framework/fuzzer/mass-assignment-fuzzer', '3f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/fuzzer/nominal-fuzzer',
                component: ComponentCreator('/docs/rtg-framework/fuzzer/nominal-fuzzer', 'bc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/fuzzer/subsequence-error-fuzzer',
                component: ComponentCreator('/docs/rtg-framework/fuzzer/subsequence-error-fuzzer', '9d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/interaction-processor/',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/', '9ff'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/interaction-processor/graph-inter-processor',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/graph-inter-processor', 'f49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/interaction-processor/jsonparser-inter-processor',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/jsonparser-inter-processor', '23e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/interaction-processor/nlp-inter-processor',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/nlp-inter-processor', '372'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/interaction-processor/request-dictionary-inter-processor',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/request-dictionary-inter-processor', '3e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/interaction-processor/response-dictionary-inter-processor',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/response-dictionary-inter-processor', 'c36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/mutator/',
                component: ComponentCreator('/docs/rtg-framework/mutator/', 'd67'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/mutator/operation-mutator/mutate-random-mutator',
                component: ComponentCreator('/docs/rtg-framework/mutator/operation-mutator/mutate-random-mutator', 'c4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/mutator/parameter-mutator/constraint-violation-mutator',
                component: ComponentCreator('/docs/rtg-framework/mutator/parameter-mutator/constraint-violation-mutator', '417'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/mutator/parameter-mutator/missing-required-mutator',
                component: ComponentCreator('/docs/rtg-framework/mutator/parameter-mutator/missing-required-mutator', '6c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/mutator/parameter-mutator/wrong-type-mutator',
                component: ComponentCreator('/docs/rtg-framework/mutator/parameter-mutator/wrong-type-mutator', '2b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/operation-sorter/',
                component: ComponentCreator('/docs/rtg-framework/operation-sorter/', 'baa'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/operation-sorter/dynamic/graph-based-operation-sorter',
                component: ComponentCreator('/docs/rtg-framework/operation-sorter/dynamic/graph-based-operation-sorter', '156'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/operation-sorter/static/random-operation-sorter',
                component: ComponentCreator('/docs/rtg-framework/operation-sorter/static/random-operation-sorter', '601'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/oracle/',
                component: ComponentCreator('/docs/rtg-framework/oracle/', '870'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/oracle/error-status-code-oracle',
                component: ComponentCreator('/docs/rtg-framework/oracle/error-status-code-oracle', 'dfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/oracle/mass-assignment-oracle',
                component: ComponentCreator('/docs/rtg-framework/oracle/mass-assignment-oracle', '0ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/oracle/producer-consumer-oracle',
                component: ComponentCreator('/docs/rtg-framework/oracle/producer-consumer-oracle', '6d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/oracle/status-code-oracle',
                component: ComponentCreator('/docs/rtg-framework/oracle/status-code-oracle', '2e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/',
                component: ComponentCreator('/docs/rtg-framework/pvp/', 'f68'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/multi-strategy/',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/', 'bd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/multi-strategy/enum-example-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/enum-example-pvp', 'ec2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/multi-strategy/global-dictionary-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/global-dictionary-pvp', 'fc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/multi-strategy/keep-last-id-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/keep-last-id-pvp', '642'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/multi-strategy/local-dictionary',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/local-dictionary', '3ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/multi-strategy/random-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/random-pvp', '218'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/', '559'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/default-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/default-pvp', '8aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/enum-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/enum-pvp', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/examples-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/examples-pvp', '50f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/last-request-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/last-request-pvp', 'fb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/last-response-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/last-response-pvp', 'dd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/request-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/request-pvp', '41a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/response-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/response-pvp', '71b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/strategy/',
                component: ComponentCreator('/docs/rtg-framework/strategy/', '67b'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/strategy/mass-assignment-strategy',
                component: ComponentCreator('/docs/rtg-framework/strategy/mass-assignment-strategy', 'a7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/strategy/nlp-strategy',
                component: ComponentCreator('/docs/rtg-framework/strategy/nlp-strategy', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/strategy/nominal-error-strategy',
                component: ComponentCreator('/docs/rtg-framework/strategy/nominal-error-strategy', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/writer/',
                component: ComponentCreator('/docs/rtg-framework/writer/', '815'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/writer/coverage-report',
                component: ComponentCreator('/docs/rtg-framework/writer/coverage-report', 'bae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/writer/report-writer',
                component: ComponentCreator('/docs/rtg-framework/writer/report-writer', '5d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-framework/writer/rest-assured-writer',
                component: ComponentCreator('/docs/rtg-framework/writer/rest-assured-writer', '566'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rtg-overview/core-components/core',
                component: ComponentCreator('/docs/rtg-overview/core-components/core', '68e'),
                exact: true
              },
              {
                path: '/docs/rtg-overview/extensible-components/extensible',
                component: ComponentCreator('/docs/rtg-overview/extensible-components/extensible', '6af'),
                exact: true
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

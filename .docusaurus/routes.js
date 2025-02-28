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
    component: ComponentCreator('/docs', '2be'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '36d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '88b'),
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
                path: '/docs/rtg-framework/components/core',
                component: ComponentCreator('/docs/rtg-framework/components/core', 'ba4'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/components/core-extensibile-description',
                component: ComponentCreator('/docs/rtg-framework/components/core-extensibile-description', '85a'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/components/extensible',
                component: ComponentCreator('/docs/rtg-framework/components/extensible', 'b56'),
                exact: true
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
                component: ComponentCreator('/docs/rtg-framework/fuzzer/', '1e7'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/fuzzer/error-fuzzer',
                component: ComponentCreator('/docs/rtg-framework/fuzzer/error-fuzzer', 'e02'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/fuzzer/mass-assignment-fuzzer',
                component: ComponentCreator('/docs/rtg-framework/fuzzer/mass-assignment-fuzzer', '9e4'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/fuzzer/nominal-fuzzer',
                component: ComponentCreator('/docs/rtg-framework/fuzzer/nominal-fuzzer', 'c66'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/fuzzer/subsequence-error-fuzzer',
                component: ComponentCreator('/docs/rtg-framework/fuzzer/subsequence-error-fuzzer', '100'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/interaction-processor/',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/', '48a'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/interaction-processor/graph-inter-processor',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/graph-inter-processor', '306'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/interaction-processor/jsonparser-inter-processor',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/jsonparser-inter-processor', '735'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/interaction-processor/nlp-inter-processor',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/nlp-inter-processor', '85d'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/interaction-processor/request-dictionary-inter-processor',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/request-dictionary-inter-processor', 'efb'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/interaction-processor/response-dictionary-inter-processor',
                component: ComponentCreator('/docs/rtg-framework/interaction-processor/response-dictionary-inter-processor', '49b'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/mutator/',
                component: ComponentCreator('/docs/rtg-framework/mutator/', '12c'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/mutator/operation-mutator/mutate-random-mutator',
                component: ComponentCreator('/docs/rtg-framework/mutator/operation-mutator/mutate-random-mutator', '727'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/mutator/parameter-mutator/constraint-violation-mutator',
                component: ComponentCreator('/docs/rtg-framework/mutator/parameter-mutator/constraint-violation-mutator', '09f'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/mutator/parameter-mutator/missing-required-mutator',
                component: ComponentCreator('/docs/rtg-framework/mutator/parameter-mutator/missing-required-mutator', '12e'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/mutator/parameter-mutator/wrong-type-mutator',
                component: ComponentCreator('/docs/rtg-framework/mutator/parameter-mutator/wrong-type-mutator', '0b5'),
                exact: true
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
                path: '/docs/rtg-framework/operation-sorter/dynamic/graph-based-operation-sorter',
                component: ComponentCreator('/docs/rtg-framework/operation-sorter/dynamic/graph-based-operation-sorter', '56a'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/operation-sorter/static/random-operation-sorter',
                component: ComponentCreator('/docs/rtg-framework/operation-sorter/static/random-operation-sorter', '77e'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/oracle/',
                component: ComponentCreator('/docs/rtg-framework/oracle/', 'ad0'),
                exact: true,
                sidebar: "frameworkSidebar"
              },
              {
                path: '/docs/rtg-framework/oracle/error-status-code-oracle',
                component: ComponentCreator('/docs/rtg-framework/oracle/error-status-code-oracle', '7a9'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/oracle/mass-assignment-oracle',
                component: ComponentCreator('/docs/rtg-framework/oracle/mass-assignment-oracle', '9a8'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/oracle/producer-consumer-oracle',
                component: ComponentCreator('/docs/rtg-framework/oracle/producer-consumer-oracle', '4f5'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/oracle/status-code-oracle',
                component: ComponentCreator('/docs/rtg-framework/oracle/status-code-oracle', '547'),
                exact: true
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
                path: '/docs/rtg-framework/pvp/multi-strategy/',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/', 'ffb'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/multi-strategy/enum-example-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/enum-example-pvp', 'a8f'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/multi-strategy/global-dictionary-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/global-dictionary-pvp', '15b'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/multi-strategy/keep-last-id-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/keep-last-id-pvp', '7c6'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/multi-strategy/local-dictionary',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/local-dictionary', 'b8d'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/multi-strategy/random-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/multi-strategy/random-pvp', 'ef1'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/', '1f7'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/default-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/default-pvp', '898'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/enum-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/enum-pvp', 'e5d'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/examples-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/examples-pvp', '27c'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/last-request-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/last-request-pvp', '0d3'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/last-response-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/last-response-pvp', 'e5d'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/request-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/request-pvp', '362'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/pvp/single-strategy/response-pvp',
                component: ComponentCreator('/docs/rtg-framework/pvp/single-strategy/response-pvp', 'e17'),
                exact: true
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
                path: '/docs/rtg-framework/writer/coverage-report',
                component: ComponentCreator('/docs/rtg-framework/writer/coverage-report', '167'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/writer/report-writer',
                component: ComponentCreator('/docs/rtg-framework/writer/report-writer', '6d3'),
                exact: true
              },
              {
                path: '/docs/rtg-framework/writer/rest-assured-writer',
                component: ComponentCreator('/docs/rtg-framework/writer/rest-assured-writer', 'fd9'),
                exact: true
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

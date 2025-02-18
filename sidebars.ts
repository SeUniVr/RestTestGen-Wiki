import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Tool Overview',
      link: {
        type: 'generated-index',
        description: "RestTestGen is a tool created to automatically generate test cases for REST APIs. The tool assumes that the source code of" 
        + "the service to be tested cannot be accessed, but one can rely on the OpenAPI specification and can interact with the REST API via the HTTP protocol."
        + "The OpenAPI specification of the REST API makes it possible to know what operations are available, what format of input data is needed to enable the tool" 
        + "to perform well-formed HTTP requests, and the format of the responses or output data."
        + "The advantage of using a black box approach is to be able to create a tool that is independent of the programming language with which the REST service"
        +"has been implemented. Furthermore, for systems with complex architectures consisting of many micro-services, implementing a tool with a white box approach" +
        "can be much more difficult.",
      },
      items: ['rtg-overview/core-components/core', 'rtg-overview/extensible-components/extensible'],
    },
    {
      type: 'category',
      label: 'RTG Components',
      link: {
        type: 'generated-index',
        description: "Components described in details.",
      },
      items: ['rtg-components/writer', 'rtg-components/strategy', 'rtg-components/pvp', 
              'rtg-components/oracle', 'rtg-components/operation-sorter', 'rtg-components/mutator', 
              'rtg-components/interaction-processor', 'rtg-components/fuzzer', 'rtg-components/parameters'],
    },
    
  ],
};

export default sidebars;

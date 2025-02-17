# Core Components
The tool provides researchers and practitioners with some “core components” that are presented in detail below. 

## OpenAPI Specification Parser
The OpenAPI specification may be regarded as the starting point for black-box testing of REST APIs. However, this specification often has errors or inconsistencies that can make the official ```swagger.io``` parser ineffective. In RestTestGen there is a **robust parser** that is more tolerant of unexpected behaviour. In this case, properties not belonging to the grammar are ignored, while inconsistencies with the specification are corrected when possible. For example, type conversion is attempted if there is no match (e.g. ```“0”``` instead of ```0```). Values that cannot be converted are ignored.

## Operation
The data analysed during the parsing of the specification are used to fill an internal data structure that constitutes a list of ```Operations```, which correspond to the actual operations within the API. Each of these elements contains the corresponding **endpoint**, **HTTP method** and **schemas** for the **input** and **output** data, encapsulated in a ```Data Template``` which is a structure that contains the parameter names, their types, their domain (e.g. the format of strings or the accepted range of values for numbers) and any other optional constraints. Data templates are hierarchical, so both atomic values and compound data (e.g. JSON objects) can be modelled. 

## Test Strategy
It is defined by the user who will be responsible for instantiating a Data Template, i.e. assigning a value to each data element in the template.  Specific test strategies may require changes in the Data Template.

## Test Runner
A test case can perform several interactions (i.e. request and response pairs) that are related sequentially. RestTestGen provides a ```TestSequence``` component, i.e. a list of interactions. These are modelled with a ```TestInteraction``` component that contains all the information to test an operation. The ```TestSequences``` are, in turn, used by the ```TestRunner```, which is responsible for executing the ```TestInteraction``` sequence that is contained in the ```TestSequence```. The data from the HTTP responses are stored in the corresponding ```TestInteraction```. The ```TestRunner``` supports authentication (e.g. API key or bearer token) and reset of the API during testing if a reset endpoint is present in the specification.

## Operation Dependency Graph (ODG)
Ordering operations intelligently is of paramount importance. The tool provides a component that captures **producer-consumer dependencies** between operations according to the analysed specification. Nodes represent operations and direct arcs connect two nodes when the output of the source operation can be used as input for the target operation.

## Dictionary
Dictionaries are made available to **store** and **retrieve values** observed during the testing of an API. A global dictionary captures all the values observed during a test session. It is also possible to have several local dictionaries that can store the values observed in a smaller set of Test Interactions.   
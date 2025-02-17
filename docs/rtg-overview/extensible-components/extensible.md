# Extensible Components
These components are a set of abstract and concrete classes for which researchers or experts might want to provide a new implementation to realise their new testing algorithm.

## Operation Ordering
The ordering of operations, as mentioned before, is one of the crucial challenges for successful testing with a black box approach. RestTestGen provides ```Operation Ordering```, a component that is responsible for deciding the order of operations in a test sequence. The ordering of operations can be **static** (i.e. the ordering is performed before starting the execution of the ```TestSequence```) or **dynamic** (i.e. the order within the ```TestSequence``` is defined during the test execution as the next operation to be tested depends on the outcome of the previous ones).   

## Input Value Provider
An Input Value Provider is the component whose task is to **calculate** a **value for each parameter**. 

RTG already contains some concrete **single-strategy** implementations of the Input Value Provider. They are:
- **Example Value Provider**: returns a random value from among the examples. 
- **Default Value Provider**: returns the default value of a parameter.
- **Dictionary Value Provider**: chooses a value from the dictionary, under the condition that a value for a parameter with the same name has already been observed in the test session.
- **Random Value Provider**: generates a random value based on the specification parameter pattern. 
- **Narrow Random Value Provider**: similar to the Random Value Provider, but some of the values are generated in a narrower range.   
- **Request Dictionary Value Provider**: chooses a value for the parameter from a dictionary of values used for successful requests (i.e. ```2XX status code```). 
- **Response Dictionary Value Provider**: chooses a value for the parameter from a dictionary of response values observed in previous interactions. 
- **Last Request Dictionary Value Provider**: is the same as the Request Dictionary Value Provider, but the value assigned to the parameter is the last one observed.   
- **Last Response Dictionary Value Provider**: is equal to the Response Dictionary Value Provider, but the value that is assigned to the parameter is the last one observed. 

In addition, the framework contains concrete **multi-strategy** Input Value Providers that combine several existing single strategies. These are:
- **Random Selector of Input Value Provider**: randomly chooses a single-strategy input value provider from those available and compatible for an input parameter.   
- **Enum and Example Priority Input Value Provider**: prioritise enum and example values as they are more likely to be effective, selecting them with high probability and selecting the remaining single-strategy providers with lower probability. 
- **Global Dictionary Input Value Provider**: priority is given to the use of a global dictionary. A global dictionary is defined as a dictionary in which all values observed during a test session are stored.   
- **Keep Last ID Input Value Provider**: the main objective of this strategy is to maintain and reuse the last observed ID value for a parameter.
- **Local Dictionary Input Value Provider**: priority is given to the use of a local dictionary. A local dictionary is defined as a dictionary within which values from a sub-set of Test Interaction have been stored.

## Mutation Operator
This is a component that provides the ability to **dynamically change**, i.e. mutate, the value of an input parameter.

## Oracle
This component is responsible for **making decisions** on the correct execution of a ```TestSequence```. The result of an evaluation by an Oracle is a ```TestResult```, which can be: ```PENDING``` (i.e., if the test case has not yet been executed), ```PASS``` (i.e., if the test case has passed), ```FAIL``` (i.e., if the test case has failed), ```ERROR``` (i.e., if the test case has encountered an error during execution), ```UNKNOWN``` (i.e., if the oracle is unable to make a decision). Two oracles are already implemented in RTG: the **Oracle Status Code** and the **Oracle Schema Validation**. The first oracle classifies as ```PASS``` a test case whose HTTP response is ```2XX status code```; as ```FAIL``` when it receives a ```5XX status code```; as ```UNKNOWN``` if the response is a ```4XX status code``` because the error code is not informative enough for the oracle to make a decision.   

The second oracle, on the other hand, compares the content of an HTTP response with its pattern as defined in the specification. The test is classified as ```PASS``` if the response is valid with respect to the schema, otherwise as ```FAIL```.

## Writer
This is the component used to write test sequences to files. Within the framework, again, there are two implementations. In particular:
- **JSON Report Writer**:  issues the report of a test sequence executed on a file in JSON format, including the HTTP request and response of each interaction and the result of the oracle.
- **RESTAssured Writer**: outputs the automatically generated test sequence as a test case in Java, using the RESTAssured library. 

## Strategy
This is the **entry point** of the framework and represents the place where the business logic of the test strategy is to be implemented. A strategy consists of integrating the framework components, possibly after extending and/or customising them. 
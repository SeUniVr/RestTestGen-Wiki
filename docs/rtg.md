# RestTestGen
RTG is a **framework** that provides a collection of extensible components to **implement automated black-box testing strategies** of REST APIs. This facilitates the work of those who want to implement new automated testing strategies, whether researchers or practitioners. The assumption made a priori is that one cannot have direct access to the source code, but only to the OpenAPI specification, and that one can interact with the REST API directly via the HTTP protocol.

Through the specification, it is possible to know the list of available operations, the format of the input data and the format of the answers. This allows the tool to execute well-formed HTTP requests and evaluate the responses that are received. The advantage of using a **black-box approach** is to be able to create a tool that is independent of the language in which the REST service has been implemented. Furthermore, for complex architectures composed of many micro-services, implementing a white-box approach may be much more difficult.

What is crucial to emphasise is that RestTestGen has two faces.
It can be considered both as a **tool** and as a **framework**. In the following, the concepts are explained in more detail.

## RTG as Framework
Within the RestTestGen project, a number of components are made available which are divided into two macro-categories.
You can find "**core components**" and "**extensible components**".

The former are components created ad-hoc to guarantee the basic functionality for the correct functioning of the tool. Within this category we find components such as the parser, which takes care of reading the OpenAPI specification and saving the information required for the testing process. We can also find a class that implements the operation dependency graph (ODG) and those that represent the concepts of operation (Operation) and testing strategy (```Strategy```). In addition, we find the class that implements the concept of the Test Runner, i.e. the mechanism through which the various requests are performed. The framework provides the possibility of creating a list (```TestSequence```) of interactions (```TestInteraction```) that are executed in the form of HTTP requests. Within the TestInteraction object, all the information that was observed during the execution of the request is stored.

These components are **standard** and are used for the functioning of the framework.
Extensible components, on the other hand, are made available to the programmer to be **implemented** and **customised** as required.
They may be seen as superclasses to be extended at will. Each of them provides standard functionalities that can be integrated or modified depending on the strategy to be implemented.
For example, there is the ```Writer``` class that allows interactions to be translated into actual test cases. Each programmer can implement his or her **own methodology**, for example by writing tests in JUnit or creating ad-hoc JSON reports according to their own needs.

The **entry point** of the framework can be identified with the testing strategy that is implemented. In fact, once RTG starts running, what happens, after the parsing has been performed, is the reading of the configuration file which contains all the necessary information about the strategy to be executed and which REST API is going to be under test. Once the testing technique has been identified, the **```start()```** method is launched, which must be redefined each time a new strategy is implemented. Within the ```start()``` method, then, you can find the test logic that you want to apply to the REST API that you want to test.

RestTestGen, therefore, is fully configurable and extendable at will according to what researchers and programmers need to implement.

## RTG as Tool
On the contrary, the project can also be seen as a mere **tool**. In fact, some components and strategies have been implemented within it. This was done both to provide an example of how to use the tool for those wishing to try their hand at its extension, and to provide basic strategies already implemented that can actually be used to test one's own API.
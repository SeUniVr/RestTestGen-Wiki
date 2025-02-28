# Test Interaction, Test Sequence, Test Runner, Test Result
> io.resttestgen.core.testing;

In order to handle the HTTP requests that are executed during the test, several components are provided that facilitate the interaction between the framework itself and the REST API being tested. These are the ```TestInteraction``` class, the ```TestSequence``` class, the ```TestRunner``` class and the ```TestResult``` class. They are explained in detail below.

## Test Interaction
This class represents a single HTTP test interaction, consisting of a request and a response. It is used to store and manage information about HTTP requests sent and responses received.
Among others, the class stores:
- The **reference operation** being tested. 
- The **HTTP method** used (```GET```, ```POST```, ```PUT```, ```DELETE```, etc.).
- The **URL** of the request and any parameters.
- The **HTTP headers** and the body of the request.
- The exact **time** at which the request was sent.

After the server has replied, the object is updated with:
- The **response protocol** (e.g. ```HTTP/1.1```).
- The HTTP **status code** (200, 404, 500, etc.).
- The **content** of the **response** and its headers.
- The **time** at which the response was received.

All this makes it possible to trace and analyse the behaviour of an API in response to specific inputs. In addition, the class provides features such as reset (to reuse the same object in a new test) and deep cloning, which is useful when one wants to perform a similar test without modifying the original data.

## Test Sequence
Whereas the ```TestInteraction``` class, described above, deals with handling a single interaction, i.e. consisting of a request and a response, the ```TestSequence``` class, on the other hand, deals with organising several interactions in an ordered sequence. This is crucial when tests must respect a certain logical flow. 

For example, let us consider a REST API that manages a store of products, allowing them to be placed in the shopping cart, checked out and, finally, paid for. A realistic flow to be executed during testing could be that which sees the execution of a request to list all the products, the insertion of a product into the shopping cart, the confirmation of the order, and the payment. Each step represents a TestInteraction, while the whole of them represents a ```TestSequence```. 

The ```TestSequence``` class, therefore, contains a list of ```TestInteractions``` and provides a number of useful methods for handling the latter. There are, therefore, methods that are used to add interactions to the sequence; to obtain the first element, the last element, or the element in a specific position; to filter interactions according to a successful status code. Then there are methods for handling tests. In particular, the ```isExecuted()``` method checks that all interactions have been executed; while the ```inferVariablesFromConcreteValues()``` method is used to replace concrete values with references to previous test outputs. This occurs when previous interactions have returned a value that was subsequently used as input. 

## Test Runner
The ```TestRunner``` class is responsible for running a test sequence on a REST API, sending HTTP requests and analysing the responses received. It is closely related to the ```TestInteraction``` and ```TestSequence``` classes, as it uses the former to represent individual requests and the latter to execute an ordered set of tests.

```TestRunner``` follows the Singleton design pattern, ensuring that only one instance of the object exists in the entire programme. This avoids problems with concurrent handling of requests and guarantees a single point of control.
The main method of the class is ```run(TestSequence testSequence)```, which runs each ```TestInteraction``` within the sequence and tries to execute it with ```tryTestInteractionExecution()```. Each test is processed individually, ensuring that the results are recorded correctly.
The ```tryTestInteractionExecution()``` method tries to execute a single interaction and, if necessary, retries several times in case of errors. In this case:
- If the server responds with a specific error (e.g. 429 Too Many Requests), the test is re-executed after a progressively increasing time interval.
- If the interaction fails for other reasons, it is nevertheless retried up to a maximum of 10 times (```MAX_ATTEMPTS```).

After execution, the collected data is passed on to a series of processors (```interactionProcessors```), which analyse and filter the results.

## Test Result
The ```TestResult``` class is designed to represent the result of a test. Each test can have several outcomes, which are defined in the internal TestResultEnum:
- ```PENDING```: the test is pending evaluation.
- ```PASS```: The test has passed successfully.
- ```FAIL```: The test has failed.
- ```ERROR```: An unexpected error has occurred.
- ```UNKNOWN```: The status of the test is unknown.

The ```TestResult``` class is complementary to the TestRunner in that it allows a clear result to be assigned to each executed test.





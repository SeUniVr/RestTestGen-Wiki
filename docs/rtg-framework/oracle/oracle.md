# Oracle
> io.resttestgen.implementation.oracle;

This component deals with making assertions on the correct execution of a ```TestSequence```. Some implementations of the tool are already provided within the tool. Details of these are explained below.

## Error Status Code Oracle
This is a test oracle which verifies whether a TestSequence has been handled correctly by the server. It is based on the HTTP status code.   

This oracle checks whether the ```TestSequence``` has been executed correctly and, if one or more ```TestInteraction``` have not been executed, it terminates with an error.  After that, the status code of the last interaction of the sequence is analysed. If the status code is in class ```4XX``` (i.e. client-side error), the test is considered to have passed. If the status code indicates a success, i.e. class ```2XX```, the test is considered to have failed because the incorrect ```TestSequence``` was accepted by the server. Finally, if the status code indicates a server error, i.e. class ```5XX```, the test fails because the server should not generate internal errors but respond with a correctly handled error message.

## Status Code Oracle
This is an oracle that evaluates the outcome of a ```TestSequence```, based on the HTTP status codes of the answers.  First, it is checked whether the ```TestSequence``` was executed and if, at least one ```TestInteraction``` was not executed, everything is terminated with an error. After that, the status codes of the answers are analysed. If all interactions have a status code of class ```2XX```, then the test passes. Otherwise, if at least one interaction has a ```5XX``` error code, the test is considered to have failed. If neither of these two conditions occur and at least one interaction has an error code of class ```4XX``` (i.e. client error), then the test is indeterminate.

## Mass Assignment Oracle
This oracle checks whether a test sequence has exposed a **Mass Assignment vulnerability**. This vulnerability occurs when an attacker is able to modify unintended fields of an object sent to a REST API.   

First, the sequence is tested. Next, it looks to see if an "injected" value appears in a subsequent request to the API. If this is true, it means that an unexpected parameter was accepted and saved by the server. It then determines whether the vulnerability is present and classifies the result as ```FAIL``` if the vulnerability was successfully exploited twice; as ```UNKNOWN``` if the vulnerability was only exploited once; as ```PASS ```if the exploit attempt was unsuccessful. The main method of the class is ```assertTestSequence()``` which may be regarded as the heart of the oracle, where the test sequence is analyzed. Each Test Interaction is scanned for an injected parameter. The injected value is compared to the value returned by the next read operation and then counted how many times the injected value is reflected in the response.

## Producer Consumer Oracle
This oracle assesses whether a test sequence consisting of two interactions operates on the same “object” in a **producer-consumer relationship**. In other words, it checks whether the output of the first interaction is used as input in the second.   

If the test sequence contains exactly two interactions, the first interaction (producer) is retrieved, and it is checked whether it has produced a non-empty response body. If so, the second interaction (consumer) is also retrieved. A count is made of how many ```LeafParameters``` of the fuzzy operation of the second interaction are present in the body of the first. The ratio of the found parameters to the total number of parameters is then calculated, and if this is greater than or equal to 70%, a producer-consumer relationship can be considered to have been found.   

Finally, it should be noted that if the sequence contains more than two interactions or the response body is empty, then the test fails. 
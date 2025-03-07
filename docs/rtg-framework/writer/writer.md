# Writer
> io.resttestgen.implementation.writer;

The framework provides a component that allows the various ```TestSequences``` to be written to file. This is useful when a researcher or programmer needs to have a clearer view of the various tests that have been performed on the REST API under test.  At the moment, only three implementations are provided, however, it is possible to create others as desired and according to individual needs.   

- **RestAssuredWriter**: allows the created ```TestSequence``` to be converted into test cases using the RestAssured framework. The class consists of various methods for creating a suitable test class. First, the necessary imports are defined and the actual class is generated with its annotations. Then, for each ```TestInteraction``` in the sequence, the corresponding method within the test class is generated. This means that for each ```TestInteraction```, the method signature is created, the parameters are initialised, the request to be performed is defined and, finally, the assertions are also specified.   

- **ReportWriter**: this class is useful for generating and storing detailed reports on ```TestSequences```, allowing the results to be analysed later. The JSON structure facilitates integration with other data analysis or visualisation tools. 

- **CoverageReportWriter**: the purpose of this class is to collect test case coverage data, organise it in JSON format and save it in a dedicated folder so that it can be easily analysed. The information is retrieved on the basis of the Coverage Manager component, which contains the information collected during the test session.
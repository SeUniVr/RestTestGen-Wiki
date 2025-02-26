# Operation
The Operation class makes it possible to represent an operation within the OpenAPI specification that is being parsed. The class contains several attributes that serve to better describe the functionality being considered. Here are the main ones:
- **Method**: indicates which method is used for the request (```GET```, ```POST```, ```PUT```, ```DELETE```, ...).
- **Endpoint**: indicates the URI to which the request is sent.
- **Parameters**: there are four separate sets of parameters. One for header parameters, one for path parameters, one for query parameters and one for cookie parameters. 
- **Type of CRUD operation**: indicates whether the operation is ```CREATE```, ```READ```, ```UPDATE```, ```DELETE```.
- **Validation Rules**: there is a set of custom validation rules to be applied to the operation. 
- **Request body**: there is an attribute of type ```StructuredParameter``` representing the body of the request.
- **Response**: the class also handles the response that is obtained once the request has been executed, so there is an attribute of type ```StructuredParameter``` that contains the body of the response. 

There are two constructors, the first of which initialises the operation from data that is present within a map obtained by parsing the API to be tested. There is also a copy constructor that creates a new instance of Operation from the data of another operation. This constructor is useful for **duplicating** an operation and creating a temporary version on which to apply some modifications. 

We then have several methods to allow developers and researchers to **interface with** the **parameters** of a given operation. For instance, we can find ```getAllRequestParameters()``` which returns all the parameters of the request, including those in the body (```requestBody```); or also ```getHeaderParameters()```, ```getPathParameters()```, ```getQueryParameters()```, ```getCookieParameters()``` which return only a certain type of parameters. 

On the other hand, there are also methods that also allow the handling of parameters that the Operation produces as output. In this case, we can, for instance, find the ```getOutputParameters()``` method that returns a map containing the various output parameters. 
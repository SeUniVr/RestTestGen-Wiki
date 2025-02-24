# Parameters

The abstract class ```Parameter``` provides the representation of a parameter within the OpenAPI specification. Parameters are used in HTTP requests to pass data, e.g. in query parameters, header, body, ...  

The ```Parameter``` class is designed to handle parameters in a structured manner.   
The following fields are used to describe a parameter: 
- **Name** and **NormalizedName**: i.e. the name and its normalised version. 
- **SchemaName**: if the parameter refers to a schema in the OpenAPI specification, its name is stored.   
- **Required**: indicates whether a parameter is required or not. 
- **Format**: specifies the format of the parameter (e.g. int32, date, ...) 
- **Location**: determines where the parameter is used (e.g. query, header, path, cookie) 
- **Style**: defines how the parameter is serialised.
- **Type**: specifies the type of the parameter 
- **DefaultValue**: indicates the default value of a parameter, if it exists.   
- **EnumValue**: indicates a list of possible values for the parameter if it is of type enum. 
- **Examples**: indicates a list of valid examples for the parameter value.   
- **Description**: contains a description of the parameter.   
- **Operation**: indicates the operation to which the parameter refers 
- **Parent**: contains the reference to a parent parameter if it exists, otherwise it is null. 

Some of the methods within the class allow us to get all the children of the parameter with ```getChildren()```, if present and if the parameter is structured. Then there are methods for adding/removing children and obtaining the root of the complex structure. There are then various methods for handling values. It is worth emphasising the presence of a deepClone() method that performs a copy but taking particular care not to alter the original parameter.  

Within the class we find a number of methods to help the developer manage these values, namely the methods ```getValue()``` and ```getConcreteValue()``` which return the value of the parameter, even if the value is itself an instance of LeafParameter; the methods ```setValueManually(Object value)``` and ```setValueWithProvider(ParameterValueProvider provider)``` to set the value to the parameter manually or via a Value Provider.   
Within the class, there is also an attribute to identify whether the parameter is a resource identifier (e.g. ID). 

## Leaves Parameters
In the following, all classes inheriting from ```LeafParameter``` are explained in detail: ```StringParameter```, ```BooleanParameter```, ```NumberParameter```, ```GenericParameter```, ```NullParameter```.

### String Parameter
This class represents a parameter of type string. Within the class we can find several constructors, we have the copy constructor, the one that initialises the parameter by extracting information regarding the maximum length, minimum length and, possibly, the pattern it must respect. There is also a constructor that converts a generic Parameter, associating the type ```STRING``` as type. 

We also found a method for deducing the format of the string. It is based on both the format attribute and the parameter name. For example, if the name starts/ends with “date” and “time”, the type ```DATE``` or ```TIME``` will be returned with a 50% probability.

### Number Parameter
This class, which extends the ```LeafParameter``` class, represents a numeric parameter with the possibility of defining constraints on the maximum or minimum value. Also present here is the ```deepclone()``` method, which allows a deep copy of the object to be created to avoid inconsistent behaviour due to the use of shared references. There is also a method for deducing the parameter format by choosing between ```INT32```, ```INT64```, ```FLOAT```, ```DOUBLE```.

### Boolean Parameter
This class extends ```LeafParameter``` and represents a Boolean parameter and its purpose is to handle ```Boolean``` parameters, i.e. they can only take on true or false values. Also implemented here is the ```deepClone()``` method, which creates an exact copy of the current object, ensuring that changes made to the copy do not affect the original. This is particularly useful in contexts where parameters must be duplicated without altering the state of the original configuration. 

### Null Parameter
This class represents a parameter whose value is always the string “null”, instead of the value ```null```. This avoids logical problems related to ```NullPointerException``` exceptions. The use of the string “null”, therefore, has two main objectives: to prevent an instance of ```NullParameter``` from being treated as an uninitalised parameter, and to prevent ```NullPointerException``` exceptions in methods and libraries such as OkHttp, which may not handle null values correctly.

### Generic Parameter
This class is designed to represent a generic parameter with no particular restrictions on type and values. It is used when the parameter type is not specified (UNKNOWN) and accepts any value. This class is useful when the parameter type is unknown or needs to be flexible.

## Structured Parameters
The ```StructuredParameter``` class extends the ```Parameter``` class and serves as the basis for the various structured parameters that are used to represent complex objects or structures.   

The class provides several constructors to initialise a structured parameter from a map, another structured parameter or a generic ```Parameter```. A ```getJsonPath()``` method is also implemented, which returns the JSON path representing the position of the parameter in the hierarchical structure. All methods are then redefined in subclasses to define the specific behaviour of structured parameters that are presented below.

### Array Parameter
This class extends the ```StructuredParameter``` class and is used to handle array-type parameters. The style of the array is also set in the constructor. By default, it is of type ```FORM```, but the styles can be different, e.g. ```SPACE_DELIMITED``` or ```PIPE_DELIMITED```. It is worth noting the presence of the Parameter referenceElement attribute which indicates the reference to the type of element of which the array is composed.

### Object Parameter
This class is designed to represent a parameter of type “object”. The class maintains a list of properties representing the fields of the object. The order of the properties is useful from a testing perspective but is not taken into account for the ```hash()``` and ```equals()``` methods. The main constructors initialise the object by extracting information from a map created from the OpenAPI specification or from a JSON object.

## Combined Schema Parameter
The abstract class ```CombinedSchemaParameter``` represents a parameter type that combines several schemas. A schema may consist of several sub-schemas, combined via keywords such as “allOf”, “anyOf” or “oneOf”.   

The class maintains a list of parameter schemes that are part of the combined scheme and maintains a list of properties, i.e. additional parameters that may be applied to the combined scheme. The outputParameterSchema attribute represents the parameter resulting from the combination of the schemes, i.e. the final selected scheme. The objective, therefore, is to be able to manage and manipulate parameters using combined schemas ([reference](https://swagger.io/docs/specification/v3_0/data-models/oneof-anyof-allof-not/)).  

Below are the various implementations of the class: 
- **AllOfParameter**: this class represents a combined parameter using the keyword “allOf” which requires a parameter to respect all combined patterns.   
- **AnyOfParameter**: this class represents a parameter that requires the supplied input to conform to any of the listed patterns, not all of them.   
- **OneOfParameter**: this class represents a parameter that requires the supplied input to conform to exactly one of the listed patterns. 
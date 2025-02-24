# Keep Last ID Parameter Value Provider
The main objective of this strategy is to maintain and reuse the last observed ID value for a parameter. In this way, an intelligent approach is attempted, avoiding generating new IDs when an existing one can be reused. If the value is not available, on the other hand, various strategies are tried until random generation.   
In detail, it is checked whether the parameter has the tag "injected" and a concrete value. If so, that value is returned directly.   
If, on the contrary, the parameter is a CRUD identifier (i.e. a parameter representing a unique identifier of a response in a Create, Read, Update, Delete operation) and the operation is ```UPDATE```, ```READ``` or ```DELETE,``` an attempt is made to use the last ID used. If ```currentIdValue``` is already set, it is used directly, otherwise an attempt is made to retrieve it via the ```LastResponseDictionaryParameterValueProvider```. If none of these sources are available, we switch to secondary providers such as Enum, Examples, Default and Random.   

Conversely, if the parameter is not a CRUD identifier, a similar logic is followed, but without attempting to reuse a previous ID. One of the available sources is chosen, otherwise a random value is generated if necessary.


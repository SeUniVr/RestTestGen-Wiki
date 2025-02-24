# Default Parameter Value Provider
When a parameter is requested, the class attempts to retrieve the default values given in the OpenAPI specification. If the ```SAME_NAME``` mode is enabled, it collects the default values of all parameters with the same name; if the ```SAME_NORMALISED_NAME``` mode is enabled, it collects those with the same normalized name; in all other cases, it uses only the default value of the specific parameter. 

Once this is done, filters are applied to eliminate duplicates, and if the strict mode is enabled, values that do not conform to the specification of the parameter to be valued are discarded. The result is a set of values optimized for use in the various tests.


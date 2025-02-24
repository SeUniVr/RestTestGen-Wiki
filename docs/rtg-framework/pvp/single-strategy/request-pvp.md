# Request Dictionary Parameter Value Provider
Through this value provider, parameters can be given a value using a global request dictionary. A dictionary is used that collects the values used in previous requests, allowing them to be reused in subsequent requests.  
By default, the class uses the global request dictionary obtained via ```Environment.getInstance().getGlobalRequestDictionary()```. The constructor sets the ```SAME_NORMALISED_NAME``` mode, allowing values to be collected not only by the exact name of the parameter, but also by its normalised name. In addition, the removal of duplicates is activated by default to avoid the inclusion of redundant values. 

The ```collectValuesFor(LeafParameter leafParameter)``` method performs the following operations: 
- **Retrieval of values from the request dictionary**: it searches for values based on the exact name of the parameter and then extends the search using the normalised name as well.
- **Extraction of values from retrieved dictionary entries**: each ```DictionaryEntry``` contains a key-value pair, and the value is extracted from its source (```DictionaryEntry::getSource```). 
- **Filter non-compliant values** (if strict is enabled): if strict mode is enabled, values that do not comply with the parameter specifications are removed. 

The class provides two methods for customising the behaviour of the provider: 
- ***```setRequestDictionary(Dictionary requestDictionary)```***: allows a specific dictionary to be set from which to extract values.   
- ***```setRemoveDuplicates(boolean removeDuplicates)```***: determines whether duplicate values are to be removed. 
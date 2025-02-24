# Response Dictionary Parameter Value Provider
Through this value provider, parameters can be given a value using a global dictionary of answers. A dictionary is used that collects values from previous answers. By default, the class uses the global response dictionary, obtained via ```Environment.getInstance().getGlobalResponseDictionary()```. The constructor sets the ```SAME_NORMALISED_NAME``` mode, allowing values to be collected not only from the exact name of the parameter, but also from its normalised name. By default, the option to remove duplicates is enabled to avoid returning redundant values. 

The ```collectValuesFor(LeafParameter leafParameter)``` method follows these steps: 
- **Retrieval of values from the response dictionary**: searches for values using the exact name of the parameter and extends the search using the normalised name as well.
- **Extraction of values from retrieved dictionary entries**: each ```DictionaryEntry``` contains a key-value pair, and the value is extracted from its source (```DictionaryEntry::getSource```). 
- **Filter non-compliant values** (if strict is enabled): if strict mode is enabled, values that do not comply with the parameter specifications are removed. 

Again, the class offers two methods for customising the behaviour of the provider:
- ***```setDictionary(Dictionary dictionary)```***: allows you to set a specific dictionary from which to extract values. 
- ***```setRemoveDuplicates(boolean removeDuplicates)```***: determines whether duplicate values are to be removed. 
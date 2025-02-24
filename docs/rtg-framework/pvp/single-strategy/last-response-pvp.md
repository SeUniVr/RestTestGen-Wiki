# Last Response Dictionary Parameter Value Provider
Similar to the class described above, values from a dictionary are also used here. However, the values are taken from a global response dictionary, i.e. from data obtained from the answers of executed requests. By default, the class uses the global response dictionary which is available via ```Environment.getInstance()```. The constructor sets the ```SAME_NORMALISED_NAME``` mode, allowing values to be collected not only by the exact name of the parameter, but also by its normalised name. 

The ```collectValuesFor(LeafParameter leafParameter)``` method collects the available values for a given parameter by following these steps: 
- **Retrieval of values from the response dictionary**: values are retrieved based on the exact name of the parameter (```leafParameter.getName()```) and are also retrieved based on the normalised name (```leafParameter.getNormalisedName()```). 
- **Filtering of non-conforming values**: if strict mode is active, entries containing values that do not conform to parameter specifications are removed. 
- **Sorting of values by date of discovery**: retrieved entries are sorted by date of discovery (```DictionaryEntry::getDiscoveryTime```) and the last available value is selected.   

It is possible to modify the dictionary from which the provider extracts values using the ```setDictionary(Dictionary dictionary)``` method, allowing more granular control over the data used in the tests.
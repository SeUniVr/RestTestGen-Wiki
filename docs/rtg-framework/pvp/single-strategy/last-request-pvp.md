# Last Request Dictionary Parameter Value Provider
A global dictionary is relied upon to value parameters with this technique. This contains the values collected from previous API requests, allowing the most recent data to be reused. By default, the provider uses the global dictionary of requests that is available in the Environment. This dictionary contains DictionaryEntries that associate parameters with specific values recorded during previous API requests. The constructor sets the mode ```SAME_NORMALISED_NAME```, which means that values will be collected not only from parameters with the same name, but also from those with the normalised name. 

The ```collectValuesFor(LeafParameter leafParameter)``` method collects the available values for a parameter, following these steps: 
- **Retrieval of values from the dictionary**: values are retrieved based on the exact name and values based on the normalised name are also retrieved.   
- **Filtering of non-conforming values**: if strict mode is active, entries containing values that do not conform to the parameter type and constraints are removed. 
- **Sorting of values by discovery date**: the collected values are sorted according to the discovery timestamp (```DictionaryEntry::getDiscoveryTime```) and the last available value, i.e. the most recent, is selected.   

The class provides the ```setDictionary(Dictionary dictionary)``` method, which allows the dictionary from which the values are taken to be changed, allowing for greater flexibility in the use of the provider.


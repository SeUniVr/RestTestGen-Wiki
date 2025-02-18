# Mutator
A mutator is a software component that modifies in a controlled manner certain aspects of an entity, such as data, parameters or operations, with the aim of generating variations useful for testing, optimisation or analysis of the robustness of a system.  

Two types of mutator can be found within RTG: the **parameter mutator** (e.g. modifies the values of input parameters, introducing random or targeted variations) and the **operation mutator** (e.g. changes the behaviour of operations, e.g. by replacing parameters).  

The mutators are describe in details below.

## Operation Mutators

### Mutate Random Parameter With Parameter Mutator Operation Mutator
This is an operation mutator.
This class randomly modifies a parameter of an operation, using a specified parameter mutator (```ParameterMutator```). Its main purpose is to generate random variations in operations, useful for testing and analysing the robustness of a system. The mutator checks whether the operation to be modified contains at least one mutable parameter and, if so, selects one at random. It then applies a change to the chosen parameter using the provided parameter mutator. It returns the new mutated operation, while keeping the original intact. When the ```mutate()``` method is applied, the operation is cloned to avoid changes to the original. If no mutable parameters exist, the method terminates, and the operation remains unchanged. If, on the contrary, they do exist and are changed, a tracking tag is also introduced to show that the parameter has been changed.

## Parameter Mutators

### Constraint Violation Parameter Mutator
Is a mutator that alters parameter values so as to violate their constraints.  First, it is checked whether a parameter is mutable (i.e. whether it is an enum with predefined values, a string with minimum or maximum length constraints, a number with upper or lower bounds). If the parameter is mutable, then it is modified to violate its constraints. Thus, if the parameter is an enum, a random value is set that does not belong to the list of values; if the parameter is a string, the length constraint is violated; if the parameter is a number, finally, the minimum or maximum value constraint is violated. The aim is to generate **invalid input** to test the behaviour of the system in the event of errors.

### Missing Required Parameter Mutator
This mutator is designed to test the operation of the system when mandatory parameters are removed in requests. A parameter is considered mutable if it is mandatory. If the parameter is mutable, then it is removed. Therefore, if the parameter is a ```LeafParameter```, the value is deleted; if the parameter is an array, then all values are deleted; if the parameters are of another type, they are directly removed from the operation. The aim is to generate incomplete requests to test the error handling by the REST API under test.

### Wrong Type Parameter Mutator
This mutator is designed to change the type of a parameter incorrectly. First, it is checked whether the parameter is mutable (i.e. type string, number or boolean). The original parameter is replaced with a different type. For example, a string can become a number or a boolean. The choice is made randomly, and the new parameter receives a random value from a ValueProvider. The aim is to simulate erroneous inputs to test whether the system detects and correctly handles type errors in the parameters. 
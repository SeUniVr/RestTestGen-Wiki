# Operation Sorter
> io.resttestgen.implementation.operationssorter;

There are two type of operation sorter, the static and the dynamic one. Both of them extend the ```OperationSorter``` class.  

## Dynamic Operation Sorter
This is the abstract class from which the various dynamic sorters inherit. They must then implement the ```refresh()``` method to update the queue of operations to be executed.

### Graph Based Operation Sorter
This class extends ```DynamicOperationSorter``` and orders the operations to be tested according to a dependency structure between operations, represented by a graph (```OperationDependencyGraph```). The aim is to test the operations with fewer unsatisfied parameters and fewer previous test attempts first, optimising the order of the tests. In addition, the maximum attempts that can be made to test a given operation are also managed. In the dependency graph, nodes represent operations, while arcs indicate dependencies between operations. Dependent operations are fulfilled when the required inputs have been produced by previous operations. Note the ```removeFirst()``` methods that extract the first operation from the queue and the ```refresh()``` method that repopulates the queue with operations that have not yet been tested. They are ordered by number of unsatisfied parameters, HTTP method (CRUD semantics is followed), number of previous test attempts.

## Static Operation Sorter
The sorting of operations is chosen at the beginning and does not change during the execution of the test session. 

### Random Operation Sorter
This class implements a random order of the operations to be tested. A list of operations is retrieved from the environment and then a “shuffle” is applied to this list. Unlike the class described above, no structured strategy is followed. 

 
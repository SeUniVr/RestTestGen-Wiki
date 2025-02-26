# Operation Dependency Graph

This class represents a **graph of** the **dependencies** between operations defined in a specific OpneAPI. The nodes of the graph represent operations; the arcs, on the other hand, represent dependencies between operations, e.g. when an operation produces a parameter that another operation uses.
The constructor of the class receives an object of type OpenApi, after the specification has been parsed. All operations are extracted and the various nodes are added. Afterwards, the operations are parsed to also insert the arcs.

In particular, the method ```extractDataDependencies(OpenApi OpenAPI)``` detects operations that produce parameters as output but does not require input. If a parameter produced by one operation is the same as that requested by another operation, an arc is created in the graph.
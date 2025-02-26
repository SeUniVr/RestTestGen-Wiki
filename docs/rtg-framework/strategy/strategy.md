# Strategy
To execute RestTestGen, the ```main()``` method inside the App class within the package ```io.resttestgen.boot.cli``` is executed. Within the project, there is also a configuration file ```rtg-config.yml``` in which anyone wishing to use the tool must specify the strategy to be used and the API to be tested.

In this case, the file looks like this:
```yaml
apiUnderTest: myApi
strategyClassName: myStrategy
```

When implementing a new strategy, the ```Strategy class```, which is already present, must necessarily be extended and the ```start()``` method overridden to define custom behaviour.

The strategy is nothing more than the entry point of the tool, and within the above-mentioned method, the logic to be followed during the test session is defined. Thus, the ordering of operations is defined, the way in which parameters are valorised, how to calculate the performance of the tests performed and, finally, it is also possible to define how to write test cases using a ```Writer```.   
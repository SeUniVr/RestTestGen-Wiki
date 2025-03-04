# Execution Pipeline
![RTG Execution Pipeline](../../../static/img/PipelineRTG.svg)

To better understand the high-level operation, the tool's execution pipeline is provided. The image shows a schematic version of what happens at start-up. 
A more detailed version is given below. 

For the tool to work properly, it is necessary to configure it. This is done by **compiling** the ```rtg-config.yml``` file. In it, there are two properties to be provided:
- ```strategyClassName```: which indicates which strategy you wish to execute
- ```apiUnderTest```: which gives an indication of the REST API you wish to test. 

Then, when the tool is started, this configuration file is read and its information are **extracted**. Based on what is specified in it, a certain API will be taken into account and tested with a certain strategy. 
The next step, in fact, concerns the **parsing** of the OpenAPI specification of the REST API to be tested. From the parsing, all the information needed to proceed with the testing is extracted, such as the operations present, the parameters needed to execute the requests, and the format of the responses. 

Once the various pieces of information have been gathered, it is possible to start with the execution of the chosen strategy. In fact, according to what is specified in the configuration file, the corresponding strategy is **launched**.
It must be noted that what is specified in the strategy is arbitrary. In this particular case, an example is shown of what can actually take place inside. 
The purpose of this example is to create test sequences, i.e. sets of individual interactions. These sequences require the execution of a **fuzzing phase** before they are xecuted, in which the parameters required to perform an HTTP request are valorised through the use of Input Value Providers. 

After that, the various test sequences are executed. In particular, all individual interactions that are part of the sequence itself are executed. 
The results of this phase are then **processed** by a processor that, for example, may be responsible for saving the data in response within a dictionary or preparing the data to be processed by an oracle. 
Subsequently, the results from the execution of the various test sequences are processed by an **oracle** that takes care of determining the success or failure of the test itself. 

Finally, everything that happened during testing is converted into a **report** in order to provide a more human-readable mechanism that allows developers and researchers to better understand any problems that the REST API tested presents, and also to highlight any vulnerabilities. 
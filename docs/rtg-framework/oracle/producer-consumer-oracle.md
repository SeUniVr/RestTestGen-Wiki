# Producer Consumer Oracle
This oracle assesses whether a test sequence consisting of two interactions operates on the same “object” in a **producer-consumer relationship**. In other words, it checks whether the output of the first interaction is used as input in the second.   

If the test sequence contains exactly two interactions, the first interaction (producer) is retrieved, and it is checked whether it has produced a non-empty response body. If so, the second interaction (consumer) is also retrieved. A count is made of how many ```LeafParameters``` of the fuzzy operation of the second interaction are present in the body of the first. The ratio of the found parameters to the total number of parameters is then calculated, and if this is greater than or equal to 70%, a producer-consumer relationship can be considered to have been found.   

Finally, it should be noted that if the sequence contains more than two interactions or the response body is empty, then the test fails. 
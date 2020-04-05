# read 07

### REST

stand for *Representational state transfer* and it's an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. 

### STATELESSNESS

Systems that follow the REST paradigm are stateless, meaning that the server does not need to know anything about what state the client is in and vice versa. In this way, both the server and the client can understand any message received, even without seeing previous messages. This constraint of statelessness is enforced through the use of resources, rather than commands. Resources are the nouns of the Web - they describe any object, document, or thing that you may need to store or send to other services.

### COMMUNICATION BETWEEN CLIENT AND SERVER
In the REST architecture, clients send requests to retrieve or modify resources, and servers send responses to these requests.

##### how its work

REST requires that a client make a request to the server in order to retrieve or modify data on the server. A request generally consists of:

1. HTTP-> defines what kind of operation to perform
2. header-> which allows the client to pass along information about the request
3. a path to a resource
4. an optional message body containing data
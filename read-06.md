# Read 06

### Node JS

##### What is Node

its a runtime javascript allow us to to execute JavaScript on our computers.

##### HOW its work
to see that we have node in our system type `node -v` in your tirmenal it should give u the version of the node.

when we create a js file in code editor lets write on some code like 
```javascript
console.log('Hello World')
```
to run the code write node <name of the file> it should output Hello World in your tirmenal 

##### npm

its the JavaScript Package Manager mean its allow u to install the pacages u need in your project and there is over 1,000,000 packages of JavaScript code available to download,

and its install by type `npm install` followed by the packages you need example `npm install express` now you install express laibrary in your project

##### package.json
If you look at the contents of the your directory, you’ll notice a folder entitled *node_modules*. This is where npm has saved express and any libraries that express depends on.

If you open the package.json file, you’ll see express listed under the *dependencies* field. By specifying your project’s dependencies in this way, you allow any developer anywhere to clone your project and use npm to install whatever packages it needs to run.

##### What Kind of Apps Is Node.js Suited To?

Node is particularly suited to building applications that require some form of real-time interaction or collaboration — for example
1. chat sites
2. CodeShare apps
It’s also a good fit for building APIs where you’re handling lots of requests that are I/O driven 
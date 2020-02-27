# class 10

#### error handling and debugging

when we write javascript code we do not expect to do it perfictly from the first time and we have an errors.

##### ways to debugging the errors

1. the console and dev tools -> Tools built into the browser that help you hunt for errors.
2. common problems -> find the most errors that peapole make and see how they solve it.
3. handiling errors -> How code can deal with potential errors gracefully. 

###### ORDER OF EXECUTION 

>some time you should checke from the order of you scripts becuse some scripts need another script to work before it works

##### UNDERSTANDING ERRORS 

If a JavaScript statement generates an error, then it throws an **exception**.
At that point, the interpreter stops and looks for exception-handl ing code.

##### EXECUTION CONTEXTS

**EXECUTION CONTEXT** 

Every statement in a script lives in one of three
execution contexts:
1. GLOBAL CONTEXT -> the script that is not in a function 
There is only one global context in any page
2. FUNCTION CONTEXT ->Code that is being run within a function.
Each function has its own function context. 
3. EVAL CONTEXT (NOT SHOWN) -> Text is executed like code in an internal function
called eval ()

**VARIABLE SCOPE**

- GLOBAL SCOPE -> it is the varible that declared outside of functions and can used in any place

- FUNCTION-LEVEL SCOPE -> it the varible that declared inside functions and can used just inside the function.
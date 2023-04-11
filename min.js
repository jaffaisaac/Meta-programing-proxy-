// Proxy rep intercession form of meta programing 
// prox object ->allow to intercept any program's behavour 
// they enable us to modifity the operation  of objects and implement custom behavours . ie there are many operations that can be performed on the objects and proxy help us to modifity such operations and implement desired behavoursP
// A proxy object wraps the target object and modifies its behavours

// syntax

let newProxy = new Proxy(target,hanlder);

/**
 * where
 * target is the object whose behaviors are being modified 
 * 
 *  handler is an object whose properties are functions (referred as traps), which are called when various operations are performed against the proxy. Handler objects allow us to define the new behavior of the target object. It enables us to perform extra logic in addition to forwarding the operations onto the target/wrapped object. 
 **/
This chapter contains introduction to node, npm, package.json

sync functions are handled by main thread directly
async operations or tasks are directed to libuv thread which has thread pool to handle tasks async,
once task is completed it is passed to event queue, which when call stack is empty pass it for execution

express:"^4.18.01"// version higher than is accepted
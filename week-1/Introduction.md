### Javascript is multi-paradigm language. It supports following programming paradigm:
1. Object-oriented programming
    classes, objects, inheritance, encapsulation through use of prototype
2. Functional programming
    first-class function, closures
3. Event driven programming
    events like mouse click, keyboard press
4. Imperative programming
    change program state

Javascript supports prototype based function which is used to implement OOP concept like encapsulation and inheritance.

First class function: function can be treated like variables, passed as arguments, returned too.

Dynamically Types Language: variable data type are determined at run time and can be changed later on.

Javascript is single threaded programming language means single task can be executed at a time. when running long-running or heavy tasks, as it can block the execution of other tasks. To overcome this issue, JavaScript provides mechanisms such as Web Workers and Asynchronous programming which allows to run heavy tasks in a different thread, without blocking the main thread.

Non-blocking Event Loop: Being single threaded, it continuously check for message queue to process. It will not halt the execution of the program while waiting for a long-running task to complete. Instead, the task is added to the message queue, and the event loop will continue to process other messages (such as user input or other events) while the task is being executed.
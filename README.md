# Nodejs Interview Questions and Answers
> Click :star:if you like the project and follow [@Aswanth Alakkadan](https://www.linkedin.com/in/aswanthalakkadan/) for more updates.
----

### Table of Contents

| No. | Questions                                                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [What is Node.js?](#what-is-nodejs)                                                                                                                           |
| 2   | [What is the difference between Node.js and JavaScript?](#what-is-the-difference-between-nodejs-and-javascript)                                               |
| 3   | [Is Node.js single-threaded?](#is-nodejs-single-threaded)                                                                                                     |
| 4   | [What kind of API function is supported by Node.js?](#types-of-api-functions-in-nodejs)                                                                       |
| 5   | [What is the difference between Synchronous and Asynchronous functions?](#what-is-the-difference-between-synchronous-and-asynchronous-functions)              |
| 6   | [What is middleware?](#what-is-middleware)                                                                                                                    |
| 7   | [how Node.js handles concurrency ?](#how-nodejs-handle-concurrency)                                                                                           |
| 8   | [What do you mean by event loop in Node.js?](#what-do-you-mean-by-event-loop-in-nodejs)                                                                      |

1. ### What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to build server-side and network applications. It is built on the V8 JavaScript runtime engine, which powers the Google Chrome browser. Node.js enables the execution of JavaScript code on the server side, extending its use beyond web browsers.

## Key Features

   1. **Asynchronous and Event-Driven:**
   - Node.js handles asynchronous operations efficiently using an event-driven, non-blocking I/O model. This allows developers to build scalable and performant applications that handle many concurrent connections.

   2. **Single-Threaded:**
   - Despite being single-threaded, Node.js uses an event loop to manage asynchronous operations without blocking the execution of other code. This design enables the development of highly responsive applications.

   3. **NPM (Node Package Manager):**
   - Node.js comes with npm, a package manager facilitating the installation, management, and sharing of third-party libraries and tools. The npm ecosystem is extensive, promoting code reuse and collaboration within the Node.js community.

   4. **Cross-Platform:**
   - Node.js is designed to run on various operating systems, including Windows, macOS, and Linux, making it a cross-platform technology.

   5. **Server-Side JavaScript:**
   - Node.js allows developers to use JavaScript on the server side, unifying the development language across the entire application stack. This can simplify development processes and promote consistency in code.

   6. **Large and Active Community:**
   - Node.js has a large and active community of developers contributing to the growth of the platform. The community support is evident in the availability of numerous libraries and frameworks that enhance Node.js development.

   7. **Versatility:**
   - Node.js is versatile and applicable for various types of applications, including web servers, APIs, microservices, real-time applications (e.g., chat applications, online gaming), and more.

Node.js is often used with frameworks like Express.js to simplify the process of building web applications. It has gained widespread popularity and is adopted by both small startups and large enterprises due to its performance, scalability, and effective handling of concurrent connections.

**[⬆ Back to Top](#table-of-contents)**

2. ### What is the difference between Node.js and JavaScript?
   ## JavaScript vs Node.js

### JavaScript

JavaScript is a lightweight programming language, often referred to as a "scripting language." It is commonly used to develop interactive web pages, allowing developers to insert dynamic text into HTML elements. JavaScript is primarily known as the language of web browsers.

### Node.js

Node.js is not a programming language but rather an engine that provides a runtime environment to execute JavaScript code. Unlike JavaScript in the browser, Node.js is used to run JavaScript programs outside the browser, primarily on the server-side. It is not designed to handle HTML tags; instead, it is used for server-side code execution.

In summary, while JavaScript is a scripting language used for client-side web development, Node.js extends the use of JavaScript to the server-side, providing a runtime environment for running JavaScript code beyond the confines of the browser.

**[⬆ Back to Top](#table-of-contents)**


3. ### Is Node.js Single-Threaded?

Yes, Node.js is a single-threaded application as it is built using the single-threaded event loop model architecture.

**[⬆ Back to Top](#table-of-contents)**

4. ### What kind of API function is supported by Node.js

### Types of API Functions in Node.js

Node.js supports two types of API functions:

   **Synchronous:**
   - These API functions are used for blocking code, meaning they block the execution of the program until the operation is completed. They are suitable for performing lightweight tasks.

  **Asynchronous:**
   - These API functions are used for non-blocking code. They do not block the execution of the program, allowing each command to be executed after the previous one, even if the previous command has not completed. Asynchronous functions are typically used for performing heavy tasks.

**[⬆ Back to Top](#table-of-contents)**

5. ### What is the difference between Synchronous and Asynchronous Functions?

   **Synchronous Function:**
   - These functions block the execution of the program during an operation, also known as blocking operations. They are used for lightweight tasks.

   **Asynchronous Function:**
   - These functions do not block the execution of the program. Each command is executed after the previous one, even if the previous command has not computed the result. They are used for performing heavy tasks.

**[⬆ Back to Top](#table-of-contents)**

6. ### What is middleware?
   - Middleware is the function that works between the request and the response cycle. Middleware gets executed after the server receives the request and before the controller sends the response.

**[⬆ Back to Top](#table-of-contents)**

7. ### How Node.js handle concurrency?
   - Node js is an open-source virtual machine that uses javascript as its scripting language. Despite being single-threaded, it is one of the most popular web technologies. The reason why node js is popular despite being single-threaded is the asynchronous nature that makes it possible to handle concurrency and perform multiple I/O operations at the same time. Node js uses an event loop to maintain concurrency and perform non-blocking I/O operations.

As soon as Node js starts, it initializes an event loop. The event loop works on a queue (which is called an event queue) and performs tasks in FIFO(First In First Out) order. It executes a task only when there is no ongoing task in the call stack. The call stack works in LIFO(Last In First Out) order. The event loop continuously checks the call stack to check if there is any task that needs to be run. Now whenever the event loop finds any function, it adds it to the stack and runs in order.  

**[⬆ Back to Top](#table-of-contents)**

8. ### What do you mean by event loop in Node.js?
   -Event Loop in Node.js is used to handle callbacks. It is helpful in performing non-blocking I/O operations. An event loop is an endless loop, which waits for tasks, executes them, and then sleeps until it receives more tasks.

**[⬆ Back to Top](#table-of-contents)**




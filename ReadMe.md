# HelloWorld API

## Introduction to APIs and HTTP Requests

**A. What is an API?**

API stands for Application Programming Interface. It acts as a communication protocol between different software systems, allowing them to interact with each other. In web development, APIs often serve as a bridge between a client (like a user's browser) and a server, allowing the client to send requests for specific information or tasks and the server to respond accordingly.

**B. Why are APIs important?**

APIs are important because they allow different software systems to communicate and share data and functionality, making them more efficient and powerful. For example, when you use an app on your phone to check the weather, the app uses an API to send a request to a server that stores weather information. The server then sends back the requested data (the current weather), which the app displays to you.

**C. What is a GET Request?**

GET is one of the most common HTTP (Hypertext Transfer Protocol) methods. HTTP is the protocol used for transferring data over the internet. A GET request is used to retrieve or get data from a server. When you type a URL into your browser, you're actually sending a GET request to the server where the website lives, asking it to send you the HTML and other files needed to display the website in your browser.

**D. Understanding Request and Response**

In web development, a client sends a request to a server to perform certain actions. The server processes this request and returns a response. This is often referred to as the request/response cycle.

When a client sends a GET request, it's asking the server to retrieve some data. The server then processes this request and returns a response containing the requested data, or an error message if something went wrong.

For example, when you open a web browser and type in a URL (like www.example.com), you're sending a GET request to the server that hosts example.com, asking it to send you the HTML for that webpage. The server then sends a response containing the HTML, which your browser displays as a webpage.

Throughout this exercise, you'll be creating an API that can accept GET requests and send back responses. In this case, the response will be a simple text message, but in a real-world application, it could be something much more complex, like a JSON object containing data from a database.

## Node and Express

**A. What is Express.js?**

Express.js is a lightweight, fast, and unopinionated web application framework for Node.js. It simplifies the process of building web applications, including APIs, and it's an integral part of the MEAN/MERN stack (MongoDB, Express.js, AngularJS/React.js, and Node.js).

**B. Why use Express.js?**

While you can create web servers directly using Node.js, Express.js provides a higher level of abstraction with many convenience features, such as:

1. **Routing:** Express.js has simple methods for specifying what function is called for a particular HTTP verb (like GET, POST, etc.) and URL pattern, which is called routing.

2. **Middleware:** Express.js supports middleware modules, which are functions that have access to the request and response objects, and the next middleware function in the application’s request-response cycle.

3. **Templates:** Express.js supports template engines, which help to generate the HTML (or other files) that are served to users.

**C. Basics of Express.js**

An Express.js application is essentially a series of function calls (middleware functions and route handlers) that are executed in order whenever a request is received.

Here's an example of what a very basic Express.js app might look like:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
```

In this example:

- The `express` module is imported.
- A new Express application is created.
- A route is defined for HTTP GET requests to the path `/`. When a request is received for this path, the provided function is called, which sends the text "Hello World!" back to the client.
- The application starts listening for requests on port 3000.

By using Express.js, you can see how quickly and simply a server can be set up! In the following steps, you'll get more hands-on with Express.js as you start to build your own API.

Absolutely! Here's a more detailed walkthrough for Step 4: Creating a New Node.js Project.

## Initializing Your Local Git Repository as a Node.js Project

The first thing you'll need to do is navigate to your existing git repository on your local machine. This git repository will be where we develop our HelloWorldAPI project. This will help keep your project files organized and separate from other projects on your computer. Here's how you can do it:

1. Open the terminal/command prompt.

2. Navigate to the location where your local git repository is located. You can use the `cd` command (which stands for "change directory") to navigate to different directories. For example, `cd ~/dev/labs/HelloWorldAPI` would navigate to the HelloWorldAPI directory inside the projects directory in the dev directory.

**B. Initializing a New Node.js Project**

Now that you have navigated to your existing git repository, you can initialize a new Node.js project within this repository. This is done with the `npm init` command, which will create a new `package.json` file in your repository. The `package.json` file keeps track of your project's dependencies and various other information about your project.

Here's how you can initialize a new Node.js project:

1. In your terminal/command prompt, make sure you're in your git repository directory. You can check your current directory with the `pwd` command (which stands for "print working directory").

2. Type `npm init -y` and press Enter. The `-y` flag automatically fills out the usual prompts with default values, creating a `package.json` file in your repository. You should see output in your terminal about the creation of the `package.json` file.

3. To confirm the creation of the `package.json` file, you can list the files in your repository with the `ls` command. You should see `package.json` in the list of files.

Now your Node.js project is set up and ready to go! The next steps will involve installing Express.js and starting to build your API. Remember to commit your changes to your git repository as you proceed with your project.

## Express

**A. What is Express.js?**

As you learned earlier, Express.js is a web application framework for Node.js. It makes it easier to create web applications by providing a simple way to define how the application should respond to client requests.

**B. Installing Express.js**

With your Node.js project initialized, the next step is to install Express.js. Express.js is a Node.js module, and you'll install it using NPM, the Node Package Manager. Here's how:

1. In your terminal/command prompt, make sure you're in your project directory (the directory containing your `package.json` file). 

2. To install Express.js, type `npm install express` and press Enter. This tells NPM to install the Express.js module and add it to your project's dependencies.

3. NPM will download the Express.js module and install it into a directory called `node_modules` in your project directory. NPM also adds Express.js to the `dependencies` list in your `package.json` file. This helps keep track of what modules your project depends on.

4. After the installation is complete, you can confirm it was successful by looking at your `package.json` file. You should see `"express": "<version>"` under the `"dependencies"` section.

**C. Understanding Node Modules and Dependencies**

The Express.js module, like all Node.js modules, is essentially a package of pre-written code that you can use in your project. This allows you to build complex applications without having to write everything from scratch.

When you install a Node.js module with NPM, it becomes a dependency for your project. A dependency is simply a module that your project needs to run correctly. NPM manages these dependencies for you, installing them when needed and making sure the correct versions are used.

Now that Express.js is installed, you can start using it to build your API!

## Your First Web Server

**A. Creating Your Server File**

First, you'll need to create a new JavaScript file for your server. This is where you'll write all the code for your Express.js server.

1. In your project directory, create a new file called `server.js`. You can do this in your text editor. For example, in VS Code, you can go to `File -> New File` (or press `Ctrl+N`), then `File -> Save` (or press `Ctrl+S`), and then navigate to your project directory and type `server.js` as the file name.

**B. Writing the Server Code**

Next, you'll write the code for your server. Here's the basic code for an Express.js server:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

In this code:

1. You use the `require` function to import the Express.js module and assign it to the `express` constant.

2. You call the `express` function to create a new Express.js application, which you assign to the `app` constant.

3. You call the `get` method on the `app` object to set up a route that handles HTTP GET requests. This method takes two arguments: the path (`'/'`), and a callback function that takes two parameters: the request (`req`) and the response (`res`).

4. In the callback function, you call the `send` method on the `res` object to send a response back to the client. The response is the string 'Hello, World!'.

5. You call the `listen` method on the `app` object to start the server and make it listen for requests on port 3000. The second argument is a callback function that is called when the server successfully starts listening.

**C. Running Your Server**

With your server code written, you can now run your server. Here's how:

1. In your terminal/command prompt, make sure you're in your project directory.

2. Type `node server.js` and press Enter. This tells Node.js to run the code in the `server.js` file.

3. You should see the message 'Server listening on port 3000' printed to the console. This means your server is running and listening for requests on port 3000.

**D. Testing Your Server**

You can test your server by sending a GET request to it. The easiest way to do this is by visiting http://localhost:3000 in your web browser. You should see 'Hello, World!' displayed on the page.

Congratulations, you've just written your first Express.js server!

## Building a Custom Greeting Endpoint

**A. Understanding RESTful APIs**

Before we go into the details of building the custom greeting endpoint, let's review what a RESTful API is. REST stands for Representational State Transfer. It is a set of constraints for building web services. In the context of web development, it usually refers to web services that send and receive data as JSON (JavaScript Object Notation).

In a RESTful API, resources (data entities) are identified by URLs (endpoints), and are accessed and manipulated using standard HTTP methods, such as GET, POST, PUT, and DELETE. In this case, you'll be creating a GET endpoint.

**B. Creating the Custom Greeting Endpoint**

Now, let's modify the `server.js` file to add a new endpoint that will return a custom greeting.

1. Open the `server.js` file in your text editor.

2. Add the following code after the first `app.get()` function:

```javascript
app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});
```

In this code:

- `'/greeting/:name'` is the path of the new endpoint. The `:name` part is a route parameter, which can be any string. This allows the client to specify a name in the URL.

- `(req, res) => { ... }` is a callback function that is called whenever a GET request is made to this endpoint. It takes two arguments: the request object (`req`) and the response object (`res`).

- `const name = req.params.name;` extracts the name from the request parameters and assigns it to a constant.

- `res.send(`Hello, ${name}!`);` sends a response back to the client. The response is a custom greeting that includes the name specified in the request.

**C. Running Your Server**

Now you can run your server again to see the new endpoint in action.

1. In your terminal/command prompt, make sure you're in your project directory.

2. Type `node server.js` and press Enter.

3. You should see the message 'Server listening on port 3000' printed to the console, indicating that your server is running.

**D. Testing Your Endpoint**

You can test your new endpoint by sending a GET request to it with a name in the URL.

1. Open your web browser and go to http://localhost:3000/greeting/John.

2. You should see 'Hello, John!' displayed on the page.

3. You can replace 'John' in the URL with any name to get a custom greeting with that name.

Congratulations, you've just built a custom greeting endpoint in your API!

## Postman a better way to test!

**A. Introduction to Postman**

Postman is a popular tool used for testing APIs. With Postman, you can send HTTP requests to your API and view the responses. It supports all HTTP methods, such as GET, POST, PUT, DELETE, etc., and provides a user-friendly interface to set up, send, and view HTTP requests and responses. This makes it much easier to test your API compared to using a web browser or a command-line tool like curl.

**B. Installing Postman**

Before you can use Postman, you need to install it. You can download Postman using HomeBrew (aka.Hebrew) in the terminal : `brew install --cask postman`

**C. Testing Your API With Postman**

Now, let's use Postman to test the custom greeting endpoint in your API.

1. Open Postman.

2. At the top of the window, you'll see a tab with a dropdown menu, a text box, and a 'Send' button. This is where you'll set up your HTTP request.

3. In the dropdown menu, select 'GET'. This is the HTTP method for your request.

4. In the text box, type `http://localhost:3000/greeting/John` (or replace 'John' with any name). This is the URL for your request.

5. Click the 'Send' button to send the request.

6. After a moment, you should see the response below. It should display `Hello, John!` (or the name you used). This means your API is working correctly!

You can test your API with different names and see how the greeting changes. If something doesn't work as expected, check your server code and make sure your server is running.

By using Postman, you can thoroughly test your API and ensure it behaves correctly. This is an essential part of developing an API. Congratulations, you've learned how to build and test an API with Node.js and Express.js!

## Challenge !!!


**Stretch Goal: Creating a Prime Number Checker Endpoint**

In this stretch goal, you'll create a new endpoint that checks whether a given number is a prime number or not. The endpoint will be `/prime/:number`, where `:number` is a path parameter that the client specifies in the URL.

Here are the steps you need to follow:

1. Create a GET `/prime/:number` endpoint. The `:number` part is a route parameter, which allows the client to specify a number in the URL.

2. In the callback function for this endpoint, extract the number from the request parameters. Remember that route parameters are always strings, so you'll need to convert this to a number with `parseInt()` or `Number()`.

3. Write a function to check whether a number is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. You can use a simple method to check for prime numbers: if the number is less than 2, it's not prime. Then, check whether the number has any divisors from 2 up to the square root of the number. If it does, it's not prime.

4. Use this function to check whether the given number is prime, and then send a response back to the client. This response could be a simple string like "Yes, it's a prime number" or "No, it's not a prime number". 

After completing this stretch goal, you should be able to send a GET request to `http://localhost:3000/prime/7` and see a response that tells you whether 7 is a prime number or not. You can use a web browser or Postman to send this request and view the response.

This stretch goal will challenge you to apply what you've learned, use JavaScript's built-in functions, and write a bit more complex logic. Good luck!
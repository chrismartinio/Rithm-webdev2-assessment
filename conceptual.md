# Conceptual Exercise

Answer the following questions below in Markdown. 
Check out the [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## CSS

### What are differences between ``display: inline`` and ``display: block``?

* display:inline lines an element on the same line as elements previous to it. Display:block places an element on its own line
* display:inline allows other elements to go on their same line as well after it. Display:block blocks off the rest of the line and doesn't allow elements to be displayed on that line, with some exceptions such as float or negative margins.


### What are some advantages to using a CSS framework like Twitter Bootstrap?

* a CSS framework like Twitter Bootstrap provides a lot of baseline CSS including mobile-ready responsive design that makes a website much easier to get started. 
* Bootstrap uses a 12 column layout system that can be modified easily through applying and removing classes directly to elements without needing to edit CSS directly. 
* Bootstrap also has other styling classes to utilize, such as color classes (primary, secondary, success, warning etc.), badges, visibility, tables and a lot more.

---

## jQuery

### What is jQuery?

* JQuery is a Javascript library that allows to write a lot of vanilla Javascript in 'shorthand'.

### What are differences between finding things with `document.querySelector(".book")` and `$(".book")`?

* querySelector is vanilla JS, the second method uses the JQuery library. Otherwise each selects the class 'book' in HTML.

---

## Advanced JavaScript

### What is event delegation? Why would you use it?

* event delegation is used within event listeners to provide increased specificity for the given event. (e.g. )

### What is the `event` object? What kinds of things are in it?

### In the Hack or Snooze API project, what did we use async/await for?

* to receive and post data to the API

### What happens if you forget the `async` keyword on  the declaration of a function that uses `await` inside of it?

* In the place of API data a promise is returned 

### What happens if you forget the `await` keyword in front of an asynchronous expression?

### What is the difference between a static method and an instance method?

### In JS: `let a = [1, 2, 3]; b = a.slice(); a.push(4);`: does `b` contain 4? Why or why not? 

* b does not contain 4. It does not because slice() returns a new array and does not modify a itself. Therefore b is not referenced to a, so when you modify a, b remains the same. 

### What are some strategies you've learned for being organized in larger projects, like Hack or Snooze?

---

## How the Web Works and APIs

### What is a hostname?

* A hostname is an alias for an IP address, usually in the format of letters such as hostname.com, or chrismartin.io

### What is an IP address?

* An IP address is a numbered address that points directly to a server or group of servers.

### What is a port?

* A port is the entry point on a server that a server will listen for client connections on, or the entry point on which a client will try to connect to a server

### What is DNS?

* Stands for Domain Name Service. DNS servers provide a directory from which they translate hostnames to IP addresses. 

### What is an HTTP header?

* Declares HTTP as the protocol to communicate with. 

### What is an HTTP Response Code?

* HTTP response codes are returns from a server that specify different things. Generally response codes in 200 range are 'OK', 300 range are redirects, 400 range are client-side errors and 500 range are server-side errors. 

### What is the difference between GET and POST?

* GET requests data with no changes made to the server. POST requests to add or change data on the server.

### What is AJAX? Why would you use it?

* AJAX stands for Asynchronous Javascript And XML. AJAX used to run operations indepently of one another. Useful for event listeners or API requests that take time to run and shouldn't be waited to complete for other operations to run. 

### What is JSON?

* JSON stands for Javascript Object Notation. JSON is a data type used to transfer data often from an API. JSON resembles a JS object. 

### What is an API?

* API stands for Application Programming Interface. Many websites, services or companies provide an API for usesrs or programmers to use to access data or add/remove data. 

### What are some limitations of AJAX requests?

### What is the Same Origin Policy?

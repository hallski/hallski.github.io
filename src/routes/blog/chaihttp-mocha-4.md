---
comments: true
date: '2017-10-28T00:00:00Z'
excerpt: With Mocha 4, tests using Chai-http will cause the test run to never exit.
section: blog
tags:
  - javascript
  - testing
title: Testing with chai-http and Mocha 4
---

[Chai-http](http://chaijs.com/plugins/chai-http/) makes it very easy to test Node.js HTTP applications without having to to go through the hassle of finding a free port and start the service manually. By simply passing the server function to the `request` call it will take care of that for you.

```javascript
const chai = require('chai')
const chaiHttp = require('chai-http')
const express = require('express')

chai.use(chaiHttp)

const app = express()
// configure app with middleware and routes...

chai
	.request(app)
	.get('/')
	.end(function (error, result) {
		// Verify error and result
	})
```

At first I thought it simulated HTTP requests by generating the request/response objects and passing them to the handler function directly. However it seems Chai-http actually finds a free port, starts the service as normal and uses [Superagent](https://github.com/visionmedia/superagent) to send HTTP requests against it.

This lead to an issue when switching to Mocha 4.

## Mocha 4 changed exit behaviour

As I started a new project the other day I ran into a problem where the test runner never finishes and initially thought I had messed up my tests. After some investigation it seemed like Node.js never exits the event loop due to the HTTP server still listening to the socket.

It turns out that Mocha 4 changed the default exit behaviour to no longer force shutdown the event loop after all tests ran. Using the `--exit` flags brings back the old behaviour which Chai-http is relying on to shutdown the HTTP server it started.

```json
  "scripts": {
    "test": "mocha --exit"
  },
```

This solves the problem but as discussed in [Issue #178](https://github.com/chaijs/chai-http/issues/178), a better long term solution would be to get more control over the server instance and shut it down when appropriate from the test code.

# Expression Producer

A ReSTful Node.js service written in [Restify]([Restify](http://mcavage.me/node-restify/)) that produces a randmly generated addition expression to be evaluated by a consumer, such as 1+1=

## Requirements
 - [Node.js and npm](https://nodejs.org/)
 - [Grunt](http://gruntjs.com/) for running tests
 - [nodemon](https://github.com/remy/nodemon) (optional)

## Installation
 - Clone this repository, or download the source as a .zip archive
 - `cd` into the cloned directory or unzipped archive
 - install dependencies via npm: `$ npm install`
 - Create a `.env` file in the project root to set up your local Node environment variable with the following contents: `NODE_ENV=local`

## Configuration
The only option you may need to configure is the Restify server port, located in `settings/local.json`. By default this port is set to `3000`.

## Running the server
 - via nodemon: `$ nodemon app.js`
 - via node: `$ node app.js`

With the default settings, the server will be running at: `localhost:3000`

## Endpoints

### GET: /heartbeat
Simple healthcheck for the service.

***

### POST: /produce
Endpoint for generating an addition expression.

##### Required Parameters
 - None

##### Returns
 - Status Code: 201
 - Response: {"expression": "1+1="}
 - Content-Type: JSON

***

### POST: /report
Endpoint for reporting the solution to an expression.

##### Required Parameters
 - expression
 - solution

##### Returns
 - Status Code: 201
 - Response: {"solution-recorded": true}
 - Content-Type: JSON

## Tests

Tests are written BDD-style with [Mocha](http://mochajs.org/) and [Supertest](https://github.com/visionmedia/supertest) and can be run using Grunt: `$ grunt test`
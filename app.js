'use strict';

var config = require('./configuration'),
    heartbeat = require('./routes/heartbeat'),
    producer = require('./routes/producer'),
    solution = require('./routes/solution'),
    nconf = require('nconf'),
    restify = require('restify'),
    environment = nconf.get('NODE:ENV') || 'production';


var server = restify.createServer({
    name: config.get('application:name')
});

// middleware
server.use(restify.bodyParser());

// Heartbeat
server.get('/heartbeat', heartbeat.index);

// expression producer
server.post('/produce', producer.generateExpression);

// log solution reported
server.post('/report', solution.report);

server.listen({
        port: config.get('restify:port'),
        host: config.get('restify:host')
    },
    function() {
        var host = server.address().address,
            port = server.address().port;
        console.log('%s starting up at %s:%s using "%s" environment.', server.name, host, port, environment);
});

module.exports = server;

'use strict';

var logger = require('../logger');

exports.record = function(req, res, next) {
    
    if (!req.body) {
        res.json(400, {'error': 'Expression and Solution not present.'});
        logger.log('info', 'bad request');
    }
    else {
        var expression = req.body.expression,
            solution = req.body.solution;

        logger.log('info', 'Expression %s sent. Solution %s received.', expression, solution);
        res.json(200, {'solution-recorded': true});
    }

    next();
};

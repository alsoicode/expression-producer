'use strict';

var logger = require('../logger');

exports.report = function(req, res, next) {
    
    if (!req.body) {
        var msg = 'No request body present.';

        res.json(400, {'error': msg});
        logger.log('error', msg);
    }
    else {
        var expression = req.body.expression,
            solution = req.body.solution;

        logger.log('info', 'Expression %s sent. Solution %s received.', expression, solution);
        res.json(201, {'solution-recorded': true});
    }

    next();
};

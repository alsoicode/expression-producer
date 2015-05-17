'use strict';

var logger = require('../logger');

exports.report = function(req, res, next) {

    if (typeof req.body === 'undefined' || typeof req.body.expression === 'undefined' || typeof req.body.solution === 'undefned') {
        var msg = 'Required parameters are missing.';

        logger.log('error', msg);
        res.json(400, {'error': msg});
    }
    else {
        var expression = req.body.expression,
            solution = req.body.solution;

        logger.log('info', 'Expression %s sent. Solution %s received.', expression, solution);
        res.json(201, {'solution-recorded': true});
    }

    next();
};

'use strict';

var getRandomInts = require('../lib/generator'),
    logger = require('../logger');

exports.generateExpression = function(req, res, next) {
    
    var randomIntegers = getRandomInts(),
        expression = randomIntegers.join('+') + '=';

    logger.log('info', 'Expression %s generated.', expression);

    res.json(201, {'expression': expression});

    next();
};

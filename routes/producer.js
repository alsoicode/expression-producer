'use strict';

var getRandomInts = require('../lib/generator');

exports.generateExpression = function(req, res, next) {
    
    var randomIntegers = getRandomInts(),
        expression = randomIntegers.join('+') + '=';

    res.json(201, {'expression': expression});

    next();
}

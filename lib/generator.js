'use strict';

/*
    Generate a random number between 1 and 100
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function getRandomInts(options) {
    var ints = [],
        options = options || {
            min: 1,
            max: 100
        };

    if (options.min > options.max) {
        // transpose
        var min = options.min,
            max = options.max;
        options['min'] = max;
        options['max'] = min;
    }

    for (var i=0; i < 2; i++) {
        ints.push(Math.floor(Math.random() * (options.max - options.min)) + options.min);
    }

    return ints;
}

module.exports = getRandomInts;

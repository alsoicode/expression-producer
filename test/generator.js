'use strict';

var app = require('../app'),
    assert = require('assert'),
    getRandomInts = require('../lib/generator');


describe('Random Number Generator', function() {
    describe('When generating random numbers', function() {
        it('should return an array of two integers', function() {
            var randomInts = getRandomInts();
            assert.equal(typeof randomInts, 'object');
            assert.equal(randomInts.length, 2);

            // assert integers are below the maximum default of 100
            for (var i=0; i<randomInts.length; i++) {
                assert(randomInts[i] < 100);
            }
        });
    });

    describe('When generating random numbers and the min/mx are reversed', function() {
        it('should transpose the values and return an array of two integers', function() {
            var options = {
                    min: 100,
                    max: 1
                },
                randomInts = getRandomInts(options);

            // min / max should now be transposed
            assert(options.min < options.max);
        });
    });
});
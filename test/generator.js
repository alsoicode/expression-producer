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
});
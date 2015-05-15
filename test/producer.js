'use strict';

var app = require('../app'),
    request = require('supertest');


describe('Expression Producer', function() {
    describe('When requesting resource /produce', function() {
        it('should respond with Http 201', function(done) {
            request(app)
                .post('/produce')
                .expect('Content-Type', /json/)
                .expect(201, done);
        });
    });
});
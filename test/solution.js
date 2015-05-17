'use strict';

var app = require('../app'),
    request = require('supertest');


describe('Expression Producer', function() {
    describe('When requesting resource /report', function() {
        it('should respond with Http 201 when the expression and solution are posted', function(done) {
            request(app)
                .post('/report')
                .send({
                    expression: '1+1=',
                    solution: '2'
                })
                .expect('Content-Type', /json/)
                .expect(201, done);
        });
    });

    describe('When requesting resource /report', function() {
        it('should respond with Http 400 when the expression and solution are omitted', function(done) {
            request(app)
                .post('/report')
                .send({
                    foo: 'bar'
                })
                .expect('Content-Type', /json/)
                .expect(400, done);
        });
    });
});
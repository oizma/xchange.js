'use strict';

//m.createRequest({method: 'GET', url: 'http://google.com'});

var httpClient = require("../../lib/http_client")
    ,assert = require("assert")
    ,chai = require("chai")
    ,chaiAsPromised = require("chai-as-promised")
    ,sinon = require("sinon")
    ,sinonChai = require('sinon-chai')
    ,should = chai.should()
    ,expect = chai.expect;

var superagent = require('superagent');

chai.use(sinonChai);
chai.use(chaiAsPromised);

describe.only('httpClient', function () {
    describe('createRequest function', function () {
        context('GET method type', function () {
            it('returns request promise correct method type', function () {
                var params = {method: 'GET', url: 'http://fake.com'};
                var request = httpClient.createRequest(params);
                request.should.have.property('method', params.method);
                request.should.have.property('url', params.url);
                request.req._headers.should.have.property('content-type', 'application/json');
            });

            //todo negative test
        });
        //context('')
    });
});
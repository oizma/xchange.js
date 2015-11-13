'use strict'

var _ = require('lodash');
var Promise = require('bluebird');
var blueagent = require('blueagent');
var httpMethod = require('./http_method');


module.exports = {
    createRequest: function (params) {
        console.log('request');
        var defaultHeaders = {'Content-Type': 'application/json'};
        var headers = _.merge({}, defaultHeaders, params.headers);
        var request = httpMethod[params.method];

        return request(params.url)
            .query(params.qs)
            .set(headers)
            .send();
    }
};

'use strict';


function Coinbase(options) {
    var that = this;

    that._options = options;

    this.unauthenticated = {

        ticker: function () {
            var params = {
                url: '',
                method: 'GET'
            };


            return createApiRequest();

            //var parameters = {
            //    options: {
            //        url: 'https://www.googleapis.com/books/v1/volumes/{volumeId}/layers/{layerId}/data',
            //        method: 'GET'
            //    },
            //    params: params,
            //    requiredParams: ['volumeId', 'layerId', 'contentVersion'],
            //    pathParams: ['layerId', 'volumeId'],
            //    context: self
            //};
            //
            //return createAPIRequest(parameters, callback);
        }
    };

}

/**
 * Exports Coinbase object
 * @type Coinbase
 */
module.exports = Coinbase;
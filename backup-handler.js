'use strict';

module.exports.web = (event, context, callback) => {

  const response = {
		statusCode: 200,
		headers: {
			'Content-type': 'text/html'
		},
		body: '<html><head><title>Lambda</title></head><body><h1>Welcome to lambda!</h1></body></html>'
  };

  callback(null, response);
};

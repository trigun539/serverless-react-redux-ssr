import HTML from 'main';

export function web (event, context, callback) {

  const response = {
		statusCode: 200,
		headers: {
			'Content-type': 'text/html'
		},
		body: HTML
  };

  callback(null, response);
};

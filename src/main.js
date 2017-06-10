import React              from 'react';
import { renderToString } from 'react-dom/server';
import { renderStatic }   from 'glamor/server';
import App                from 'components/app/app.js';

const { css } = renderStatic(() => {
	return renderToString(<App />);
});

const html = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Lambda</title>
		<style>
			html, body, #container {
				width: 100%;
				height: 100%;
				margin: 0;
				padding: 0
			}
		</style>
		<style>${css}</style>
	</head>
	<body>
		<div id="container">
			${renderToString(<App />)}
		</div>
	</body>
	</html>`;

export default html;

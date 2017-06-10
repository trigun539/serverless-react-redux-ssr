import React              from 'react';
import { renderToString } from 'react-dom/server';
import { renderStatic }   from 'glamor/server';
import App                from 'components/app/app.js';
import favicon            from 'base64-image-loader!./favicon.png';

const { css } = renderStatic(() => {
	return renderToString(<App />);
});

const html = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Lambda</title>
		<!-- Suppress browser request for favicon.ico -->
    <link rel="shortcut icon"type="image/x-icon" href="data:image/x-icon;,">
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
		<script>
			var docHead = document.getElementsByTagName('head')[0];
			var newLink = document.createElement('link');
			newLink.rel = 'shortcut icon';
			newLink.href = '${ favicon }';
			docHead.appendChild(newLink);
		</script>
	</body>
	</html>`;

export default html;

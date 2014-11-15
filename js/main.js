require.config({
	paths: {
		jsx: "../ext/require-jsx",
		JSXTransformer: "../ext/JSXTransformer",
		React: "../ext/react"
	},

	shim: {
		JSXTransformer: {
			exports: "JSXTransformer"
		}
	}
});

require(['jsx!app'], function (app) {
	app.start();
});
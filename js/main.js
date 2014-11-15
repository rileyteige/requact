require.config({
	paths: {
		jsx: "../ext/require-jsx",
		JSXTransformer: "../ext/JSXTransformer",
		React: "../ext/react",
		underscore: "../ext/underscore"
	},

	shim: {
		underscore: {
			exports: '_'
		},
		JSXTransformer: {
			exports: "JSXTransformer"
		}
	}
});

require(['jsx!app'], function (app) {
	app.start();
});
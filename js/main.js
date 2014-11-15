require.config({
	paths: {
		jsx: "../ext/require-jsx",
		JSXTransformer: "../ext/JSXTransformer",
		React: "../ext/react",
		underscore: "../ext/underscore",
		routie: "../ext/routie"
	},

	shim: {
		underscore: {
			exports: '_'
		},
		JSXTransformer: {
			exports: "JSXTransformer"
		},
		routie: {
			exports: "routie"
		}
	}
});

require(['jsx!app'], function (app) {
	app.start();
});
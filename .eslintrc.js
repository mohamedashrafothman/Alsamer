module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: ["airbnb-base"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
	},
	rules: {
		indent: ["warn", "tab"],
		"no-useless-constructor": "off",
		"no-console": "off",
		"class-methods-use-this": "off",
		"no-tabs": "off",
		"no-new": "off",
		"consistent-return": "off",
		"no-underscore-dangle": "off",
		"no-useless-escape": "off",
		"comma-dangle": "off",
		"linebreak-style": "off",
		"no-plusplus": ["warn"],
		"no-await-in-loop": ["warn"],
		camelcase: "off",
		quotes: ["error", "double"],
		"object-curly-newline": ["warn", {
			ImportDeclaration: "never",
			ExportDeclaration: "never",
		}],
		"max-len": ["error", {
			code: 300,
			ignoreComments: true,
			ignoreTrailingComments: true,
			ignoreUrls: true,
			ignoreStrings: true,
		}],
		"no-multi-spaces": ["error", {
			exceptions: {
				VariableDeclarator: true,
				ImportDeclaration: true,
			},
		}],
		"no-param-reassign": ["warn", {
			props: false,
		}],
	},
};

import globals from "globals";
import pluginJs from "@eslint/js";

export default [
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				browser: "readonly",
				chrome: "readonly",
			},
		},
	},
	pluginJs.configs.recommended,
	{
		ignores: ["src/vendor/"],
	},
];

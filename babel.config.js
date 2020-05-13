/**
 * Created by JimBarrows on 5/13/20.
 */
module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				modules: false
			}
		],
		"@babel/preset-react"
	],
	plugins: [
		"@babel/plugin-transform-runtime",
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-proposal-class-properties"
	],
	env    : {
		production: {
			only   : ["src"],
			plugins: [
				[
					"transform-react-remove-prop-types",
					{
						removeImport: true
					}
				],
				"@babel/plugin-transform-react-inline-elements",
				"@babel/plugin-transform-react-constant-elements"
			]
		}
	}
}

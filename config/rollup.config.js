var common = require('./rollup.js')
var babel = require('rollup-plugin-babel')
var commonjs = require('rollup-plugin-commonjs')

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        banner: common.banner
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        }),
        commonjs()
    ]
}
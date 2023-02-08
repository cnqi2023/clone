var common = require('./rollup.js')
const nodeResolve = require("rollup-plugin-node-resolve");
const babel = require("rollup-plugin-babel");
var commonjs = require('rollup-plugin-commonjs')

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.aio.js',
        format: 'umd',
        name: 'clone',
        banner: common.banner
    },
    plugins: [
        nodeResolve({
            main: true,
            extensions: ['.js']
        }),
        babel({
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        }),
        commonjs()
    ]
}
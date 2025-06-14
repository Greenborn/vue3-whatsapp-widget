import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs',
      },
      {
        format: 'cjs',
        file: 'dist/library.js',
      }
    ],
    plugins: [
      resolve(),
      postcss({
        include: "**src/custom-cursor-style.css",
        extract: resolve('dist/custom-cursor-style.css')
      }),
      vue(), peerDepsExternal()
    ],
    external: [ 'vue' ]
  }
]
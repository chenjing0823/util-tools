/*
 * @Author: jing.chen
 * @Date: 2021-10-26 14:59:10
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-26 14:59:15
 * @Description:
 */
const gulp = require("gulp");
const del = require("del");
const rollup = require("rollup");
const json = require("rollup-plugin-json");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");
const sourceMaps = require("rollup-plugin-sourcemaps");
const typescript = require("rollup-plugin-typescript2");
const uglify = require("rollup-plugin-uglify").uglify;
const pkg = require("./package.json");

function task_clean(done) {
  del.sync("dist");
  del.sync("docs");
  done();
}

async function task_ts() {
  const bundle = await rollup.rollup({
    input: "src/index.ts",
    plugins: [
      json(),
      // Compile TypeScript files
      typescript({ useTsconfigDeclarationDir: true }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve(),

      // Resolve source maps to the original source
      sourceMaps(),
      uglify()
    ],
    external: ["lodash"]
  });

  await bundle.write({
    file: pkg.main,
    format: "umd",
    name: pkg.name,
    sourcemap: false,
    globals: {
      lodash: "lodash"
    }
  });
}

gulp.task("default", gulp.parallel(task_clean, task_ts));

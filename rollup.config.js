import cleanup from 'rollup-plugin-cleanup';

export default [
  {
    input: 'src/index.js',
    plugins: [cleanup(),
    ],
    output: [
      {
        exports: 'default',
        file: './dist/index.js',
        format: 'cjs',
        name: 'options',
        esModule: false,
        preferConst: true,
      },
    ],
  },
  {
    input: 'src/index.js',
    plugins: [cleanup(),
    ],
    output: [
      {
        file: './dist/module.js',
        format: 'esm',
        name: 'options',
      },
    ],
  },
];

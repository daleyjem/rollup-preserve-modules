module.exports = [
  {
    input: 'src/index.js',
    output: {
      dir: 'dist-preserved',
      format: 'es'
    },
    preserveModules: true
  },
  {
    input: 'src/index.js',
    output: {
      dir: 'dist-bundled',
      format: 'es'
    },
    preserveModules: false
  }
]

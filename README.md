# rollup-preserve-modules
Example showing how Rollup treats imports/exports different for preserveModules: true

By adding `preserveModules: true` to the Rollup config file, you can see how imports/exports are treated differently... mainly that the root-level index may or may not export 2 different objects `foo` and `baz` the way it should.

// features/support/world.js

var {
  defineSupportCode
} = require('cucumber')

function CustomWorld () {
  console.log('CustomWorld configuration')
}

defineSupportCode(function ({
                              setWorldConstructor
                            }) {
  console.log('defineSupportCode')
  setWorldConstructor(CustomWorld)
})

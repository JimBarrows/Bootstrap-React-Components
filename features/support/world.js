// features/support/world.js

var {
    defineSupportCode
} = require('cucumber');

function CustomWorld() {

}

defineSupportCode(function({
  setWorldConstructor
}) {
  setWorldConstructor(CustomWorld)
});

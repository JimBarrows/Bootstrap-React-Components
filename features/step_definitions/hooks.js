// features/step_definitions/hooks.js

import {
    Account
} from "../../models";
import Promise from "bluebird";

var {
    defineSupportCode
} = require('cucumber');

defineSupportCode(function({
  Before,
  After
}) {

    Before(function(result, callback) {
    });

    After(function() {});
});

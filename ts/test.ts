/// <reference path="typings/tsd.d.ts" />
console.log("starting test")
var playcontrolConvert = require("./index.js");
playcontrolConvert
    .from("./test/test.flac")
    .to("./test/test.m4v")
    .then(function() {
        console.log("Conversion successfull"));
    });
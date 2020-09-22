#!/usr/bin/env node.exe
"use strict";
var RegisterValues = /** @class */ (function () {
    function RegisterValues() {
        var _this = this;
        this.A = 0;
        this.B = 0;
        this.C = 0;
        this.D = 0;
        this.F = 0;
        this.W = 0;
        this.O = 0;
        this.J = 0;
        this.toString = function () {
            return "A:" + _this.A + " - B:" + _this.B + " - C:" + _this.C + " - D:" + _this.D + " - F:" + _this.F + " - W:" + _this.W + " - O:" + _this.O + " - J:" + _this.J;
        };
    }
    return RegisterValues;
}());
;
function main() {
    var regs = new RegisterValues();
    regs.D = 4;
    console.log(regs.toString());
}
main();

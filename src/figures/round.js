"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Round = void 0;
var Round = /** @class */ (function () {
    function Round(rad) {
        this.rad = rad;
    }
    Round.prototype.area = function () {
        return Math.pow(this.rad, 2) * Math.PI;
    };
    return Round;
}());
exports.Round = Round;

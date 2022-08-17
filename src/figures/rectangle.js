"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(aSide, bSide) {
        this.aSide = aSide;
        this.bSide = bSide;
    }
    Rectangle.prototype.area = function () {
        return this.aSide * this.bSide;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;

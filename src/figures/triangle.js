"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triange = void 0;
var Triange = /** @class */ (function () {
    function Triange(base, height, heightPos) {
        if (heightPos === void 0) { heightPos = 0; }
        if (heightPos < 0 || heightPos > base) {
        }
        this.base = base;
        this.height = height;
        this.heightPos = heightPos;
    }
    return Triange;
}());
exports.Triange = Triange;

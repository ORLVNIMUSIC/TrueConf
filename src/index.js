"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var round_1 = require("./figures/round");
var rectangle_1 = require("./figures/rectangle");
var myRound = new round_1.Round(2);
console.log(myRound.area());
var myRect = new rectangle_1.Rectangle(4, 3);
console.log(myRect.area());

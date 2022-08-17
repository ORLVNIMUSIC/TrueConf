import { Round } from './figures/round';
import { Rectangle } from './figures/rectangle';
import { Triange } from './figures/triangle';

const myRound: Round = new Round(2);
console.log(myRound.area());

const myRect: Rectangle = new Rectangle(4, 3);
console.log(myRect.area());

const myTriangle: Triange = new Triange(2, 3);
console.log(myTriangle.area());

import { Round } from './figures/round';
import { Rectangle } from './figures/rectangle';
import { Triange } from './figures/triangle';

const myRound: Round = new Round(5);
console.log(myRound.perimeter());

const myRect: Rectangle = new Rectangle(4, 3);
console.log(myRect.perimeter());

const myTriangle: Triange = new Triange(7, 3);
console.log(myTriangle.perimeter());

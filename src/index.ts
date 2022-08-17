import { Round } from './figures/round';
import { Rectangle } from './figures/rectangle';

const myRound: Round = new Round(2);
console.log(myRound.area());

const myRect: Rectangle = new Rectangle(4, 3);
console.log(myRect.area());

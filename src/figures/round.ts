import Figure from './figure';
import { Rectangle } from './rectangle';

/**
 * Class, representating a Round of known radius
 */
export class Round implements Figure {
  /**
   * Radius of the round
   */
  readonly rad: number;

  /**
   * @param rad radius of the round
   */
  constructor(rad: number) {
    if (rad <= 0) {
      throw 'Radius can not be of negative length';
    }
    this.rad = rad;
  }

  area(): number {
    return this.rad ** 2 * Math.PI;
  }

  perimeter(): number {
    return this.rad * Math.PI * 2;
  }

  /**
   * Method checks if the round may be inscribed into the chosen rectangle
   * @param rect rectangle you want the round to inscribe into
   * @returns true - if the round is inscribable
   * @returns false - if the round isn't inscribable
   */
  isInscribable(rect: Rectangle): boolean {
    return rect.isSquare() && this.rad === rect.aSide / 2;
  }

  /**
   * Method checks if the round may circumscribe the chosen rectangle
   * @param rect rectangle you want the round to circumscribe
   * @returns true - if the round is circumscribable
   * @returns false - if the round isn't circumscribable
   */
  isCircumscribable(rect: Rectangle): boolean {
    return Math.sqrt(rect.aSide ** 2 + rect.bSide ** 2) / 2 === this.rad;
  }

  /**
   * Method creates new inscribed into the round rectangle with chosen length of one side
   * @param side length of one sides of the desired rectangle
   * @returns inscribed into the round rectangle
   */
  inscribedRectangle(side: number): Rectangle {
    if (side <= 0 || side >= this.rad * 2) {
      throw 'Side of the inscribed rectangle cannot be less then 0 and more then 2 radiuses of circumscribed round';
    }
    return new Rectangle(side, Math.sqrt((this.rad * 2) ** 2 - side ** 2));
  }

  /**
   * Method creates new inscribed into the round square
   * @returns inscribed into the round square
   */
  inscribedSquare(): Rectangle {
    const side = Math.sqrt((this.rad * 2) ** 2 / 2);
    return new Rectangle(side, side);
  }
}

import Figure from './figure';
import { Round } from './round';

/**
 * Class, representating a rectangle with known measurements of his sides
 */
export class Rectangle implements Figure {
  /**
   * First side of the rectangle
   */
  readonly aSide: number;

  /**
   * Second side of the rectangle
   */
  readonly bSide: number;

  /**
   * @param aSide length of one of the two known sides of the rectangle
   * @param bSide length of another of the two known sides of the rectangle
   */
  constructor(aSide: number, bSide: number) {
    if (aSide <= 0 || bSide <= 0) {
      throw 'Sides cannot be of negative length';
    }
    this.aSide = aSide;
    this.bSide = bSide;
  }

  area(): number {
    return this.aSide * this.bSide;
  }

  perimeter(): number {
    return (this.aSide + this.bSide) * 2;
  }

  /**
   * Method checks if the rectangle is square
   * @returns true - if the rectangle is square
   * @returns false - if the rectangle isn't square
   */
  isSquare(): boolean {
    return this.aSide === this.bSide ? true : false;
  }

  /**
   * Method checks if the rectangle may circumscribe the chosen round
   * @param round A round you would try to inscribe into the rectangle
   * @returns true - if the rectangle is circumscribible
   * @returns false - if the rectangle isn't circumscribible
   */
  isCircumscribable(round: Round): boolean {
    return this.isSquare() ?? round.rad === this.aSide / 2;
  }

  /**
   * Method checks if the rectangle may be inscribed into the chosen round
   * @param round A round you would try to inscribe the rectangle into
   * @returns true - if the rectangle is inscribable
   * @returns false - if the rectangle isn't inscribable
   */
  isInscribable(round: Round): boolean {
    return Math.sqrt(this.aSide ** 2 + this.bSide ** 2) / 2 === round.rad;
  }

  /**
   * Method for creating a circumscribed around the rectangle round
   * @returns round object that can circumscribe the rectangle
   */
  circumscribedRound(): Round {
    return new Round(Math.sqrt(this.aSide ** 2 + this.bSide ** 2) / 2);
  }
}

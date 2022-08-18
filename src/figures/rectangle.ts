import Figure from './figure';

/**
 * Class, representating a rectangle with known measurements of his sides
 */
export class Rectangle implements Figure {
  readonly aSide: number;
  readonly bSide: number;

  /**
   * @param aSide length of one of the two known sides of the rectangle
   * @param bSide length of another of the two known sides of the rectangle
   */
  constructor(aSide: number, bSide: number) {
    if (aSide <= 0 || bSide <= 0) {
      throw 'Sides can not be of negative length';
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
}

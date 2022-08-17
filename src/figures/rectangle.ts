import Figure from './figure';

/**
 * Class, representating a rectangle with known measurements of his sides
 */
export class Rectangle implements Figure {
  readonly aSide: number;
  readonly bSide: number;

  /**
   * @param aSide lenght of one of the two known sides of the rectangle
   * @param bSide lenght of another of the two known sides of the rectangle
   */
  constructor(aSide: number, bSide: number) {
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

import Figure from './figure';

export class Rectangle implements Figure {
  readonly aSide: number;
  readonly bSide: number;

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

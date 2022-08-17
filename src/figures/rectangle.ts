export class Rectangle {
  readonly aSide: number;
  readonly bSide: number;

  constructor(aSide: number, bSide: number) {
    this.aSide = aSide;
    this.bSide = bSide;
  }

  area(): number {
    return this.aSide * this.bSide;
  }
}

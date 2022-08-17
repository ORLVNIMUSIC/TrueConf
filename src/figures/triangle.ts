export class Triange {
  readonly base: number;
  readonly height: number;
  readonly heightPos: number;
  constructor(base: number, height: number, heightPos: number = 0) {
    if (heightPos < 0 || heightPos > base) {
    }
    this.base = base;
    this.height = height;
    this.heightPos = heightPos;
  }

  area(): number {
    return (this.base * this.height) / 2;
  }
}

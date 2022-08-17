import Figure from './figure';

export class Triange implements Figure {
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

  perimeter(): number {
    if (this.heightPos === 0 || this.heightPos === this.base) {
      return (
        this.height + this.base + Math.sqrt(this.height ** 2 + this.base ** 2)
      );
    }

    return (
      this.base +
      Math.sqrt(this.heightPos ** 2 + this.height ** 2) +
      Math.sqrt((this.base - this.heightPos) ** 2 + this.height ** 2)
    );
  }
}

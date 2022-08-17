import Figure from './figure';

/**
 * Class, representating a triangle with known:
 *
 * length of it's base,
 *
 * it's height,
 *
 * lenght between left coordinate of it's base and low coordinate of it's height
 */
export class Triange implements Figure {
  readonly base: number;
  readonly height: number;
  readonly heightPos: number;

  /**
   * @param base length of base of the triangle
   * @param height height of the triangle
   * @param heightPos lenght between left coordinate of triangle's base and low coordinate of triangle's height
   */
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
    return (
      this.base +
      Math.sqrt(this.heightPos ** 2 + this.height ** 2) +
      Math.sqrt((this.base - this.heightPos) ** 2 + this.height ** 2)
    );
  }
}

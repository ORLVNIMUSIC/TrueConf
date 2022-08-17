import Figure from './figure';

/**
 * Class, representating a Round of known radius
 */
export class Round implements Figure {
  readonly rad: number;

  /**
   * @param rad radius of the round
   */
  constructor(rad: number) {
    this.rad = rad;
  }

  area(): number {
    return this.rad ** 2 * Math.PI;
  }

  perimeter(): number {
    return this.rad * Math.PI * 2;
  }
}

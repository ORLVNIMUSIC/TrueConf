import Figure from './figure';

export class Round implements Figure {
  readonly rad: number;
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

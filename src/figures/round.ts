export class Round {
  readonly rad: number;
  constructor(rad: number) {
    this.rad = rad;
  }

  area(): number {
    return this.rad ** 2 * Math.PI;
  }
}

export class Keg {
  public pints: number = 40;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public id?: number) {
  }
}

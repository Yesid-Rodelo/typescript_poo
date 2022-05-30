/* Proteger nuestras propiedades del acceso no autorizado */

export class Vehicle {
  constructor(
    public brand: string,
    public model: number,
    public capacity: number,
    private _fuel: number // Para que este valor solo pueda ser inicializado una vez solo se crea el getter
  ) {}

  start() {
    console.log(`The car with ${this.brand} and ${this.model} model`);
  }

  accelerate(): void {
    this._fuel--;
  }

  stop() {
    console.log(`The car has stopped`);
  }

  // Lectura
  public get fuel(): number {
    return this._fuel;
  }

  // Modificación
  public set fuel(value: number) {
    this._fuel = value;
  }
}

const car = new Vehicle('Honda', 2020, 4, 10);

car.accelerate();

console.log(car.fuel);

car.fuel = 15;

console.log(car.fuel);

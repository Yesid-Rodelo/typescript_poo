/*Capacidad de abstraer algo (de la vida real o inexistente) hacia nuesto codigo
 * y convertirlo en una clase
 */

class Car {
  constructor(public brand: string, public model: number) {}

  start() {
    console.log(`The car with ${this.brand} and ${this.model} model`);
  }

  accelerate() {
    console.log(`The car is accelerating`);
  }

  stop() {
    console.log(`The car has stopped`);
  }
}

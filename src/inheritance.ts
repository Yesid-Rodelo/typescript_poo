// Heredar cualidades (propiedades y metodos) de otra clase
import { Vehicle } from './encapsulation';

class Motorcycle extends Vehicle {
  addBags() {
    console.log(`Bags added`);
  }

  removeBags() {
    console.log('Bags removed');
  }
}



class Boat extends Vehicle {}



const akt = new Motorcycle('TT Adventure', 2, 2022, 15);

console.log(akt.removeBags());



export { Motorcycle, Boat }

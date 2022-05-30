/*Clases distintas que comparten mismos metodos y propiedades pueden comportarse de manera indiferente.
  *
  Otra definicion: polimorfismo (en POO) es la capacidad que tienen ciertos lenguajes para hacer que,
  al invocar al mismo método desde distintos objetos,cada uno de esos objetos pueda
  responder a ese mensaje (o a esa invocación) de forma distinta.*/

import { Motorcycle, Boat } from './inheritance';

const honda = new Motorcycle('Honda', 2021, 2, 10);
const yamaha = new Boat('Yamaha', 2021, 15, 10);

/*const getModel = (vehicle: Motorcycle) => {
  console.log(vehicle.model)
}*/

const getModel = (vehicle: Car) => {
  console.log(vehicle.model);
};

getModel(honda);
getModel(yamaha);

/*Solución: trabajar con la clase base (Vehicle), aqui el polimorfismo está siendo aplicado
  ya que el parametro vehicle aunque se le ha especificado la clase padre, se pueden usar 
  las clases hijas (aquellas que extienden de Vehicle)
  */

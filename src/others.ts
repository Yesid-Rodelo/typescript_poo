/* Agregación: Clases que pueden trabajar en conjunto pero no depen del otro
 * Ej: clase contenedora (Celular) --- clase elemento (simcard).
 * Importante: si la clase contenedora es destruida, la clase elemento debe seguir existiendo
 */

class SmarthPhone {
  private simsQuantity: number;
  private battery: Battery;
  private sims: SimCard[];

  constructor(
    private model: string,
    private mAhQuantity: number,
    private brandBattery: string
  ) {
    this.simsQuantity = 0;
    this.battery = new Battery(mAhQuantity, brandBattery); // Composición
    this.sims = []; // agregación
  }

  show(): void {
    console.log(`Modelo ${this.model}`);
    this.battery.show();
    console.log(`Nro. SimCards: ${this.simsQuantity}`);

    this.sims.forEach((sim) => {
      sim.show();
    });
  }

  addChip(newSim: SimCard): void {
    if (this.simsQuantity < 2) {
      this.sims[this.simsQuantity] = newSim;
      this.simsQuantity++;
    }
  }
}

class SimCard {
  constructor(private company: string, private number: number) {}

  show(): void {
    console.log(`Compañia: ${this.company}`);
    console.log(`numero: ${this.number}`);
  }
}

/* Composicion Clases que si dependen una de otra
 * Ej: clase todo (Celular) --- clase parte (bateria)
 * A diferencia de la agregación el celular necesita la batera para existir
 */

class Battery {
  constructor(private mAh: number, private brand: string) {}

  show(): void {
    console.log(`Battery: ${this.mAh}`);
    console.log(`Marca: ${this.brand}`);
  }
}

// Implementación de agregación y composición
const cel = new SmarthPhone('Redmi 10', 5000, 'Lenovo');

const tigo = new SimCard('Tigo', 3234957458);
const wom = new SimCard('Wom', 305741987);

cel.addChip(tigo);
cel.addChip(wom);

cel.show();



// Cohesión: Clase que realiza la tarea para la cual fue diseñada

class ConnectDB {
  constructor(private query: string) {}

  getConnection() {}

  findQuery(query: string) {}
}

/* Acoplamiento: La manera en como modulos de un programa dependen entre si
 * Ej: La Herencia es un tipo de acoplamiento entre clases
 */

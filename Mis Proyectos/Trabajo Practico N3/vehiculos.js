class Vehiculo {
  constructor(marca, velocidadMaxima) {
    this.marca = marca;
    this.velocidadMaxima = velocidadMaxima;
  }

  describir() {
    return `${this.marca} con velocidad máxima de ${this.velocidadMaxima} km/h`;
  }

  arrancar() {
    return `${this.marca} está arrancando...`;
  }
}

class Auto extends Vehiculo {
  constructor(marca, velocidadMaxima, cantidadPuertas) {
    super(marca, velocidadMaxima);
    this.cantidadPuertas = cantidadPuertas;
  }

  describir() {
    return `Auto ${super.describir()}, ${this.cantidadPuertas} puertas`;
  }
}

class Moto extends Vehiculo {
  constructor(marca, velocidadMaxima, tieneSidecar) {
    super(marca, velocidadMaxima);
    this.tieneSidecar = tieneSidecar;
  }

  describir() {
    const sidecar = this.tieneSidecar ? "con sidecar" : "sin sidecar";
    return `Moto ${super.describir()}, ${sidecar}`;
  }
}

const auto = new Auto("Toyota", 180, 4);
const moto = new Moto("Honda", 220, false);

console.log(auto.describir());
console.log(moto.describir());
console.log(auto.arrancar());
console.log(moto.arrancar());
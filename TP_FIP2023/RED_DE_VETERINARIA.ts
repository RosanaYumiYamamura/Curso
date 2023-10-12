interface Veterinaria {
    id: string;
    nombre: string;
    direccion: string;
  }
  
  class VeterinaryNetwork {
    private veterinarias: Veterinaria[] = [];
  
    altaVeterinaria(nombre: string, direccion: string) {
      const id = this.generateUniqueID();
      const veterinaria: Veterinaria = { id, nombre, direccion };
      this.veterinarias.push(veterinaria);
      console.log("Veterinaria agregada con éxito:", veterinaria);
    }
  
    modificarVeterinaria(id: string, nombre: string, direccion: string) {
      const veterinaria = this.veterinarias.find((v) => v.id === id);
      if (veterinaria) {
        veterinaria.nombre = nombre;
        veterinaria.direccion = direccion;
        console.log("Veterinaria modificada con éxito:", veterinaria);
      } else {
        console.log("No se encontró ninguna veterinaria con el ID proporcionado.");
      }
    }
  
    bajaVeterinaria(id: string) {
      const index = this.veterinarias.findIndex((v) => v.id === id);
      if (index !== -1) {
        const veterinaria = this.veterinarias[index];
        this.veterinarias.splice(index, 1);
        console.log("Veterinaria dada de baja con éxito:", veterinaria);
      } else {
        console.log("No se encontró ninguna veterinaria con el ID proporcionado.");
      }
    }
  
    private generateUniqueID(): string {
      let id: string;
      do {
        id = Math.random().toString(36).substring(7);
      } while (this.veterinarias.some((v) => v.id === id));
      return id;
    }
  }
  
  const redVeterinarias = new VeterinaryNetwork();
  
  console.log("Bienvenido a la Red de Veterinarias");
  console.log("Seleccione una opción:");
  console.log("1. Alta de Veterinaria");
  console.log("2. Modificación de Veterinaria");
  console.log("3. Baja de Veterinaria");
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Ingrese el número de la opción: ", (opcion) => {
    if (opcion === "1") {
      readline.question("Ingrese el nombre de la veterinaria: ", (nombre) => {
        readline.question("Ingrese la dirección de la veterinaria: ", (direccion) => {
          redVeterinarias.altaVeterinaria(nombre, direccion);
          readline.close();
        });
      });
    } else if (opcion === "2") {
      readline.question("Ingrese el ID de la veterinaria a modificar: ", (id) => {
        readline.question("Ingrese el nuevo nombre de la veterinaria: ", (nombre) => {
          readline.question("Ingrese la nueva dirección de la veterinaria: ", (direccion) => {
            redVeterinarias.modificarVeterinaria(id, nombre, direccion);
            readline.close();
          });
        });
      });
    } else if (opcion === "3") {
      readline.question("Ingrese el ID de la veterinaria a dar de baja: ", (id) => {
        redVeterinarias.bajaVeterinaria(id);
        readline.close();
      });
    } else {
      console.log("Opción no válida.");
      readline.close();
    }
  });
  
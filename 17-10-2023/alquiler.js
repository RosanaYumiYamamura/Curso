const fs = require('fs');
const readline = require('readline');


const locatarioFile = 'locatario.json';
const viviendaFile = 'vivienda.json';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function cargarLocatario() {
  try {
    const data = fs.readFileSync(locatarioFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}


function guardarLocatario(locatario) {
  fs.writeFileSync(locatarioFile, JSON.stringify(locatario, null, 2), 'utf8');
}


function cargarVivienda() {
  try {
    const data = fs.readFileSync(viviendaFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}


function guardarVivienda(vivienda) {
  fs.writeFileSync(viviendaFile, JSON.stringify(vivienda, null, 2), 'utf8');
}


function registrarLocatario() {
  rl.question('Nombre y Apellido del locatario: ', (nombre) => {
    const locatario = cargarLocatario();
    locatario.push({ nombre });
    guardarLocatario(locatario);
    console.log(`Locatario ${nombre} registrado exitosamente.`);
    menuPrincipal();
  });
}


function listarVivienda() {
  rl.question('Casa #, Duplex, MB, Piso, A-B-C: ', (nombre) => {
  const vivienda = cargarVivienda();
  vivienda.push({ nombre });
  guardarVivienda(vivienda);
  console.log(`Lista de Vivienda ${nombre} registrado exitosamente.`);
  menuPrincipal();
  });
}


function tomarPrestadoDpto() {
  const dpto = cargarDpto();
  console.log('Lista de Dpto:');
  dpto.forEach((dpto, index) => {
    console.log(`${index + 1}. ${dpto.titulo} (${dpto.estado})`);
  });


  rl.question('Selecciona el número del dpto que deseas tomar prestado: ', (index) => {
    index = parseInt(index, 10) - 1;
    if (index >= 0 && index < dpto.length && dpto[index].estado === 'disponible') {
      const locatario = prompt('Ingresa tu nombre de locatario: ');
      dpto[index].estado = 'prestado';
      dpto[index].prestadoA = locatario;
      guardarDpto(dpto);
      console.log(`Dpto ${dpto[index].titulo} prestado a ${locatario}.`);
    } else {
      console.log('dpto no disponible o selección no válida.');
    }
    menuPrincipal();
  });
}


function devolverDpto() {
  const dpto = cargarDpto();
  console.log('Dpto prestados:');
  const dptoPrestados = dpto.filter((dpto) => dpto.estado === 'prestado');
  dptoPrestados.forEach((dpto, index) => {
    console.log(`${index + 1}. ${dpto.titulo} (Prestado a ${dpto.prestadoA})`);
  });


  rl.question('Selecciona el número del dpto que deseas devolver: ', (index) => {
    index = parseInt(index, 10) - 1;
    if (index >= 0 && index < dptoPrestados.length) {
      dpto[index].estado = 'disponible';
      delete dpto[index].prestadoA;
      guardarDpto(dpto);
      console.log(`Dpto ${dptoPrestados[index].titulo} devuelto.`);
    } else {
      console.log('Selección no válida.');
    }
    menuPrincipal();
  });
}


function menuPrincipal() {
  console.log('\nMenú Principal:');
  console.log('1. Registrar Locatario');
  console.log('2. Listar Vivienda');
  console.log('3. Tomar Prestado Dpto');
  console.log('4. Devolver Dpto');
  console.log('5. Salir');


  rl.question('Seleccione una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        registrarLocatario();
        break;
      case '2':
        listarVivienda();
        break;
      case '3':
        tomarPrestadoDpto();
        break;
      case '4':
        devolverDpto();
        break;
      case '5':
        console.log('Saliendo...');
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        menuPrincipal();
    }
  });
}


// Iniciar la aplicación
console.log('Bienvenido al alquiler.');
menuPrincipal();




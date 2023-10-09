const fs = require('fs');
const readline = require('readline');

const usuariosFile = 'usuarios.json';
const librosFile = 'libros.json';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function cargarUsuarios() {
  try {
    const data = fs.readFileSync(usuariosFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function guardarUsuarios(usuarios) {
  fs.writeFileSync(usuariosFile, JSON.stringify(usuarios, null, 2), 'utf8');
}

function cargarLibros() {
  try {
    const data = fs.readFileSync(librosFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function guardarLibros(libros) {
  fs.writeFileSync(librosFile, JSON.stringify(libros, null, 2), 'utf8');
}

function registrarUsuario() {
  rl.question('Nombre de usuario: ', (nombre) => {
    const usuarios = cargarUsuarios();
    usuarios.push({ nombre });
    guardarUsuarios(usuarios);
    console.log(`Usuario ${nombre} registrado exitosamente.`);
    menuPrincipal();
  });
}

function listarLibros() {
  const libros = cargarLibros();
  console.log('Lista de Libros:');
  libros.forEach((libro) => {
    console.log(`${libro.titulo} (${libro.estado})`);
  });
  menuPrincipal();
}

function tomarPrestadoLibro() {
  const libros = cargarLibros();
  console.log('Lista de Libros:');
  libros.forEach((libro, index) => {
    console.log(`${index + 1}. ${libro.titulo} (${libro.estado})`);
  });

  rl.question('Selecciona el número del libro que deseas tomar prestado: ', (index) => {
    index = parseInt(index, 10) - 1;
    if (index >= 0 && index < libros.length && libros[index].estado === 'disponible') {
      const usuario = prompt('Ingresa tu nombre de usuario: ');
      libros[index].estado = 'prestado';
      libros[index].prestadoA = usuario;
      guardarLibros(libros);
      console.log(`Libro ${libros[index].titulo} prestado a ${usuario}.`);
    } else {
      console.log('Libro no disponible o selección no válida.');
    }
    menuPrincipal();
  });
}

function devolverLibro() {
  const libros = cargarLibros();
  console.log('Libros prestados:');
  const librosPrestados = libros.filter((libro) => libro.estado === 'prestado');
  librosPrestados.forEach((libro, index) => {
    console.log(`${index + 1}. ${libro.titulo} (Prestado a ${libro.prestadoA})`);
  });

  rl.question('Selecciona el número del libro que deseas devolver: ', (index) => {
    index = parseInt(index, 10) - 1;
    if (index >= 0 && index < librosPrestados.length) {
      libros[index].estado = 'disponible';
      delete libros[index].prestadoA;
      guardarLibros(libros);
      console.log(`Libro ${librosPrestados[index].titulo} devuelto.`);
    } else {
      console.log('Selección no válida.');
    }
    menuPrincipal();
  });
}

function menuPrincipal() {
  console.log('\nMenú Principal:');
  console.log('1. Registrar Usuario');
  console.log('2. Listar Libros');
  console.log('3. Tomar Prestado Libro');
  console.log('4. Devolver Libro');
  console.log('5. Salir');

  rl.question('Seleccione una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        registrarUsuario();
        break;
      case '2':
        listarLibros();
        break;
      case '3':
        tomarPrestadoLibro();
        break;
      case '4':
        devolverLibro();
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
console.log('Bienvenido a la Biblioteca.');
menuPrincipal();

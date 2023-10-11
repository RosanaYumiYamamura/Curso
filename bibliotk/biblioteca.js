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

function registrarLibros() {
  rl.question('ID del libro: ', (id) => {
    rl.question('Título del libro: ', (titulo) => {
      rl.question('Autor del libro: ', (autor) => {
        rl.question('Editorial del libro: ', (editorial) => {
          rl.question('Año de publicación del libro: ', (año) => {
            const libros = cargarLibros();
            libros.push({
              id,
              titulo,
              autor,
              editorial,
              año,
              estado: 'disponible', 
            });
            guardarLibros(libros);
            console.log(`Libro ${titulo} registrado exitosamente.`);
            menuPrincipal();
          });
        });
      });
    });
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
      rl.question('Ingresa tu nombre de usuario: ', (usuario) => {
      libros[index].estado = 'prestado';
      libros[index].prestadoA = usuario;
      guardarLibros(libros);
      console.log(`Libro ${libros[index].titulo} prestado a ${usuario}.`);
      menuPrincipal();
    });
  } else {
    console.log('Libro no disponible o selección no válida.');
    menuPrincipal();
  }
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
      const libro = librosPrestados[index];
      const fechaDevolucion = new Date(); 
      const fechaPrestamo = new Date(libro.fechaPrestamo); 

      
      const diferenciaDias = Math.floor((fechaDevolucion - fechaPrestamo) / (1000 * 60 * 60 * 24));

      if (diferenciaDias === 0) {
        console.log('El libro se devolvió en el plazo correcto.');
        if (usuario.scoring > 0) {
          usuario.scoring -= 1; 
        }
      } else if (diferenciaDias === 1) {
        console.log('El libro se devolvió 1 día después de la fecha.');
        usuario.scoring += 2; 
      } else if (diferenciaDias >= 2 && diferenciaDias <= 5) {
        console.log('El libro se devolvió entre 2 y 5 días después de la fecha.');
        usuario.scoring += 3; 
      } else if (diferenciaDias > 5 && diferenciaDias <= 10) {
        console.log('El libro se devolvió entre 5 y 10 días después de la fecha.');
        usuario.scoring += 6; 
      } else {
        console.log('El libro se devolvió más de 10 días después de la fecha. Se cancela al usuario.');
        usuario.scoring = 0; 
      }

      if (usuario.scoring >= 6) {
        console.log('Has acumulado 6 puntos de penalización. No puedes retirar ítems por una semana.');
      }

      guardarUsuarios(usuarios); 
      libro.estado = 'disponible'; 
      delete libro.prestadoA; 
      guardarLibros(libros); 
      menuPrincipal();
    } else {
      console.log('Selección no válida.');
      menuPrincipal();
    }
  });
}


function menuPrincipal() {
  console.log('\nMenú Principal:');
  console.log('1. Registrar Usuario');
  console.log('2. Registrar libro');
  console.log('3. Listar Libros');
  console.log('4. Tomar Prestado Libro');
  console.log('5. Devolver Libro');
  console.log('6. Salir');

  rl.question('Seleccione una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        registrarUsuario();
        break;
      case '2':
        registrarLibros();
          break;
      case '3':
        listarLibros();
        break;
      case '4':
        tomarPrestadoLibro();
        break;
      case '5':
        devolverLibro();
        break;
      case '6':
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
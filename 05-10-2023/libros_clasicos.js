const fs = require('fs');

// Lee el contenido del archivo 'libros_clasicos.txt'
fs.readFile('libros_clasicos.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Divide el contenido en líneas
  const lineas = data.split('\n');

  // Inicializa una lista para almacenar los libros
  const listaDeLibros = [];

  // Elimina líneas en blanco o vacías
  const lineasFiltradas = lineas.filter((linea) => linea.trim() !== '');

  // Agrega cada libro a la lista
  lineasFiltradas.forEach((linea) => {
    listaDeLibros.push(linea.trim());
  });

  // Imprime la lista de libros
  console.log('Lista de Libros Clásicos:');
  console.log(listaDeLibros);
});

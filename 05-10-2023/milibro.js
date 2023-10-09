const fs = require('fs');

// Lee el contenido del archivo 'milibro.txt'
fs.readFile('milibro.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Divide el contenido en líneas
  const lineas = data.split('\n');

  // Inicializa una lista para almacenar los libros
  const listaDeLibros = [];

  // Recorre cada línea y crea un objeto libro
  lineas.forEach((linea) => {
    const partes = linea.split('|');
    if (partes.length === 4) {
      const libro = {
        titulo: partes[0],
        autor: partes[1],
        editor: partes[2],
        año: parseInt(partes[3], 10),
      };
      listaDeLibros.push(libro);
    }
  });

  // Imprime la lista de libros
  console.log('Lista de Libros:');
  console.log(listaDeLibros);
});

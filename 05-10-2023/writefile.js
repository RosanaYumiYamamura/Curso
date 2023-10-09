const fs = require('fs');

const nuevoContenido = 'Este es un nuevo contenido para el libro.';

fs.writeFile('miLibro.txt', nuevoContenido, (err) => {
  if (err) {
    console.error('Error al escribir en el archivo:', err);
    return;
  }
  console.log('El archivo se ha actualizado correctamente.');
});

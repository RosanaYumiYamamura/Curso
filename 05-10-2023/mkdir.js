const fs = require('fs');

fs.mkdir('miBiblioteca', (err) => {
  if (err) {
    console.error('Error al crear el directorio:', err);
    return;
  }
  console.log('Directorio "miBiblioteca" creado correctamente.');
});

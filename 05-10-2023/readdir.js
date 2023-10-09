const fs = require('fs');

fs.readdir('miBiblioteca', (err, files) => {
  if (err) {
    console.error('Error al listar archivos:', err);
    return;
  }
  console.log('Archivos en "miBiblioteca":', files);
});

function mostrarDatos(data: any[]): void {
    const body = document.body;
  
    try {
      if (!Array.isArray(data)) {
        throw new Error('El dato proporcionado no es un arreglo.');
      }
  
      if (data.length === 0) {
        throw new Error('El arreglo está vacío.');
      }
  
      const container = document.createElement('div');
      container.innerHTML = `<h2>Arreglo de Objetos:</h2><ul>${data.map(item => `<li>${JSON.stringify(item)}</li>`).join('')}</ul>`;
      body.appendChild(container);
    } catch (error) {
      // Manejar errores
      const errorContainer = document.createElement('p');
      errorContainer.textContent = 'Error: ' + error.message;
      body.appendChild(errorContainer);
    }
  }
  
  // Ejemplo de uso
  try {
    const miArreglo = [
      { nombre: 'Juan', edad: 25, ciudad: 'EjemploCity1' },
      { nombre: 'Maria', edad: 30, ciudad: 'EjemploCity2' },
      { nombre: 'Pedro', edad: 22, ciudad: 'EjemploCity3' }
    ];
    mostrarDatos(miArreglo);
  } catch (error) {
    console.error('Error al mostrar datos:', error);
  }
  
  try {
    const miObjeto = { nombre: 'Carlos', edad: 28, ciudad: 'EjemploCity4' };
    mostrarDatos(miObjeto);
  } catch (error) {
    console.error('Error al mostrar datos:', error);
  }
  
  try {
    const datoInvalido = 'Hola, soy un string';
    mostrarDatos(datoInvalido);
  } catch (error) {
    console.error('Error al mostrar datos:', error);
  }
  
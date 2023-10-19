const fs = require('fs');
const readline = require('readline');

const clienteFile = 'cliente.json';
const proveedorFile = 'proveedor.json';
const pedidoFile = 'pedido.json';
const pacienteFile = 'paciente.json';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//----------PACIENTE----------------
function cargarPaciente() {
    try {
      const data = fs.readFileSync(pacienteFile, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
  
  function guardarPaciente(paciente) {
    fs.writeFileSync(pacienteFile, JSON.stringify(paciente, null, 2), 'utf8');
  }
  
  function registrarPaciente() {
    rl.question('Nombre / padecimiento del paciente: ', (Nombre_Padecimiento) => {
      const paciente = cargarPaciente();
      paciente.push({ Nombre_Padecimiento });
      guardarPaciente(paciente);
      console.log(`Paciente ${Nombre_Padecimiento} registrado exitosamente.`);
      menuPrincipal();
    });
  }
  
  function borrarPaciente() {
    rl.question('Nombre del paciente a borrar: ', (Nombre_Padecimiento) => {
      const paciente = cargarCliente();
      const indice = paciente.findIndex((c) => c.Nombre_Padecimiento === Nombre_Padecimiento);
      if (indice !== -1) {
        paciente.splice(indice, 1);
        guardarPaciente(paciente);
        console.log(`Paciente ${Nombre_Padecimiento} ha sido eliminado.`);
      } else {
        console.log(`No se encontró el paciente ${Nombre_Padecimiento}.`);
      }
      menuPrincipal();
    });
  }
  
  function modificarPaciente() {
    rl.question('Nombre del paciente a modificar: ', (Nombre_Padecimiento) => {
      const paciente = cargarPaciente();
      const indice = paciente.findIndex((c) => c.Nombre_Padecimiento === Nombre_Padecimiento);
      if (indice !== -1) {
        rl.question('Nuevo Nombre_Padecimiento: ', (nuevoNombre_Padecimiento) => {
          cliente[indice].Nombre_Padecimiento = nuevoNombre_Padecimiento;
          guardarPaciente(paciente);
          console.log(`Paciente ${Nombre_Padecimiento} ha sido modificado a ${nuevoNombre_Padecimiento}.`);
          menuPrincipal();
        });
      } else {
        console.log(`No se encontró el paciente ${Nombre_Padecimiento}.`);
        menuPrincipal();
      }
    });
  }
  
  // --- Agregar función para listar paciente ---
  function listarPaciente() {
      const paciente = cargarPaciente();
      console.log('Lista de Paciente:');
      paciente.forEach((paciente, index) => {
        console.log(`${index + 1}. ${paciente.Nombre_Padecimiento}`);
      });
      menuPrincipal();
    }





//--------FIN PACIENTE---------------

//------------CLIENTE-----------------------------
// --- Cargar, guardar, registrar cliente ---
function cargarCliente() {
  try {
    const data = fs.readFileSync(clienteFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function guardarCliente(cliente) {
  fs.writeFileSync(clienteFile, JSON.stringify(cliente, null, 2), 'utf8');
}

function registrarCliente() {
  rl.question('Apellido y Nombre / teléfono del cliente: ', (Apellido_Nombre_Telefono) => {
    const cliente = cargarCliente();
    cliente.push({ Apellido_Nombre_Telefono });
    guardarCliente(cliente);
    console.log(`Cliente ${Apellido_Nombre_Telefono} registrado exitosamente.`);
    menuPrincipal();
  });
}

// ---  borrar cliente ---
function borrarCliente() {
  rl.question('Apellido y Nombre / teléfono del cliente a borrar: ', (Apellido_Nombre_Telefono) => {
    const cliente = cargarCliente();
    const indice = cliente.findIndex((c) => c.Apellido_Nombre_Telefono === Apellido_Nombre_Telefono);
    if (indice !== -1) {
      cliente.splice(indice, 1);
      guardarCliente(cliente);
      console.log(`Cliente ${Apellido_Nombre_Telefono} ha sido eliminado.`);
    } else {
      console.log(`No se encontró el cliente ${Apellido_Nombre_Telefono}.`);
    }
    menuPrincipal();
  });
}

// ---  modificar cliente por nombre ---
function modificarCliente() {
  rl.question('Apellido y Nombre del cliente a modificar: ', (Apellido_Nombre) => {
    const cliente = cargarCliente();
    const indice = cliente.findIndex((c) => c.Apellido_Nombre === Apellido_Nombre);
    if (indice !== -1) {
      rl.question('Nuevo Apellido y Nombre: ', (nuevoApellido_Nombre) => {
        cliente[indice].Apellido_Nombre = nuevoApellido_Nombre;
        guardarCliente(cliente);
        console.log(`Cliente ${Apellido_Nombre} ha sido modificado a ${nuevoApellido_Nombre}.`);
        menuPrincipal();
      });
    } else {
      console.log(`No se encontró el cliente ${Apellido_Nombre}.`);
      menuPrincipal();
    }
  });
}

// --- Agregar función para listar cliente ---
function listarCliente() {
    const cliente = cargarCliente();
    console.log('Lista de Cliente:');
    cliente.forEach((cliente, index) => {
      console.log(`${index + 1}. ${cliente.Apellido_Nombre}`);
    });
    menuPrincipal();
  }
//------------------------FIN CLIENTE---------------------

//---------------PROVEEDOR---------------------
// --- Cargar, guardar, registrar proveedor ---
function cargarProveedor() {
  try {
    const data = fs.readFileSync(proveedorFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function guardarProveedor(proveedor) {
  fs.writeFileSync(proveedorFile, JSON.stringify(proveedor, null, 2), 'utf8');
}

function registrarProveedor() {
  rl.question('Apellido y Nombre / Telefono del proveedor: ', (Apellido_Nombre_Telefono) => {
    const proveedor = cargarProveedor();
    proveedor.push({ Apellido_Nombre_Telefono });
    guardarProveedor(proveedor);
    console.log(`Proveedor ${Apellido_Nombre_Telefono} registrado exitosamente.`);
    menuPrincipal();
  });
}

// --- borrar proveedor por nombre ---
function borrarProveedor() {
  rl.question('Apellido y Nombre del proveedor a borrar: ', (Apellido_Nombre) => {
    const proveedor = cargarProveedor();
    const indice = proveedor.findIndex((p) => p.Apellido_Nombre === Apellido_Nombre);
    if (indice !== -1) {
      proveedor.splice(indice, 1);
      guardarProveedor(proveedor);
      console.log(`Proveedor ${Apellido_Nombre} ha sido eliminado.`);
    } else {
      console.log(`No se encontró el proveedor ${Apellido_Nombre}.`);
    }
    menuPrincipal();
  });
}
// --- modificar proveedor por nombre ---
function modificarProveedor() {
    rl.question('Apellido y Nombre del proveedor a modificar: ', (Apellido_Nombre) => {
      const proveedor = cargarProveedor();
      const indice = proveedor.findIndex((p) => p.Apellido_Nombre === Apellido_Nombre);
      if (indice !== -1) {
        rl.question('Nuevo Apellido y Nombre: ', (nuevoApellido_Nombre) => {
          proveedor[indice].Apellido_Nombre = nuevoApellido_Nombre;
          guardarProveedor(proveedor);
          console.log(`Proveedor ${Apellido_Nombre} ha sido modificado a ${nuevoApellido_Nombre}.`);
          menuPrincipal();
        });
      } else {
        console.log(`No se encontró el proveedor ${Apellido_Nombre}.`);
        menuPrincipal();
      }
    });
  }
  
  function listarProveedor() {
    const proveedor = cargarProveedor();
    console.log('Lista de Proveedor:');
    proveedor.forEach((proveedor, index) => {
      console.log(`${index + 1}. ${proveedor.Apellido_Nombre_Telefono}`);
    });
    menuPrincipal();
  }

//--------------------------PEDIDO---------------
// --- Cargar, guardar, registrar pedido ---
function cargarPedido() {
    try {
      const data = fs.readFileSync(pedidoFile, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
  
  function guardarPedido(pedido) {
    fs.writeFileSync(pedidoFile, JSON.stringify(pedido, null, 2), 'utf8');
  }
  
  function registrarPedido() {
    rl.question('objeto pedido: ', (objeto_pedido) => {
      const pedido = cargarPedido();
      pedido.push({ objeto_pedido });
      guardarPedido(pedido);
      console.log(`Pedido ${objeto_pedido} registrado exitosamente.`);
      menuPrincipal();
    });
  }
  
  // --- borrar pedido por nombre ---
  function borrarPedido() {
    rl.question('objeto_pedido a borrar: ', (objeto_pedido) => {
      const pedido = cargarPedido();
      const indice = pedido.findIndex((p) => p.objeto_pedido === objeto_pedido);
      if (indice !== -1) {
        pedido.splice(indice, 1);
        guardarPedido(pedido);
        console.log(`Pedido ${objeto_pedido} ha sido eliminado.`);
      } else {
        console.log(`No se encontró el pedido ${objeto_pedido}.`);
      }
      menuPrincipal();
    });
  }
  // --- modificar pedido por nombre ---
  function modificarPedido() {
      rl.question('objeto_pedido a modificar: ', (objeto_pedido) => {
        const pedido = cargarPedido();
        const indice = pedido.findIndex((p) => p.objeto_pedido === objeto_pedido);
        if (indice !== -1) {
          rl.question('Nuevo objeto_pedido: ', (nuevoobjeto_pedido) => {
            pedido[indice].objeto_pedido = nuevoobjeto_pedido;
            guardarPedido(pedido);
            console.log(`Pedido ${objeto_pedido} ha sido modificado a ${nuevoobjeto_pedido}.`);
            menuPrincipal();
          });
        } else {
          console.log(`No se encontró el pedido ${objeto_pedido}.`);
          menuPrincipal();
        }
      });
    }
    
    function listarPedido() {
        const pedido = cargarPedido();
        console.log('Lista de Pedido:');
        pedido.forEach((pedido, index) => {
          console.log(`${index + 1}. ${pedido.objeto_pedido}`);
        });
        menuPrincipal();
      }
    ///------------------FIN PEDIDO----------------  


// --- Menú Principal ---

function menuPrincipal() {
  console.log('*******************************************');
  console.log('*     Bienvenido a la Veterinaria         *');
  console.log('*******************************************');
  console.log('*                                         *');
  console.log('*       1. Registrar Cliente              *');
  console.log('*       2. Borrar Cliente                 *');
  console.log('*       3. Modificar Cliente              *');
  console.log('*       4. Lista de Cliente               *');
  console.log('*       5. Registrar Proveedor            *');
  console.log('*       6. Borrar Proveedor               *');
  console.log('*       7. Modificar Proveedor            *');
  console.log('*       8. Lista de Proveedor             *');
  console.log('*       9. Registrar Pedido               *');
  console.log('*       10. Borrar el pedido              *');
  console.log('*       11. Modificar el pedido           *');
  console.log('*       12. Lista de pedido               *');
  console.log('*       13. Registrar paciente            *');
  console.log('*       14. Borrar paciente               *');
  console.log('*       15. Modificar paciente            *');
  console.log('*       17. Lista de paciente             *');
  console.log('*       18. Salir                         *');
  console.log('*                                         *');
  console.log('*******************************************');

  rl.question('Seleccione una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        registrarCliente();
        break;
      case '2':
        borrarCliente();
        break;
      case '3':
        modificarCliente();
        break;
      case '4':
        listarCliente();
        break;
      case '5':
        registrarProveedor();
        break;
      case '6':
        borrarProveedor();
        break;
      case '7':
        modificarProveedor();
        break;
      case '8':
        listarProveedor();
        break;
      case '9':
        registrarPedido();
        break;
      case '10':
        borrarPedido();
        break;
      case '11':
        modificarPedido();
        break;
      case '12':
        listarPedido();
        break;
      case '13':
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
console.log('Bienvenido a la Veterinaria.');
menuPrincipal();

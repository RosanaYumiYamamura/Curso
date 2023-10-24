let data = `{
    "empleados": [
        {"nombre": "Juan", "apellido": "Perez"},
        {"nombre": "Karina", "apellido": "Gonzalez"},
        {"nombre": "Luz", "apellido": "López"},
        {"nombre": "Marcos", "apellido": "Villalba"}
    ]
}`

let processedData = JSON.parse(data);

console.log(processedData.empleados[0]); 
 //{nombre: "Juan", apellido: "Perez"}

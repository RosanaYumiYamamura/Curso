export class Usuario {
    constructor(public id: number, public nombre: string) {}
  }
  
  export class Libro {
    constructor(
      public id: number,
      public titulo: string,
      public autor: string,
      public editorial: string,
      public año: number,
      public estado: 'disponible' | 'prestado' = 'disponible',
      public prestadoA: Usuario | null = null
    ) {}
  }
  
  export class Prestamo {
    constructor(
      public id: number,
      public usuario: Usuario,
      public libro: Libro,
      public fechaPrestamo: Date,
      public fechaDevolucion: Date | null = null
    ) {}
  }  
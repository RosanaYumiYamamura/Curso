

class User {
  public score: number;
  public penalized: boolean;

  constructor() {
    this.score = 0;
    this.penalized = false;
  }

  public returnBookOnTime(): void {
    if (this.score > 0) {
      this.score -= 1;
    }
    console.log("Libro devuelto a tiempo. Puntaje actual: " + this.score);
  }

  public returnBookLate(daysLate: number): void {
    if (!this.penalized) {
      if (daysLate === 1) {
        this.score += 2;
        console.log("Libro devuelto con 1 día de retraso. +2 puntos. Puntaje actual: " + this.score);
      } else if (daysLate >= 2 && daysLate <= 5) {
        this.score += 3;
        console.log("Libro devuelto con retraso de 2 a 5 días. +3 puntos. Puntaje actual: " + this.score);
      } else if (daysLate > 5 && daysLate <= 10) {
        this.score += 6;
        console.log("Libro devuelto con retraso de 6 a 10 días. +6 puntos. Puntaje actual: " + this.score);
      } else if (daysLate > 10) {
        this.score = 0;
        this.penalized = true;
        console.log("Libro devuelto con más de 10 días de retraso. Usuario penalizado. Puntaje actual: " + this.score);
      }
    }
  }

  public applyPenalty(): void {
    if (this.score >= 6) {
      this.penalized = true;
      console.log("Usuario penalizado por acumular 6 puntos.");
    }
  }

  public resetPenalty(): void {
    this.penalized = false;
    console.log("Penalización del usuario reseteada.");
  }
}

// Ejemplo de uso
const user = new User();

user.returnBookLate(3);
user.returnBookOnTime();
user.returnBookLate(15);

user.applyPenalty();
user.resetPenalty();

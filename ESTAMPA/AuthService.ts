//(servicio de autenticación):
import User from '../User.ts';

class AuthService {
  register(user: User): void {
    // Lógica para registrar al usuario en la base de datos
  }

  login(email: string, password: string): User | null {
    // Lógica para autenticar al usuario y devolver los datos
  }
}

export default new AuthService();

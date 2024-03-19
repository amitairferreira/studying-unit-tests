// Uma senha é inválida se:
// tem comrprimento inferior a 8 caracteres
// não tem letras maiúsculas
// não tem letras minúsculas


export class PasswordChecker {

    public checkPassword(password: string): boolean {
        if (password.length < 8) {
            return false;
        }
        if (password == password.toLowerCase()) {
            return false;
        }
        if (password == password.toUpperCase()) {
            return false;
        }
        return true;
    }
}
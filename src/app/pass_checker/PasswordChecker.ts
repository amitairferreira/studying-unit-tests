// Uma senha é inválida se:
// tem comrprimento inferior a 8 caracteres
// não tem letras maiúsculas
// não tem letras minúsculas
// Return motivos que invalidam a senha

export enum PasswordErrors {
   SHORT = 'Password is too short!',
   NO_UPPER_CASE = 'Upper case letter required!',
   NO_LOWER_CASE = 'Lower case letter required!'
}

export interface checkResult {
    valid: boolean,
    reasons: string[]
}

export class PasswordChecker {

    public checkPassword(password: string): checkResult {
        const reasons:PasswordErrors[] = [];

        if (password.length < 8) {
          reasons.push(PasswordErrors.SHORT);
        }
        if (password == password.toLowerCase()) {
            reasons.push(PasswordErrors.NO_UPPER_CASE);
        }
        if (password == password.toUpperCase()) {
            reasons.push(PasswordErrors.NO_LOWER_CASE);
        }
        return {
            valid: reasons.length > 0 ? false : true,
            reasons:reasons
        };
    }
}
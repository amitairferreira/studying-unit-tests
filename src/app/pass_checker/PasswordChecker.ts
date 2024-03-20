// Uma senha é inválida se:
// tem comrprimento inferior a 8 caracteres
// não tem letras maiúsculas
// não tem letras minúsculas
// Return motivos que invalidam a senha

export enum PasswordErrors {
   SHORT = 'Password is too short!',
   NO_UPPER_CASE = 'Upper case letter required!',
   NO_LOWER_CASE = 'Lower case letter required!',
   NO_NUMBER = 'At least one number required!'
}

export interface checkResult {
    valid: boolean,
    reasons: PasswordErrors[]
}

export class PasswordChecker {

    public checkPassword(password: string): checkResult {
        const reasons:PasswordErrors[] = [];

        this.checkFOrLength(password, reasons);
        this.checkFOrUpperCase(password, reasons);
        this.checkForLowerCase(password, reasons);

        return {
            valid: reasons.length > 0 ? false : true,
            reasons:reasons
        };
    }

    public checkAdminPassword(password: string): checkResult {
        const basicCheck = this.checkPassword(password);
        this.checkFOrNumber(password, basicCheck.reasons);
        return {
            valid: basicCheck.reasons.length > 0 ? false : true,
            reasons: basicCheck.reasons
        };
    }

    private checkFOrNumber(password: string, reasons: PasswordErrors[]) {
        const hasNumber = /\d/;
        if (!hasNumber.test(password)) {
            reasons.push(PasswordErrors.NO_NUMBER);
          }
    }



    private checkFOrLength(password: string, reasons: PasswordErrors[]) {
        if (password.length < 8) {
            reasons.push(PasswordErrors.SHORT);
          }
    }

    private checkFOrUpperCase(password: string, reasons: PasswordErrors[]) {
        if (password == password.toLowerCase()) {
            reasons.push(PasswordErrors.NO_UPPER_CASE);
        }
    }

    private checkForLowerCase(password: string, reasons: PasswordErrors[]) {
        if (password == password.toUpperCase()) {
            reasons.push(PasswordErrors.NO_LOWER_CASE);
        }
    }
}
import EmailValidator from 'email-validator';
import PasswordValidator from "password-validator";

export function validateEmail(value: string): boolean {
  return EmailValidator.validate(value)
}

export function validatePassword(value: string): boolean {
  const isValid = new PasswordValidator().is().min(8)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits(1)
    .has().not().spaces()
    .validate(value, {list: false, details: false})
  console.log(isValid)
  return isValid as boolean
}

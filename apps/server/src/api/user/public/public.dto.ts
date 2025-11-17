export class RegisterArgs {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
}

export class LoginArgs {
  email: string = '';
  password: string = '';
}

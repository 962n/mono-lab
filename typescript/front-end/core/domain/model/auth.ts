export class AuthModel {
  readonly token: string
  readonly refreshToken : string

  constructor(token: string, refreshToken: string) {
    this.token = token;
    this.refreshToken = refreshToken;
  }
}

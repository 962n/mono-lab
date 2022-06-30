export class AuthModel {
  readonly token: string
  readonly refreshToken: string
  readonly expiresAt: Date

  constructor(
    token: string,
    refreshToken: string,
    expiresAt: Date
  ) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.expiresAt = expiresAt
  }
}

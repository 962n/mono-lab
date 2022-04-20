export interface AuthRepository {
  singUp(
    params: {
      email: string,
      password: string
    },
  ): Promise<AuthModel>

  signIn(
    params: {
      email: string,
      password: string
    },
  ): Promise<AuthModel>

  configureToken(
    params: { token: string }
  ): Promise<void>
}

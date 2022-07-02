import {AuthModel} from "~/core/domain/model/auth";

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
    params: AuthModel
  ): Promise<void>

  signOut(): Promise<void>
}

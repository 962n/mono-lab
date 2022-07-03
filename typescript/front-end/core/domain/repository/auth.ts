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

  signOut(): Promise<void>

  configureAuth(
    params: AuthModel
  ): Promise<void>

  disposeAuth(): Promise<void>

}

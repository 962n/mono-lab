import {AuthRepository} from "~/core/domain/repository/auth";
import {AuthModel} from "~/core/domain/model/auth";

class AuthRepositoryImpl implements AuthRepository {

  configureToken(params: { token: string }): Promise<void> {
    return Promise.resolve();
  }

  signIn(params: { email: string; password: string }): Promise<AuthModel> {
    return Promise.resolve(this.dummyAuthModel());
  }

  singUp(params: { email: string; password: string }): Promise<AuthModel> {
    return Promise.resolve(this.dummyAuthModel());
  }

  private dummyAuthModel(): AuthModel {
    return new AuthModel("dummy_token", "dummy_refresh_token")
  }

}

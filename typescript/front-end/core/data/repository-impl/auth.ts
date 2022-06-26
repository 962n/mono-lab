import {AuthRepository} from "~/core/domain/repository/auth";
import {AuthModel} from "~/core/domain/model/auth";

export class AuthRepositoryImpl implements AuthRepository {

  configureToken(params: { token: string }): Promise<void> {
    return Promise.resolve();
  }

  signIn(params: { email: string; password: string }): Promise<AuthModel> {
    return Promise.resolve(this.dummyAuthModel());
  }

  singUp(params: { email: string; password: string }): Promise<AuthModel> {
    return timeout(3000).then(() => this.dummyAuthModel())
//    return Promise.resolve(this.dummyAuthModel());
  }

  private dummyAuthModel(): AuthModel {
    return new AuthModel("dummy_token", "dummy_refresh_token")
  }

}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

import {AuthRepository} from "~/core/domain/repository/auth";
import {AuthModel} from "~/core/domain/model/auth";

export class AuthRepositoryImpl implements AuthRepository {


  configureToken(model: AuthModel): Promise<void> {
    return Promise.resolve();
  }

  signIn(params: { email: string; password: string }): Promise<AuthModel> {
    return Promise.resolve(this.dummyAuthModel());
  }

  singUp(params: { email: string; password: string }): Promise<AuthModel> {
    return timeout(3000).then(() => this.dummyAuthModel())
  }

  private dummyAuthModel(): AuthModel {
    return new AuthModel("dummy_token", "dummy_refresh_token", new Date())
  }

}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

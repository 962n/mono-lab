import {AuthRepository} from "~/core/domain/repository/auth";
import {AuthModel} from "~/core/domain/model/auth";
import DomainAuthStore from '~/store/domain/auth'
import {AppCookieDataStore} from "~/core/data/datastore/cookie";

export class AuthRepositoryImpl implements AuthRepository {
  readonly authStore: DomainAuthStore
  readonly cookieStore: AppCookieDataStore

  constructor(
    authStore: DomainAuthStore,
    cookieStore: AppCookieDataStore,
  ) {
    this.authStore = authStore
    this.cookieStore = cookieStore
  }

  async configureAuth(model: AuthModel): Promise<void> {
    await this.cookieStore.putAuth(model)
    this.authStore.configureAuthModel(model)
  }

  signIn(params: { email: string; password: string }): Promise<AuthModel> {
    return timeout(2000).then(() => this.dummyAuthModel())
  }

  singUp(params: { email: string; password: string }): Promise<AuthModel> {
    return timeout(2000).then(() => this.dummyAuthModel())
  }

  disposeAuth(): Promise<void> {
    return Promise.resolve()
      .then(() => this.authStore.disposeAuthModel());
  }


  signOut(): Promise<void> {
    return timeout(2000)
      .then(() => this.cookieStore.deleteAuth())
  }

  private dummyAuthModel(): AuthModel {
    return new AuthModel("dummy_token", "dummy_refresh_token", new Date())
  }

}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

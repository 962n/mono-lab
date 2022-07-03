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


  signIn(params: { email: string; password: string }): Promise<AuthModel> {
    return timeout(2000).then(() => this.dummyAuthModel())
  }

  singUp(params: { email: string; password: string }): Promise<AuthModel> {
    return timeout(2000).then(() => this.dummyAuthModel())
  }

  signOut(): Promise<void> {
    return timeout(2000)
      .then(() => this.cookieStore.deleteAuth())
  }

  async configureAuth(model: AuthModel): Promise<void> {
    await this.cookieStore.putAuth(model)
    this.authStore.configureAuthModel(model)
  }

  fetchAuthFromSession(): Promise<AuthModel | null> {
    return this.cookieStore.getAuth()
  }

  disposeAuth(): Promise<void> {
    return Promise.resolve()
      .then(() => this.authStore.disposeAuthModel());
  }

  private dummyAuthModel(): AuthModel {
    return new AuthModel("dummy_token", "dummy_refresh_token", new Date())
  }

}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

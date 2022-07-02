import UniversalCookie from "universal-cookie";
import {AuthModel} from "~/core/domain/model/auth";

export class CookieDataStore {
  private readonly cookie: UniversalCookie

  constructor(cookie: UniversalCookie) {
    this.cookie = cookie
  }

  put<T>(key: string, obj: T): Promise<void> {
    this.cookie.set(key, obj)
    return Promise.resolve();
  }

  get<T>(key: string): Promise<T | null> {
    return this.cookie.get(key);
  }

  deleteAll(): Promise<void> {
    // TODO do not working
    const cookies = this.cookie.getAll<Map<string, any>>()
    console.log(cookies)
    for (const [key, value] of cookies) {
      this.cookie.remove(key)
    }
    return Promise.resolve();
  }

  delete(key: string): Promise<void> {
    this.cookie.remove(key)
    return Promise.resolve();
  }
}

export interface AppCookieDataStore {
  putAuth(model: AuthModel): Promise<void>

  getAuth(): Promise<AuthModel | null>

  deleteAuth(): Promise<void>

  deleteAll(): Promise<void>
}

export class AppCookieDataStoreImpl implements AppCookieDataStore {
  static KEY_AUTH = "session-v1"

  readonly store: CookieDataStore

  constructor(store: CookieDataStore) {
    this.store = store
  }

  getAuth(): Promise<AuthModel | null> {
    return this.store.get(AppCookieDataStoreImpl.KEY_AUTH);
  }

  putAuth(model: AuthModel): Promise<void> {
    return this.store.put(AppCookieDataStoreImpl.KEY_AUTH, model)
  }

  deleteAuth(): Promise<void> {
    return this.store.delete(AppCookieDataStoreImpl.KEY_AUTH)
  }

  deleteAll(): Promise<void> {
    return this.store.deleteAll()
  }


}

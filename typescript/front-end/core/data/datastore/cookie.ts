export class CookieDataStore {
  putTest() {
//    this.$cookies.put("dsaa","hgoehgoe")
  }
  put<T>(key: string, obj: T): Promise<void> {
    return Promise.resolve();
  }

  get<T>(key: string): Promise<T | null> {
    return Promise.resolve(null);
  }

  deleteAll(): Promise<void> {
    return Promise.resolve();
  }

  delete(key: string): Promise<void> {
    return Promise.resolve();
  }
}

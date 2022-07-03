import {Store} from 'vuex'
import {Context} from '@nuxt/types'
import {AppCookieDataStoreImpl, CookieDataStore} from "~/core/data/datastore/cookie";
import UniversalCookie from "universal-cookie";
import {initializeStores, domainAuthStore} from '~/utils/store-accessor'
import {ServerInitUseCase, ServerInitUseCaseImpl} from "~/core/domain/usecase/server-init";
import {AuthRepositoryImpl} from "~/core/data/repository-impl/auth";

const initializer = (store: Store<any>) => initializeStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  async nuxtServerInit(_: any, context: Context): Promise<void> {
    const useCase = createServerInitUseCase(context)
    await useCase.exec()
  },
}

function createServerInitUseCase(context: Context): ServerInitUseCase {
  const cookie = new UniversalCookie(context.req.headers.cookie)
  const cookieStore = new AppCookieDataStoreImpl(new CookieDataStore(cookie))
  const authRepo = new AuthRepositoryImpl(domainAuthStore, cookieStore)
  return new ServerInitUseCaseImpl(authRepo)
}

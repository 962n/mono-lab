import {Store} from 'vuex'
import {Context} from '@nuxt/types'
import {AppCookieDataStoreImpl, CookieDataStore} from "~/core/data/datastore/cookie";
import UniversalCookie from "universal-cookie";
import {initializeStores, domainAuthStore} from '~/utils/store-accessor'

const initializer = (store: Store<any>) => initializeStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  async nuxtServerInit(_: any, context: Context): Promise<void> {
    const cookie = new UniversalCookie(context.req.headers.cookie)
    const cookieStore = new AppCookieDataStoreImpl(new CookieDataStore(cookie))
    const auth = await cookieStore.getAuth()
    if (auth) {
      domainAuthStore.configureAuthModel(auth)
    }
  },
}

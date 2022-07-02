import {Store} from 'vuex'
import DomainAuthModule from '~/store/domain/auth'
import {getModule} from 'vuex-module-decorators'
import {Context} from '@nuxt/types'
import {AppCookieDataStoreImpl, CookieDataStore} from "~/core/data/datastore/cookie";
import UniversalCookie from "universal-cookie";

let domainAuthStore: DomainAuthModule

function initialiseStores(store: Store<any>): void {
  console.log("initialiseStores")
  domainAuthStore = getModule(DomainAuthModule, store)
}

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export {domainAuthStore,}

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

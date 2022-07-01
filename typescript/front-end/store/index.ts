import {Store} from 'vuex'
import DomainAuthModule from '~/store/domain/auth'
import {getModule} from 'vuex-module-decorators'

let domainAuthStore: DomainAuthModule

function initialiseStores(store: Store<any>): void {
  domainAuthStore = getModule(DomainAuthModule, store)
}

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export {domainAuthStore,}

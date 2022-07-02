import DomainAuthModule from "~/store/domain/auth";
import {Store} from "vuex";
import {getModule} from "vuex-module-decorators";

let domainAuthStore: DomainAuthModule

export function initializeStores(store: Store<any>): void {
  domainAuthStore = getModule(DomainAuthModule, store)
}

export {domainAuthStore,}

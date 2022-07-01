import {Module, VuexModule} from 'vuex-module-decorators'
import {AuthModel} from "~/core/domain/model/auth";

@Module({
  name: "domain/auth",
  stateFactory: true,
  namespaced: true
})
export default class DomainAuthModule extends VuexModule {
  authModel: AuthModel | null = null
}

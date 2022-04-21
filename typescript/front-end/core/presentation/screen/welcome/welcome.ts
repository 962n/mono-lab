import VueRouter from "vue-router";
import {accessorType} from "~/store";
import {SetupContext} from "@vue/composition-api";

export class WelcomePresenterFactory {
  private readonly router: VueRouter
  private readonly accessor: typeof accessorType

  constructor(context: SetupContext) {
    this.router = context.root.$router;
    this.accessor = context.root.$accessor;
  }

  create(): WelcomePresenter {
    return new WelcomePresenterImpl(
      this.router,
      this.accessor
    )
  }
}

export class WelcomeUiModel {

}

export interface WelcomePresenter {
  uiModel(): WelcomeUiModel

  toSingUp(): void

  toSingIn(): void
}

class WelcomePresenterImpl implements WelcomePresenter {
  private readonly router: VueRouter
  private readonly accessor: typeof accessorType

  constructor(
    router: VueRouter,
    accessor: typeof accessorType
  ) {
    this.router = router;
    this.accessor = accessor;
  }

  toSingIn() {
    this.router.push("/signin").then()
  }

  toSingUp() {
    this.router.push("/signup").then()
  }

  uiModel(): WelcomeUiModel {
    return new WelcomeUiModel();
  }
}

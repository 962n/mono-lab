import VueRouter from "vue-router";
import {SetupContext} from "@vue/composition-api";

export class WelcomePresenterFactory {
  private readonly router: VueRouter

  constructor(context: SetupContext) {
    this.router = context.root.$router;
  }

  create(): WelcomePresenter {
    return new WelcomePresenterImpl(
      this.router,
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

  constructor(
    router: VueRouter,
  ) {
    this.router = router;
  }

  toSingIn() {
    this.router.push("/signin")
  }

  toSingUp() {
    this.router.push("/signup")
  }

  uiModel(): WelcomeUiModel {
    return new WelcomeUiModel();
  }
}

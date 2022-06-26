import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";
import VueRouter from "vue-router";

export class SingUpPresenterFactory implements PresenterFactory<SingUpPresenter> {

  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): SingUpPresenter {
    return new SingUpPresenterImpl(this.context.root.$router);
  }
}

export type SignUpUiModel = {
  email: string
  emailVariant: string
  emailFeedback: string
  password: string
  passwordVariant: string
  passwordFeedback: string
  buttonEnabled: boolean
}

export type SignUpEvent = {
  type: SignUpEventType
  message: string
}

export enum SignUpEventType {
  AuthComplete = "AuthComplete",
  AuthFailed = "AuthFailed",
}

export interface SingUpPresenter {
  event(callback: (event: SignUpEvent) => void): void

  uiModel(): SignUpUiModel

  validateEmail(): void

  validatePassword(): void

  authenticate(): void

  toNextPage(): void
}

class SingUpPresenterImpl implements SingUpPresenter {
  private readonly router: VueRouter
  readonly _uiModel: SignUpUiModel
  private _callback?: (event: SignUpEvent) => void

  constructor(router: VueRouter) {
    this.router = router
    this._uiModel = {
      email: "",
      emailVariant: "",
      emailFeedback: "",
      password: "",
      passwordVariant: "",
      passwordFeedback: "",
      buttonEnabled: false
    }
  }

  event(callback: (event: SignUpEvent) => void): void {
    this._callback = callback
  }


  uiModel(): SignUpUiModel {
    return this._uiModel
  }

  validateEmail(): void {
    this._uiModel.emailVariant = "danger"
    this.updateButtonDisabled()
  }

  validatePassword(): void {
    this._uiModel.passwordVariant = "success"
    this._uiModel.emailVariant = "success"
    this.updateButtonDisabled()
  }

  authenticate(): void {
    this.handleEvent({
      type: SignUpEventType.AuthComplete,
      message: "success sign up"
    })
  }

  toNextPage(): void {
    this.router.push("/words").then()
  }

  updateButtonDisabled(): void {
    const success = "success"
    this._uiModel.buttonEnabled =
      this._uiModel.emailVariant == success &&
      this._uiModel.passwordVariant == success
  }

  handleEvent(event: SignUpEvent): void {
    const callback = this._callback
    if (callback) {
      callback(event);
    }
  }


}

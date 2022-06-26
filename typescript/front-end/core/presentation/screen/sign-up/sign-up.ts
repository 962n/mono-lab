import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";
import VueRouter from "vue-router";
import EmailValidator from 'email-validator';
import PasswordValidator from 'password-validator'

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
  isLoading: boolean
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
      buttonEnabled: false,
      isLoading: false
    }
  }

  event(callback: (event: SignUpEvent) => void): void {
    this._callback = callback
  }


  uiModel(): SignUpUiModel {
    return this._uiModel
  }

  validateEmail(): void {
    const isValid = EmailValidator.validate(this._uiModel.email)
    this._uiModel.emailVariant = isValid ? "success" : "danger"
    this._uiModel.emailFeedback = isValid ? "" : "it's not email format"
    this.updateButtonDisabled()
  }

  validatePassword(): void {
    const isValid = new PasswordValidator().is().min(8)
      .is().max(100)
      .has().uppercase()
      .has().lowercase()
      .has().digits(1)
      .has().not().spaces()
      .validate(this._uiModel.password, {list: false, details: false})

    this._uiModel.passwordVariant = isValid ? "success" : "danger"
    this._uiModel.passwordFeedback = isValid ? "" : "Password must contains upper , lower , digit and not space "
    this.updateButtonDisabled()
  }

  authenticate(): void {

    this._uiModel.isLoading = true
    timeout(3000).finally(() => {
      this._uiModel.isLoading = false
      console.log("authenticate")
      this.handleEvent({
        type: SignUpEventType.AuthFailed,
        message: "success sign up"
      })
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

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

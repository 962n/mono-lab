import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";
import VueRouter from "vue-router";
import {AuthRepositoryImpl} from "~/core/data/repository-impl/auth";
import {SignUpUseCase, SignUpUseCaseImpl} from "~/core/domain/usecase/auth/sign-up";
import {validateEmail, validatePassword} from "~/core/domain/util/validater";


export interface SingUpPresenter {
  event(callback: (event: SignUpEvent) => void): void

  uiModel(): SignUpUiModel

  validateEmail(): void

  validatePassword(): void

  authenticate(): void

  toNextPage(): void
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

export class SingUpPresenterFactory implements PresenterFactory<SingUpPresenter> {

  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): SingUpPresenter {
    const authRepo = new AuthRepositoryImpl()
    const signUpUseCase = new SignUpUseCaseImpl(authRepo)
    return new SingUpPresenterImpl(this.context.root.$router, signUpUseCase);
  }
}

class SingUpPresenterImpl implements SingUpPresenter {
  private readonly router: VueRouter
  readonly _uiModel: SignUpUiModel
  private _callback?: (event: SignUpEvent) => void
  readonly signUpUseCase: SignUpUseCase

  constructor(router: VueRouter, signUpUseCase: SignUpUseCase) {
    this.router = router
    this.signUpUseCase = signUpUseCase
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
    const isValid = validateEmail(this._uiModel.email)
    this._uiModel.emailVariant = isValid ? "success" : "danger"
    this._uiModel.emailFeedback = isValid ? "" : "it's not email format"
    this.updateButtonDisabled()
  }

  validatePassword(): void {
    const isValid = validatePassword(this._uiModel.password)
    this._uiModel.passwordVariant = isValid ? "success" : "danger"
    this._uiModel.passwordFeedback = isValid ? "" : "Password must contains upper, lower and digit."
    this.updateButtonDisabled()
  }

  authenticate(): void {
    const params = {
      email: this._uiModel.email,
      password: this._uiModel.password,
    }
    this._uiModel.isLoading = true
    this.signUpUseCase.exec(params).then(() => {
      const successEvent = {type: SignUpEventType.AuthComplete, message: "sign up success"}
      this.handleEvent(successEvent)
    }).catch(() => {
      const failureEvent = {type: SignUpEventType.AuthFailed, message: "sign up failed"}
      this.handleEvent(failureEvent)
    }).finally(() => {
      this._uiModel.isLoading = false
    })
  }

  toNextPage(): void {
    this.router.push("/words").then()
  }

  private updateButtonDisabled(): void {
    const success = "success"
    const isValidEmail = this._uiModel.emailVariant == success
    const isValidPassword = this._uiModel.passwordVariant == success
    this._uiModel.buttonEnabled = isValidEmail && isValidPassword
  }

  private handleEvent(event: SignUpEvent): void {
    const callback = this._callback
    if (callback) {
      callback(event)
    }
  }
}

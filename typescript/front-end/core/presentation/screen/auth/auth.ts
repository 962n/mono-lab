import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";
import VueRouter from "vue-router";
import {AuthRepositoryImpl} from "~/core/data/repository-impl/auth";
import {SignUpUseCase, SignUpUseCaseImpl} from "~/core/domain/usecase/auth/sign-up";
import {validateEmail, validatePassword} from "~/core/domain/util/validater";
import {SignInUseCase} from "~/core/domain/usecase/auth/sing-in";


export interface AuthPresenter {
  event(callback: (event: AuthEvent) => void): void

  uiModel(): AuthUiModel

  validateEmail(): void

  validatePassword(): void

  authenticate(): void

  toNextPageAfterAuth(): void
}

export type AuthUiModel = {
  title1: string
  title2: string
  email: string
  emailVariant: string
  emailFeedback: string
  password: string
  passwordVariant: string
  passwordFeedback: string
  buttonEnabled: boolean
  buttonTitle: string
  isLoading: boolean
}

export type AuthEvent = {
  type: AuthEventType
  message: string
}

export enum AuthEventType {
  AuthComplete = "AuthComplete",
  AuthFailed = "AuthFailed",
}

export class SingUpPresenterFactory implements PresenterFactory<AuthPresenter> {

  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): AuthPresenter {
    const authRepo = new AuthRepositoryImpl()
    const signUpUseCase = new SignUpUseCaseImpl(authRepo)
    return new SingUpPresenterImpl(this.context.root.$router, signUpUseCase);
  }
}

class SingUpPresenterImpl implements AuthPresenter {
  private readonly router: VueRouter
  readonly _uiModel: AuthUiModel
  private _callback?: (event: AuthEvent) => void
  readonly signUpUseCase: SignUpUseCase

  constructor(router: VueRouter, signUpUseCase: SignUpUseCase) {
    this.router = router
    this.signUpUseCase = signUpUseCase
    this._uiModel = {
      title1: "Welcome to Ankiiiii.",
      title2: "Please sign up.",
      email: "",
      emailVariant: "",
      emailFeedback: "",
      password: "",
      passwordVariant: "",
      passwordFeedback: "",
      buttonEnabled: false,
      buttonTitle:"Sign up",
      isLoading: false
    }
  }

  event(callback: (event: AuthEvent) => void): void {
    this._callback = callback
  }


  uiModel(): AuthUiModel {
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
      const successEvent = {type: AuthEventType.AuthComplete, message: "sign up success"}
      this.handleEvent(successEvent)
    }).catch(() => {
      const failureEvent = {type: AuthEventType.AuthFailed, message: "sign up failed"}
      this.handleEvent(failureEvent)
    }).finally(() => {
      this._uiModel.isLoading = false
    })
  }

  toNextPageAfterAuth(): void {
    this.router.push("/words").then()
  }

  private updateButtonDisabled(): void {
    const success = "success"
    const isValidEmail = this._uiModel.emailVariant == success
    const isValidPassword = this._uiModel.passwordVariant == success
    this._uiModel.buttonEnabled = isValidEmail && isValidPassword
  }

  private handleEvent(event: AuthEvent): void {
    const callback = this._callback
    if (callback) {
      callback(event)
    }
  }
}


export class SingInPresenterFactory implements PresenterFactory<AuthPresenter> {

  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): AuthPresenter {
    const authRepo = new AuthRepositoryImpl()
    const signUpUseCase = new SignUpUseCaseImpl(authRepo)
    return new SingInPresenterImpl(this.context.root.$router, signUpUseCase);
  }
}

class SingInPresenterImpl implements AuthPresenter {
  private readonly router: VueRouter
  readonly _uiModel: AuthUiModel
  private _callback?: (event: AuthEvent) => void
  readonly signInUseCase: SignInUseCase

  constructor(router: VueRouter, signInUseCase: SignInUseCase) {
    this.router = router
    this.signInUseCase = signInUseCase
    this._uiModel = {
      title1: "Let's enjoy increasing vocab!!",
      title2: "Please sign in.",
      email: "",
      emailVariant: "",
      emailFeedback: "",
      password: "",
      passwordVariant: "",
      passwordFeedback: "",
      buttonEnabled: false,
      buttonTitle:"Sign in",
      isLoading: false
    }
  }

  event(callback: (event: AuthEvent) => void): void {
    this._callback = callback
  }


  uiModel(): AuthUiModel {
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
    this.signInUseCase.exec(params).then(() => {
      const successEvent = {type: AuthEventType.AuthComplete, message: "sign in success"}
      this.handleEvent(successEvent)
    }).catch(() => {
      const failureEvent = {type: AuthEventType.AuthFailed, message: "sign in failed"}
      this.handleEvent(failureEvent)
    }).finally(() => {
      this._uiModel.isLoading = false
    })
  }

  toNextPageAfterAuth(): void {
    this.router.push("/words").then()
  }

  private updateButtonDisabled(): void {
    const success = "success"
    const isValidEmail = this._uiModel.emailVariant == success
    const isValidPassword = this._uiModel.passwordVariant == success
    this._uiModel.buttonEnabled = isValidEmail && isValidPassword
  }

  private handleEvent(event: AuthEvent): void {
    const callback = this._callback
    if (callback) {
      callback(event)
    }
  }
}

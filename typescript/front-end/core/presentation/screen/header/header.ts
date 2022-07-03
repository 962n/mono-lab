import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";
import {SignOutUseCase, SignOutUseCaseImpl} from "~/core/domain/usecase/auth/sign-out";
import VueRouter from "vue-router";
import {AppCookieDataStoreImpl, CookieDataStore} from "~/core/data/datastore/cookie";
import UniversalCookie from "universal-cookie";
import {AuthRepositoryImpl} from "~/core/data/repository-impl/auth";
import {domainAuthStore} from "~/utils/store-accessor";

export interface HeaderPresenter {
  event(callback: (event: HeaderEvent) => void): void

  uiModel(): HeaderUiModel

  toWords(): void

  toSwipe(): void

  toTop(): void

  signOut(): void

}

export type HeaderUiModel = {
  isLoading: boolean
}

export type HeaderEvent = {
  type: HeaderEventType
  message: string
}

export enum HeaderEventType {
  SignOutComplete = "SignOutComplete",
  SignOutFailed = "SignOutFailed",
}

export class HeaderPresenterFactory implements PresenterFactory<HeaderPresenter> {
  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context
  }

  create(): HeaderPresenter {
    const cookieStore = new AppCookieDataStoreImpl(new CookieDataStore(new UniversalCookie()))
    const authRepo = new AuthRepositoryImpl(domainAuthStore, cookieStore)
    const signOutUseCase = new SignOutUseCaseImpl(authRepo)
    return new HeaderPresenterImpl(this.context.root.$router, signOutUseCase);
  }
}


export class HeaderPresenterImpl implements HeaderPresenter {

  readonly router: VueRouter
  private _uiModel: HeaderUiModel
  readonly signOutUseCase: SignOutUseCase
  private _callback?: (event: HeaderEvent) => void

  constructor(router: VueRouter, signOutUseCase: SignOutUseCase) {
    this.router = router
    this.signOutUseCase = signOutUseCase
    this._uiModel = {
      isLoading: false,
    }
  }

  event(callback: (event: HeaderEvent) => void): void {
    this._callback = callback
  }

  uiModel(): HeaderUiModel {
    return this._uiModel
  }


  toSwipe(): void {
    this.router.push("/ankiswipe")
  }

  toWords(): void {
    this.router.push("/words")
  }

  toTop(): void {
    this.router.replace("/")
  }

  signOut(): void {
    this._uiModel.isLoading = true
    this.signOutUseCase.exec().then(() => {
      this.handleEvent({type: HeaderEventType.SignOutComplete, message: ""})
    }).catch((e: Error) => {
      console.log(e)
      this.handleEvent({type: HeaderEventType.SignOutFailed, message: e.message})
    }).finally(() => {
      this._uiModel.isLoading = false
    })
  }

  private handleEvent(event: HeaderEvent): void {
    const callback = this._callback
    if (callback) {
      callback(event)
    }
  }

}

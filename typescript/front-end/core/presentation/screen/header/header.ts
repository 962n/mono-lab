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

  toWords(): void

  toSwipe(): void

  toTop(): void

  logout(): void

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
  readonly signOutUseCase: SignOutUseCase
  private _callback?: (event: HeaderEvent) => void

  constructor(router: VueRouter, signOutUseCase: SignOutUseCase) {
    this.router = router
    this.signOutUseCase = signOutUseCase
  }

  event(callback: (event: HeaderEvent) => void): void {
    this._callback = callback
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


  logout(): void {
    this.signOutUseCase.exec().then(() => {
      console.log("SignOutComplete")
      this.handleEvent({type: HeaderEventType.SignOutComplete, message: ""})
    }).catch((e: Error) => {
      console.log("SignOutFailed")
      console.log(e)
      this.handleEvent({type: HeaderEventType.SignOutFailed, message: e.message})
    })
  }

  private handleEvent(event: HeaderEvent): void {
    const callback = this._callback
    if (callback) {
      callback(event)
    }
  }

}

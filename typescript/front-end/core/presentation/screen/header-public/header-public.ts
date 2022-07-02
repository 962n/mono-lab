import {PresenterFactory} from "~/core/presentation/screen/factory";
import {SetupContext} from "@vue/composition-api";
import VueRouter from "vue-router";

export interface HeaderPublicPresenter {
  event(callback: (event: HeaderPublicEvent) => void): void
  uiModel(): HeaderPublicUiModel
  toSignUp() : void
  toSignIn() : void
}

export type HeaderPublicUiModel = {}


export type HeaderPublicEvent = {
  type: HeaderPublicEventType
  message: string
}

export enum HeaderPublicEventType {
}

export class HeaderPublicPresenterFactory implements PresenterFactory<HeaderPublicPresenter> {

  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): HeaderPublicPresenter {
    return new HeaderPublicPresenterImpl(this.context.root.$router);
  }
}

class HeaderPublicPresenterImpl implements HeaderPublicPresenter {
  private readonly router: VueRouter
  readonly _uiModel: HeaderPublicUiModel
  private _callback?: (event: HeaderPublicEvent) => void

  constructor(router: VueRouter) {
    this.router = router
    this._uiModel = {}
  }

  event(callback: (event: HeaderPublicEvent) => void): void {
    this._callback = callback
  }

  uiModel(): HeaderPublicUiModel {
    return this._uiModel;
  }

  toSignIn(): void {
    this.router.push("/signin")
  }

  toSignUp(): void {
    this.router.push("/signup")
  }



  private handleEvent(event: HeaderPublicEvent) {
    const callback = this._callback
    if (callback) {
      callback(event)
    }
  }

}

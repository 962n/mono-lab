import {PresenterFactory} from "~/core/presentation/screen/factory";
import {SetupContext} from "@vue/composition-api";
import VueRouter from "vue-router";

export interface WordEditPresenter {
  event(callback: (event: WordEditEvent) => void): void

  uiModel(): WordEditUiModel
}

export type WordEditUiModel = {}


export type WordEditEvent = {
  type: WordEditEventType
  message: string
}

export enum WordEditEventType {
}

export class WordEditPresenterFactory implements PresenterFactory<WordEditPresenter> {

  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): WordEditPresenter {
    return new WordEditPresenterImpl(this.context.root.$router);
  }
}

class WordEditPresenterImpl implements WordEditPresenter {
  private readonly router: VueRouter
  readonly _uiModel: WordEditUiModel
  private _callback?: (event: WordEditEvent) => void

  constructor(router: VueRouter) {
    this.router = router
    this._uiModel = {}
  }

  event(callback: (event: WordEditEvent) => void): void {
    this._callback = callback
  }

  uiModel(): WordEditUiModel {
    return this._uiModel;
  }

  private handleEvent(event: WordEditEvent) {
    const callback = this._callback
    if (callback) {
      callback(event)
    }
  }

}

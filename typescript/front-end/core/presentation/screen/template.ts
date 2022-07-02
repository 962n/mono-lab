import {PresenterFactory} from "~/core/presentation/screen/factory";
import {SetupContext} from "@vue/composition-api";
import VueRouter from "vue-router";

export interface TemplatePresenter {
  event(callback: (event: TemplateEvent) => void): void

  uiModel(): TemplateUiModel
}

export type TemplateUiModel = {}


export type TemplateEvent = {
  type: TemplateEventType
  message: string
}

export enum TemplateEventType {
}

export class TemplatePresenterFactory implements PresenterFactory<TemplatePresenter> {

  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): TemplatePresenter {
    return new TemplatePresenterImpl(this.context.root.$router);
  }
}

class TemplatePresenterImpl implements TemplatePresenter {
  private readonly router: VueRouter
  readonly _uiModel: TemplateUiModel
  private _callback?: (event: TemplateEvent) => void

  constructor(router: VueRouter) {
    this.router = router
    this._uiModel = {}
  }

  event(callback: (event: TemplateEvent) => void): void {
    this._callback = callback
  }

  uiModel(): TemplateUiModel {
    return this._uiModel;
  }

  private handleEvent(event: TemplateEvent) {
    const callback = this._callback
    if (callback) {
      callback(event)
    }
  }

}

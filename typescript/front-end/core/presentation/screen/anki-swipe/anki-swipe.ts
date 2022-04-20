import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";

export class AnkiSwipePresenterFactory implements PresenterFactory<AnkiSwipePresenter> {

  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): AnkiSwipePresenter {
    return new AnkiSwipePresenterImpl();
  }
}

export interface AnkiSwipePresenter {

}

class AnkiSwipePresenterImpl implements AnkiSwipePresenter {

}

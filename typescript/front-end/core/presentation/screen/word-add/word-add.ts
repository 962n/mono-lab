import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";

export class WordAddPresenterFactory implements PresenterFactory<WordAddPresenter> {
  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): WordAddPresenter {
    return new WordAddPresenterImpl();
  }
}

export interface WordAddPresenter {

}

class WordAddPresenterImpl implements WordAddPresenter {

}

import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";

export class WordListPresenterFactory implements PresenterFactory<WordListPresenter> {
  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): WordListPresenter {
    return new WordListPresenterImpl();
  }
}

export interface WordListPresenter {

}

class WordListPresenterImpl implements WordListPresenter {

}

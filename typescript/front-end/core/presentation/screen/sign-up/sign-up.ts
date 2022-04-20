import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";

export class SingUpPresenterFactory implements PresenterFactory<SingUpPresenter> {

  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): SingUpPresenter {
    return new SingUpPresenterImpl();
  }
}

export interface SingUpPresenter {

}

class SingUpPresenterImpl implements SingUpPresenter {

}

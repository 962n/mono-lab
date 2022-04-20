import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";

export class SingInPresenterFactory implements PresenterFactory<SingInPresenter> {

  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): SingInPresenter {
    return new SingInPresenterImpl();
  }
}

export interface SingInPresenter {

}

class SingInPresenterImpl implements SingInPresenter {

}

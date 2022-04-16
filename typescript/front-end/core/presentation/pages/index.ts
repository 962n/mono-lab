import {UserListUseCase} from "~/core/domain/usecase/user";


export interface IndexPresenter {
  fetchUserList() : void
}


class IndexPresenterImpl implements IndexPresenter {
  private readonly userListUseCase: UserListUseCase

  constructor(userListUseCase: UserListUseCase) {
    this.userListUseCase = userListUseCase;
  }

  fetchUserList() {
  }
}

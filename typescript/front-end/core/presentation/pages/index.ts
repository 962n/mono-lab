import {UserListUseCase, UserListUseCaseImpl} from "~/core/domain/usecase/user";
import {UserListRepositoryImpl} from "~/core/data/repository-impl/user";
import {ref, Ref, watch} from "@vue/composition-api";
import {UserListModel} from "~/core/domain/model/user";
import {accessorType} from "~/store";

export class IndexUiModel {
  hoge: string
  fuga: number
  users: UserListModel[]

  constructor() {
    this.hoge = "hogehoge";
    this.fuga = 1;
    this.users = []
  }
}

export interface IndexPresenter {
  uiModel(): Ref<IndexUiModel>

  event(callback: () => void): void

  fetchUserList(): void

  increment(): void
}


export function NewIndexPresenter(store: typeof accessorType): IndexPresenter {
  const userListRepository = new UserListRepositoryImpl()
  const userListUseCase = new UserListUseCaseImpl(userListRepository)
  return new IndexPresenterImpl(userListUseCase)
}

class IndexPresenterImpl implements IndexPresenter {
  private readonly userListUseCase: UserListUseCase
  private readonly _uiModel: Ref<IndexUiModel>
  private readonly _event: Ref<number>

  constructor(userListUseCase: UserListUseCase) {
    this.userListUseCase = userListUseCase;
    this._uiModel = ref<IndexUiModel>(new IndexUiModel())
    this._event = ref<number>(1)
  }

  uiModel(): Ref<IndexUiModel> {
    return this._uiModel;
  }

  event(callback: () => void): void {
    watch(this._event, (newVal, oldVal) => {
      console.log("watch")
      callback()
    })
  }

  fetchUserList() {
    this.userListUseCase
      .fetch()
      .then((users) => {
        console.log("fetchUserList success")
        this._uiModel.value.users = users
      })
      .catch((error) => {
        console.log("fetchUserList error")
        let value = this._event.value
        value++;
        this._event.value = value
      })
  }

  increment(): void {
    this._uiModel.value.fuga++

    console.log("hogehoge")
  }

}

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

export class IndexPresenterFactory {
  private readonly store: typeof accessorType

  constructor(store: typeof accessorType) {
    this.store = store;
  }
  create(): IndexPresenter {
    const userListRepository = new UserListRepositoryImpl()
    const userListUseCase = new UserListUseCaseImpl(userListRepository)
    return new IndexPresenterImpl(this.store, userListUseCase)
  }
}

export interface IndexPresenter {
  uiModel(): Ref<IndexUiModel>

  event(callback: () => void): void

  fetchUserList(): void

  increment(): void
}

class IndexPresenterImpl implements IndexPresenter {
  private readonly userListUseCase: UserListUseCase
  private readonly _uiModel: Ref<IndexUiModel>
  private readonly _event: Ref<number>
  private readonly store: typeof accessorType

  constructor(store: typeof accessorType, userListUseCase: UserListUseCase) {
    this.store = store
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
        this._uiModel.value.users = users
      })
      .catch((error) => {
        let value = this._event.value
        value++;
        this._event.value = value
      })
  }

  increment(): void {
    this._uiModel.value.fuga++
    this.store.increment()
    console.log("hogehoge")
  }

}

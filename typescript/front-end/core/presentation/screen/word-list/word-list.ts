import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";
import {GetWordsUseCase, GetWordsUseCaseImpl} from "~/core/domain/usecase/word/get-words";
import {WordsRepositoryImpl} from "~/core/data/repository-impl/words";
import {PageModel} from "~/core/domain/model/paging";
import {WordModel} from "~/core/domain/model/word";
import {StateChanger} from "vue-infinite-loading";


export interface WordListPresenter {
  uiModel(): WordListUiModel

  refresh(): void

  fetch(state: StateChanger): void

  toDetail(item: WordListItem): void

  onClickDelete(item: WordListItem): void
}

export type WordListUiModel = {
  testTitle:string
  items: WordListItem[]
  infiniteId: number
  showAddWordModal: boolean
}

export type WordListItem = {
  title: string
}


export class WordListPresenterFactory implements PresenterFactory<WordListPresenter> {
  private context: SetupContext

  constructor(context: SetupContext) {
    this.context = context;
  }

  create(): WordListPresenter {
    const getWordsUseCase = new GetWordsUseCaseImpl(new WordsRepositoryImpl())
    return new WordListPresenterImpl(getWordsUseCase);
  }
}


class WordListPresenterImpl implements WordListPresenter {
  readonly _uiModel: WordListUiModel
  readonly getWordsUseCase: GetWordsUseCase
  lastPage: PageModel | null

  constructor(getWordsUseCase: GetWordsUseCase) {
    this.getWordsUseCase = getWordsUseCase
    this._uiModel = {
      testTitle:"",
      items: [],
      infiniteId: 0,
      showAddWordModal: false
    }
    this.lastPage = null
  }

  refresh(): void {
    console.log("refresh")
    this._uiModel.items = []
    this._uiModel.infiniteId = this._uiModel.infiniteId + 100
  }

  fetch(state: StateChanger): void {
    const after = this.lastPage?.endCursor ?? null
    this.getWordsUseCase.exec({
      folderId: "",
      first: 10,
      after: after
    }).then((value => {
      console.log(value)
      this.handleWords(value.words)
      this.lastPage = value.page
      if (value.page.hasNextPage) {
        state.loaded()
      } else {
        state.complete()
      }
    })).catch((error) => {
      state.error()
    })
  }


  toDetail(item: WordListItem): void {
  }

  onClickDelete(item: WordListItem): void {
    this._uiModel.testTitle += "a"
    this._uiModel.showAddWordModal = true
  }


  uiModel(): WordListUiModel {
    return this._uiModel
  }

  handleWords(models: WordModel[]) {
    const items = models.map((m) => {
      const item: WordListItem = {
        title: m.title
      }
      return item
    })
    this._uiModel.items.push(...items)
  }

}

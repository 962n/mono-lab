import {SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";
import {GetWordsUseCase, GetWordsUseCaseImpl} from "~/core/domain/usecase/word/get-words";
import {WordsRepositoryImpl} from "~/core/data/repository-impl/words";
import {PageModel} from "~/core/domain/model/paging";
import {WordModel} from "~/core/domain/model/word";
import {StateChanger} from "vue-infinite-loading";
import {EditWordData} from "~/components/parts/EditWordArea.vue";


export interface WordListPresenter {
  uiModel(): WordListUiModel

  refresh(): void

  fetch(state: StateChanger): void

  toDetail(item: WordListItem): void

  onClickAdd(): void

  onClickDelete(index: number, item: WordListItem): void

  addWord(word: EditWordData): void
}

export type WordListUiModel = {
  items: WordListItem[]
  infiniteId: number
  showAddWordModal: boolean
  confirmModal: {
    show: boolean
    title: string,
    content: string
    tag: object | null
  }
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
      items: [],
      infiniteId: 0,
      showAddWordModal: false,
      confirmModal: {
        show: false,
        title: "",
        content: "",
        tag: null,
      }
    }
    this.lastPage = null
  }

  uiModel(): WordListUiModel {
    return this._uiModel
  }

  refresh(): void {
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

  onClickAdd(): void {
    this._uiModel.showAddWordModal = true
  }

  onClickDelete(index: number, item: WordListItem): void {
    // this._uiModel.confirmModal.show = true
    // this._uiModel.confirmModal.title = "Delete Word"
    // this._uiModel.confirmModal.title = "Delete Word"
    this._uiModel.confirmModal = {
      show: true,
      title: "Delete Word",
      content: "Are you show??",
      tag: null,
    }
//    this._uiModel.items.splice(0, 1)
  }

  addWord(word: EditWordData): void {
    const item: WordListItem = {
      title: word.word
    }
    this._uiModel.items.splice(0, 0, item)
    this._uiModel.showAddWordModal = false
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

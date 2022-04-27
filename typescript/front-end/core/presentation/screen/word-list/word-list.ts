import {ref, Ref, SetupContext} from "@vue/composition-api";
import {PresenterFactory} from "~/core/presentation/screen/factory";
import {GetWordsUseCase, GetWordsUseCaseImpl} from "~/core/domain/usecase/word/get-words";
import {WordsRepositoryImpl} from "~/core/data/repository-impl/words";
import {PageModel} from "~/core/domain/model/paging";
import {WordModel} from "~/core/domain/model/word";


export interface WordListPresenter {
  uiModel(): WordListUiModel

  refresh(): void

  loadMore(): void

  toDetail(item: WordListItem): void
}

export type WordListUiModel = {
  items: Ref<WordListItem[]>
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
  private readonly _uiModel: WordListUiModel
  private readonly getWordsUseCase: GetWordsUseCase
  private lastPage: PageModel | null

  constructor(getWordsUseCase: GetWordsUseCase) {
    this.getWordsUseCase = getWordsUseCase
    this._uiModel = {
      items: ref([])
    }
  }

  refresh(): void {
    this.getWordsUseCase.exec({
      folderId: "",
      first: 10,
      after: null
    }).then((value => {
      this._uiModel.items.value = []
      this.handleWords(value.words)
      this.lastPage = value.page
    })).catch((error) => {

    })
  }

  loadMore(): void {
    const lastPage = this.lastPage
    if (!lastPage || !lastPage.hasNextPage) {
      return
    }
    this.getWordsUseCase.exec({
      folderId: "",
      first: 10,
      after: lastPage.endCursor
    }).then((value => {
      this.handleWords(value.words)
      this.lastPage = value.page
    })).catch((error) => {
    })
  }


  toDetail(item: WordListItem): void {
  }

  uiModel(): WordListUiModel {
    return this._uiModel;
  }

  handleWords(models: WordModel[]) {
    const items = models.map((m) => {
      return {
        title: m.title
      }
    })
    this._uiModel.items.value.push(items)
  }

}

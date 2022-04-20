import {FoldersWithPage, WordModel, WordModelW, WordsWithPage} from "~/core/domain/model/word";

export interface WordFoldersRepository {
  fetch(param: {
    first: number
    after: string | null
  }): Promise<FoldersWithPage>
}

export interface WordsRepository {
  fetch(param: {
    folderId: string
    first: number
    after: string | null
  }): Promise<WordsWithPage>
}

export interface WordRepository {
  fetch(param: { id: string }): Promise<WordModel>

  create(param: WordModelW): Promise<WordModel>

  update(param: WordModelW): Promise<WordModel>

  delete(param: { ids: string[] }): Promise<string[]>

}

import {WordsWithPage} from "~/core/domain/model/word";
import {WordsRepository} from "~/core/domain/repository/word";

export interface GetWordsUseCase {
  exec(param: {
    folderId: string
    first: number
    after: string | null
  }): Promise<WordsWithPage>
}


export class GetWordsUseCaseImpl implements GetWordsUseCase {
  private readonly wordsRepository: WordsRepository


  constructor(wordsRepository: WordsRepository) {
    this.wordsRepository = wordsRepository;
  }

  exec(param: { folderId: string; first: number; after: string | null }): Promise<WordsWithPage> {
    return this.wordsRepository.fetch(param);
  }

}

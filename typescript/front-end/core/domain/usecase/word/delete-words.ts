import {WordRepository} from "~/core/domain/repository/word";

export interface DeleteWordsUseCase {
  exec(param: { ids: string[] }): Promise<string[]>
}

class DeleteWordsUseCaseImpl implements DeleteWordsUseCase {
  private readonly wordRepo: WordRepository

  constructor(wordRepo: WordRepository) {
    this.wordRepo = wordRepo;
  }

  exec(param: { ids: string[] }): Promise<string[]> {
    return this.wordRepo.delete(param);
  }

}

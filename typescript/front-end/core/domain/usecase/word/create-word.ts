import {WordModel, WordModelW} from "~/core/domain/model/word";
import {WordRepository} from "~/core/domain/repository/word";

export interface CreateWordUseCase {
  exec(param:WordModelW) : Promise<WordModel>
}

class CreateWordUseCaseImpl implements CreateWordUseCase {

  private readonly wordRepo : WordRepository

  constructor(wordRepo: WordRepository) {
    this.wordRepo = wordRepo;
  }

  exec(param: WordModelW): Promise<WordModel> {
    return this.wordRepo.create(param);
  }

}

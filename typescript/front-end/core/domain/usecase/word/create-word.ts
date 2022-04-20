import {WordModel, WordModelW} from "~/core/domain/model/word";

export interface CreateWordUseCase {
  exec(param:WordModelW) : Promise<WordModel>
}

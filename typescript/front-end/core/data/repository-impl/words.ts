import {WordsRepository} from "~/core/domain/repository/word";
import {WordsWithPage} from "~/core/domain/model/word";
import {PageModel} from "~/core/domain/model/paging";

export class WordsRepositoryImpl implements WordsRepository {

  fetch(param: {
    folderId: string;
    first: number;
    after: string | null
  }): Promise<WordsWithPage> {
    const page = new PageModel(0, null, null, false)
    const wordWithPage = new WordsWithPage([], page)
    return Promise.resolve(wordWithPage);
  }

}

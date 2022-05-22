import {WordsRepository} from "~/core/domain/repository/word";
import {WordModel, WordsWithPage} from "~/core/domain/model/word";
import {PageModel} from "~/core/domain/model/paging";

export class WordsRepositoryImpl implements WordsRepository {
  counter: number


  constructor() {
    this.counter = 0;
  }

  fetch(param: {
    folderId: string;
    first: number;
    after: string | null
  }): Promise<WordsWithPage> {
    this.counter++
    const items = ["1", "2", "3", "4", "5"].map((value) => {
      return new WordModel(value, value, value, null, null, null)
    })
    if (this.counter % 3 === 0) {
      const page = new PageModel(15, null, null, false)
      return timeout(3000).then(() => new WordsWithPage(items, page))
    }
    const page = new PageModel(15, null, "null", true)
    return timeout(3000).then(() => new WordsWithPage(items, page))
//    return sleep(() => Promise.resolve(new WordsWithPage(items, page)))
  }

}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// async function sleep(fn, ...args) {
//   await timeout(3000);
//   return fn(...args);
// }

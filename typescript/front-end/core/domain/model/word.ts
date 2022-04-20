export class WordModelW {
  readonly folderId: string | null
  readonly title: string
  readonly meaning: string | null
  readonly memo: string | null

  constructor(folderId: string | null, title: string, meaning: string | null, memo: string | null) {
    this.folderId = folderId;
    this.title = title;
    this.meaning = meaning;
    this.memo = memo;
  }
}

export class WordModel {
  readonly id: string
  readonly folderId: string
  readonly title: string
  readonly meaning: string | null
  readonly memo: string | null

  constructor(id: string, folderId: string, title: string, meaning: string | null, memo: string | null) {
    this.id = id;
    this.folderId = folderId;
    this.title = title;
    this.meaning = meaning;
    this.memo = memo;
  }
}

export class WordsWithPage {
  readonly words: WordModel[]
  readonly page: PageModel

  constructor(words: WordModel[], page: PageModel) {
    this.words = words;
    this.page = page;
  }
}

export class FoldersWithPage {
  readonly folders: FolderModel[]
  readonly page: PageModel

  constructor(folders: FolderModel[], page: PageModel) {
    this.folders = folders;
    this.page = page;
  }

}

export class FolderModel {
  readonly id: string
  readonly title: string
  readonly isDefault: boolean

  constructor(id: string, title: string, isDefault: boolean) {
    this.id = id;
    this.title = title;
    this.isDefault = isDefault
  }
}

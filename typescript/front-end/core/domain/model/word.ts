class WordModel {
  readonly id: string
  readonly folderId: string
  readonly title: string
  readonly meaning: string
  readonly memo: string

  constructor(
    id: string,
    folderId: string,
    title: string,
    meaning: string,
    memo: string
  ) {
    this.id = id;
    this.folderId = folderId;
    this.title = title;
    this.meaning = meaning;
    this.memo = memo;
  }
}

class FolderModel {
  readonly id: string
  readonly title: string
  readonly isDefault: boolean

  constructor(id: string, title: string, isDefault: boolean) {
    this.id = id;
    this.title = title;
    this.isDefault = isDefault
  }

}

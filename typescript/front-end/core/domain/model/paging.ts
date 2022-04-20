export class PageModel {
  readonly totalCount: number
  readonly startCursor: string | null
  readonly endCursor: string | null
  readonly hasNextPage: boolean

  constructor(totalCount: number, startCursor: string | null, endCursor: string | null, hasNextPage: boolean) {
    this.totalCount = totalCount;
    this.startCursor = startCursor;
    this.endCursor = endCursor;
    this.hasNextPage = hasNextPage;
  }
}

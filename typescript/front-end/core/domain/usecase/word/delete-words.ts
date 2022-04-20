export interface DeleteWordsUseCase {
  exec(param: { ids: string[] }): Promise<string[]>
}

import {AuthRepository} from "~/core/domain/repository/auth";

export interface ServerInitUseCase {
  exec(): Promise<void>
}

export class ServerInitUseCaseImpl implements ServerInitUseCase {

  readonly authRepo: AuthRepository

  constructor(authRepo: AuthRepository) {
    this.authRepo = authRepo;
  }

  async exec(): Promise<void> {
    const auth = await this.authRepo.fetchAuthFromSession()
    if (auth) {
      await this.authRepo.configureAuth(auth)
    }
  }


}

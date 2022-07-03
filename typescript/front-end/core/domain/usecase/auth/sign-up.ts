import {AuthRepository} from "~/core/domain/repository/auth";

export interface SignUpUseCase {
  exec(param: { email: string, password: string }): Promise<void>
}

export class SignUpUseCaseImpl implements SignUpUseCase {
  private readonly authRepo: AuthRepository

  constructor(authRepo: AuthRepository) {
    this.authRepo = authRepo;
  }

  async exec(param: { email: string; password: string }): Promise<void> {
    try {
      const auth = await this.authRepo.singUp(param)
      await this.authRepo.configureAuth(auth)
    } catch (e) {
      throw e
    }
  }
}

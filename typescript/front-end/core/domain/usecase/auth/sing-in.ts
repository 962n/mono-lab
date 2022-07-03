import {AuthRepository} from "~/core/domain/repository/auth";

export interface SignInUseCase {
  exec(param: { email: string, password: string }): Promise<void>
}

class SignInUseCaseImpl implements SignInUseCase {

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

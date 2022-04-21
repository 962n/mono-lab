import {AuthRepository} from "~/core/domain/repository/auth";

export interface SignUpUseCase {
  exec(param: { email: string, password: string }): Promise<void>
}

class SignUpUseCaseImpl implements SignUpUseCase {
  private readonly authRepo: AuthRepository

  constructor(authRepo: AuthRepository) {
    this.authRepo = authRepo;
  }

  exec(param: { email: string; password: string }): Promise<void> {
    return this.authRepo.singUp(param)
      .then((authModel) => {
        return this.authRepo.configureToken({token: authModel.token})
      })
  }
}

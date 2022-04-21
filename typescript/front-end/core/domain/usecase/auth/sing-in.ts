import {AuthRepository} from "~/core/domain/repository/auth";

export interface SignInUseCase {
  exec(param: {email:string , password: string}) : Promise<void>
}

class SignInUseCaseImpl implements SignInUseCase {

  private readonly authRepo : AuthRepository

  constructor(authRepo: AuthRepository) {
    this.authRepo = authRepo;
  }

  exec(param: { email: string; password: string }): Promise<void> {
    return this.authRepo.singUp(param)
      .then((authModel) => {
        return this.authRepo.configureToken({token:authModel.token})
      })
  }

}

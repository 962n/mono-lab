import {AuthRepository} from "~/core/domain/repository/auth";

export interface SignOutUseCase {
  exec(): Promise<void>
}

export class SignOutUseCaseImpl implements SignOutUseCase {
  private readonly authRepo: AuthRepository

  constructor(authRepo: AuthRepository) {
    this.authRepo = authRepo;
  }

  async exec(): Promise<void> {
    try {
      await this.authRepo.signOut()
    } catch (e) {
      throw e
    }
  }
}

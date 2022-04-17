import {UserListModel} from "~/core/domain/model/user";
import {UserListRepository} from "~/core/domain/repository/user";


export interface UserListUseCase {
  fetch(): Promise<UserListModel[]>
}


export class UserListUseCaseImpl implements UserListUseCase {
  private readonly userListRepository: UserListRepository

  constructor(userListRepository: UserListRepository) {
    this.userListRepository = userListRepository;
  }

  fetch(): Promise<UserListModel[]> {
    return this.userListRepository.fetch();
  }

}

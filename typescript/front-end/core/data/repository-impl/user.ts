import {UserListRepository} from "~/core/domain/repository/user";
import {UserListModel} from "~/core/domain/model/user";
import {DomainError} from "~/core/domain/error/error";


export class UserListRepositoryImpl implements UserListRepository {
  private count : number = 0
  fetch(): Promise<UserListModel[]> {
    this.count++;

    return Promise.resolve([])
      .then((value) => {
        if (this.count % 3 === 0) {
          throw new DomainError("hoge")
        }
        return value
      });
  }

}

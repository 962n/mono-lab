import {UserListRepository} from "~/core/domain/repository/user";
import {UserListModel} from "~/core/domain/model/user";


class UserListRepositoryImpl implements UserListRepository {
  fetch(): Promise<UserListModel[]> {
    return Promise.resolve([]);
  }

}

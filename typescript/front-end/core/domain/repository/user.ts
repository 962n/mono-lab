import {UserListModel} from "~/core/domain/model/user";

export interface UserListRepository {
  fetch(): Promise<UserListModel[]>
}

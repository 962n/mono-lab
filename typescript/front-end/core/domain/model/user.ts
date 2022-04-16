export class UserListModel {
  readonly id: number
  readonly name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class UserDetailModel {
  readonly id: number
  readonly name: string
  readonly height: number
  readonly weight: number
  readonly introduction: string

  constructor(id: number, name: string, height: number, weight: number, introduction: string) {
    this.id = id;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.introduction = introduction;
  }
}

export class DomainError implements Error {
  message: string;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.name = "DomainError"
  }
}

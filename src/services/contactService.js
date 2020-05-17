import Api from "./api";

export default class ContactService {
  static path = "contacts";

  static fetchContacts() {
    return Api.get(this.path);
  }
}
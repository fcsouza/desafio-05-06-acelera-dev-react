export default class Api {
  static baseUrl = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/";

  static get(path) {
    return new Promise((resolve, reject) => {
      fetch(`${Api.baseUrl}${path}`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}
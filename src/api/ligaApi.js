import 'whatwg-fetch';

class LigaApi {
  static getLiga(id) {
    const url = "http://localhost:3001/api/liga/" + id;
    return fetch(url, { method: 'GET' }).then(
      response => response.json()
    );
  }

  static getLigaTabelle(id) {
    const url = "http://localhost:3001/api/liga/" + id + "/tabelle";
    return fetch(url, { method: 'GET' }).then(
      response => response.json()
    );
  }
}

export default LigaApi;
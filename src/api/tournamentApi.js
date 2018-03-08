import 'whatwg-fetch';
import * as config from '../appConfig';
import delay from './delay';

class TournamentApi {
  /*
  static getTournament(id) {
    const url = config.API_URL + "tournaments/" + id;
    return fetch(url, { method: 'GET' }).then(
      response => response.json()
    );
  }
  */
  static getTournament(id) {
    const url = config.API_URL + "tournaments/" + id;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return fetch(url, { method: 'GET' }).then(
          response => resolve(response.json())
        );
      }, delay);
    });
  }
  /*
  static listTournaments() {
    const url = config.API_URL + "tournaments";
    return fetch(url, { method: 'GET' }).then(
      response => response.json()
    );
  */
  static listTournaments() {
    const url = config.API_URL + "tournaments";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return fetch(url, { method: 'GET' }).then(
          response => resolve(response.json())
        );
      }, delay);
    });
  }
}

export default TournamentApi;
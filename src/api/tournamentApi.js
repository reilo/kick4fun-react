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

  static updateMatch(tid, rid, mid, body) {
    const url = config.API_URL + "tournaments/" + tid + "/rounds/" + rid + "/matches/" + mid;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }).then(
          response => resolve(response.json())
        );
      }, delay);
    });
  }

  static updateRound(tid, rid, body) {
    const url = config.API_URL + "tournaments/" + tid + "/rounds/" + rid;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }).then(
          response => resolve(response.json())
        );
      }, delay);
    });
  }
}

export default TournamentApi;
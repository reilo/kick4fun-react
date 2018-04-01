import 'whatwg-fetch';
import * as config from '../appConfig';
import delay from './delay';

class KickerligaApi {

  static getLigaSummary() {
    const url = config.API_URL;
    return new Promise((resolve, reject) => {
      setTimeout(() => fetch(url, { method: 'GET' }).then(
        response => resolve(response.json())
      ).catch(
        error => reject(error)
      ), delay);
    });
  }

  static listPlayers() {
    const url = config.API_URL + "players";
    return new Promise((resolve, reject) => {
      setTimeout(() => fetch(url, { method: 'GET' }).then(
        response => resolve(response.json())
      ).catch(
        error => reject(error)
      ), delay);
    });
  }

  static createPlayer(body) {
    const url = config.API_URL + "players";
    return new Promise((resolve, reject) => {
      setTimeout(() => fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }).then(
        response => response.status == 200 ?
          resolve(response.body) : reject(response.statusText)
      ).catch(
        error => reject(error)
      ), delay);
    });
  }

  static updatePlayer(body) {
    const url = config.API_URL + "players/" + body.id;
    return new Promise((resolve, reject) => {
      setTimeout(() => fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }).then(
        response => response.status == 200 ?
          resolve(response.body) : reject(response.statusText)
      ).catch(
        error => reject(error)
      ), delay);
    });
  }

}

export default KickerligaApi;